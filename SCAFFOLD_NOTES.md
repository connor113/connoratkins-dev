# Scaffold notes — connoratkins-dev

Generated 2026-04-16. This file documents what the scaffold agent did so you
can pick up where it left off.

## What was created

### Stack
- Astro v6.1.7 (minimal template, TypeScript strict).
- No frameworks (no React, Vue, Svelte). No client JS beyond Astro defaults.
- System font stack. Dark mode via `prefers-color-scheme` (no toggle).
- Accent colour `#0066CC`. Light bg `#fafafa`, dark bg `#0a0a0a`.

### Project layout
```
.env.example                         — document PUBLIC_ENABLE_ANALYTICS / DOMAIN
.github/workflows/deploy.yml         — stock Astro GitHub Pages workflow
.gitignore                           — Astro default + .env
astro.config.mjs                     — site + base configured for project-pages URL
package.json                         — scripts: dev, build, preview, astro
public/CNAME                         — empty placeholder + instructions
public/favicon.ico, favicon.svg      — Astro defaults
public/figures/*                     — 6 figures copied from SecondBrain
src/content.config.ts                — blog collection schema (v6 glob loader)
src/content/blog/the-token-economy.md — post (body populated by P1.5 agent)
src/layouts/BaseLayout.astro         — shared layout, styles, analytics gate
src/pages/index.astro                — home
src/pages/blog/index.astro           — post list (newest first)
src/pages/blog/[...slug].astro       — post detail page
tsconfig.json                        — Astro strict preset
```

### Content collection
Defined in `src/content.config.ts` with schema
`{ title: string, description: string, pubDate: Date, image: string }`.

Astro v6 changed from auto-discovered `src/content/<name>/` collections to the
explicit `glob` loader — the config lives at `src/content.config.ts` (singular,
no folder) rather than the legacy `src/content/config.ts`.

### Figures copied
From `C:\Users\conno\Documents\GitHub\SecondBrain\Automation\General\figures\`
into `public/figures/` (the README was skipped):
- fig1-tokens-in-tokens-out.png / .svg
- fig2-openclaw-harness.png / .svg
- fig3-human-agency-analogy.png / .svg

Reference them from Markdown/Astro as `/figures/fig1-...png` — Astro prepends
the base URL automatically for `public/` assets.

### Analytics
Plausible snippet lives in `src/layouts/BaseLayout.astro`, gated behind
`import.meta.env.PUBLIC_ENABLE_ANALYTICS === "true"`. It will not fire on
`npm run dev` unless you copy `.env.example` to `.env` and flip the flag.
In production on GitHub Pages, set `PUBLIC_ENABLE_ANALYTICS=true` via repo
secrets or a checked-in `.env.production` (the workflow inherits env).

## Verify

```bash
cd C:\Users\conno\Documents\GitHub\connoratkins-dev
npm install         # already done by the scaffold agent
npm run dev         # http://localhost:4321/connoratkins-dev/
npm run build       # outputs to ./dist
npm run preview     # serves the built output
```

Build status at scaffold time: passing. 3 pages generated (`/`, `/blog`,
`/blog/the-token-economy`). All three return HTTP 200 via dev server.

## Git — you do this

The agent deliberately did NOT run `git init` or any git commands. Once you
pick a domain and a repo name:

```bash
cd C:\Users\conno\Documents\GitHub\connoratkins-dev
git init
git branch -M main
git add .
git commit -m "Initial scaffold"
gh repo create connor113/<repo-name> --public --source . --remote origin --push
```

Then in the new repo: Settings → Pages → Source = "GitHub Actions". The
workflow will deploy on the next push to `main`.

## Deploy URL — current

Until a custom domain is set, the site will live at:

> **https://connor113.github.io/connoratkins-dev/**

(matches `site` + `base` in `astro.config.mjs`).

If you name the repo something other than `connoratkins-dev`, update `base`
in `astro.config.mjs` to match.

## Adding a custom domain after registration

1. Register the domain at Porkbun (order of preference:
   `connoratkins.dev`, `.me`, `.ai`, or a branded domain).
2. Edit `public/CNAME` — delete the comments and put the bare domain on one
   line (e.g. `connoratkins.dev`).
3. Edit `astro.config.mjs`:
   - change `site` to `https://<your-domain>`
   - remove the `base: '/connoratkins-dev'` line
4. In GitHub → Settings → Pages, set Custom domain to the same value and let
   it verify; enable "Enforce HTTPS" once the cert provisions.
5. At Porkbun DNS:
   - ALIAS / ANAME / flattened CNAME `@` → `connor113.github.io`
     (or, if Porkbun doesn't offer apex ALIAS, four A records to GitHub
     Pages IPs: 185.199.108.153, 185.199.109.153, 185.199.110.153,
     185.199.111.153)
   - `CNAME www` → `connor113.github.io`
6. Push to `main`. Workflow redeploys; propagation is usually <10 min.

Also: update internal absolute paths that used the `base` prefix — the
layout and nav use `import.meta.env.BASE_URL` so they rewire automatically
when `base` is dropped.

## What's left

- Register the domain and wire up the CNAME (manual, see above).
- Create the GitHub repo and push (manual, see above).
- Phase 2: build the `/about` page (the home-page "About" link currently
  goes to `#` with `aria-disabled="true"`).
- Optional: enable analytics in production by setting
  `PUBLIC_ENABLE_ANALYTICS=true`.
