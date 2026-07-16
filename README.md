# Personal Website

A fast, accessible portfolio site built with [Astro](https://astro.build).
Static, content-driven, dark-mode aware, and deployed automatically to GitHub
Pages.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
```

Other commands:

```bash
npm run build    # build the production site into dist/
npm run preview  # preview the production build locally
```

## Where to edit your content

Everything is placeholder content — replace it with your own.

| What | File(s) |
| --- | --- |
| Name, role, tagline, bio, contact links, skills | `src/data/site.ts` |
| Work history (one file per job) | `src/content/experience/*.md` |
| Projects (one file per project) | `src/content/projects/*.md` |
| Your résumé PDF | `public/resume.pdf` (overwrite the placeholder) |
| Favicon | `public/favicon.svg` |
| SEO title / description defaults | `src/layouts/Layout.astro` |

### Adding a job

Create a new file in `src/content/experience/`, e.g. `03-lead.md`:

```markdown
---
role: "Engineering Lead"
company: "Acme Inc."
location: "Remote"
start: "Jan 2025"
end: "Present"
order: 0          # lower number = higher on the page
highlights:
  - "Did an impressive, quantified thing."
tech: ["TypeScript", "AWS"]
---
```

### Adding a project

Create a new file in `src/content/projects/`:

```markdown
---
title: "My Project"
description: "One or two sentences on what it is and why it's interesting."
tech: ["React", "Node.js"]
repo: "https://github.com/you/project"   # optional
demo: "https://project.example.com"      # optional
featured: true                            # featured projects sort first
order: 1
---
```

## Deploy to GitHub Pages

1. **Create the repo** and push this code:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```

2. **Set your URLs** in `astro.config.mjs`:
   - Project site (`https://<username>.github.io/<repo>`):
     ```js
     site: 'https://<username>.github.io',
     base: '/<repo>',
     ```
   - Root user site (repo named `<username>.github.io`) or a custom domain:
     ```js
     site: 'https://your-domain.com',
     base: '/',
     ```

3. **Enable Pages**: on GitHub go to **Settings → Pages → Build and
   deployment → Source** and choose **GitHub Actions**.

4. **Push.** The included workflow (`.github/workflows/deploy.yml`) builds and
   deploys on every push to `main`. Your site goes live at the `site`/`base`
   URL above.

## Custom domain (optional)

Add a file named `public/CNAME` containing just your domain (e.g.
`angelrodriguez.dev`), set `site` to that domain and `base: '/'`, then configure
the DNS records GitHub shows under Settings → Pages.
