// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // ── GitHub Pages deployment ──────────────────────────────────────────────
  // If you deploy to https://<username>.github.io/<repo>, set:
  //   site: 'https://<username>.github.io'
  //   base: '/<repo>'
  // If you deploy to a custom domain or a <username>.github.io root repo,
  // set `site` to that URL and remove (or empty) `base`.
  site: 'https://JapaneseGrass.github.io',
  base: '/personal-website',
});
