#!/usr/bin/env node
// ── Project copy drift check ────────────────────────────────────────────────
// The project cards in src/content/projects/ describe apps that live in other
// repos. Nothing regenerates that prose, so a feature landing upstream quietly
// makes the portfolio wrong. This fingerprints the upstream section that
// documents the feature set and fails when it has moved since the copy here
// was last reviewed.
//
//   npm run check:copy            verify (what CI runs)
//   npm run check:copy -- --accept   record the current upstream state as reviewed
//
// Re-accepting is an assertion that you looked at the card and it is accurate.
// Exit codes: 0 in sync, 1 drift, 2 the check itself could not run.

import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';

const CONFIG_URL = new URL('./project-copy-sync.json', import.meta.url);
const accept = process.argv.includes('--accept');

/** Pull the body of a `## Heading` section out of a markdown document. */
function extractSection(markdown, heading) {
  const lines = markdown.split('\n');
  const start = lines.findIndex((line) => line.trim() === heading);
  if (start === -1) return null;

  const rest = lines.slice(start + 1);
  const end = rest.findIndex((line) => /^##\s/.test(line));
  return (end === -1 ? rest : rest.slice(0, end)).join('\n');
}

// Collapse every run of whitespace before hashing. The upstream READMEs are
// hard-wrapped, so this keeps a pure re-wrap from reading as a feature change
// while still catching an added, removed, or reworded bullet.
function fingerprint(section) {
  const normalized = section.replace(/\s+/g, ' ').trim();
  return createHash('sha256').update(normalized).digest('hex').slice(0, 16);
}

async function fetchUpstream({ repo, branch, path }) {
  const url = `https://raw.githubusercontent.com/${repo}/${branch}/${path}`;
  let res;
  try {
    res = await fetch(url);
  } catch (cause) {
    throw new Error(`could not reach ${url}: ${cause.message}`, { cause });
  }
  if (!res.ok) throw new Error(`${url} returned HTTP ${res.status}`);
  return res.text();
}

const config = JSON.parse(await readFile(CONFIG_URL, 'utf8'));
const drifted = [];
let failedToCheck = false;

for (const project of config.projects) {
  const { slug, source, copy } = project;

  let current;
  try {
    const markdown = await fetchUpstream(source);
    const section = extractSection(markdown, source.section);
    if (section === null) {
      // The heading was renamed upstream; the config is now pointing at
      // nothing, which would otherwise look like a clean pass forever.
      console.error(
        `✗ ${slug}: no "${source.section}" heading in ${source.path}. ` +
          `Update "section" in project-copy-sync.json.`
      );
      failedToCheck = true;
      continue;
    }
    current = fingerprint(section);
  } catch (error) {
    console.error(`✗ ${slug}: ${error.message}`);
    failedToCheck = true;
    continue;
  }

  if (accept) {
    project.acknowledged = { fingerprint: current, at: new Date().toISOString().slice(0, 10) };
    console.log(`• ${slug}: recorded ${current} as reviewed`);
  } else if (current !== project.acknowledged.fingerprint) {
    drifted.push({ ...project, current });
  } else {
    console.log(`✓ ${slug}: copy matches upstream (${current})`);
  }
}

if (accept) {
  await writeFile(CONFIG_URL, `${JSON.stringify(config, null, 2)}\n`);
  process.exit(failedToCheck ? 2 : 0);
}

for (const { slug, label, source, copy, acknowledged, current } of drifted) {
  console.error(
    [
      '',
      `✗ ${slug}: ${label} has changed upstream since this site's copy was reviewed.`,
      `    upstream:  https://github.com/${source.repo}/blob/${source.branch}/${source.path}`,
      `    reviewed:  ${acknowledged.fingerprint} (${acknowledged.at})`,
      `    current:   ${current}`,
      '',
      `  Re-read ${copy} against the app's current features, update the`,
      '  description and tech list if a user-visible feature changed, then run:',
      '',
      '      npm run check:copy -- --accept',
      '',
    ].join('\n')
  );
}

if (drifted.length || failedToCheck) process.exit(drifted.length ? 1 : 2);
console.log('\nAll project copy is in sync.');
