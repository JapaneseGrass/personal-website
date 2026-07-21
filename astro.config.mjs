// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

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
  // Emits /sitemap-index.xml at build time (needs `site` above to be set).
  // NOTE: @astrojs/sitemap is pinned to an exact 3.4.x in package.json. 3.5+
  // relies on Astro 5's `astro:routes:resolved` hook and crashes on Astro 4.
  integrations: [sitemap()],
});
