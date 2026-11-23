# Jiaming Luo — personal site

A small, fast personal site for a CV, projects, writing, and photos.
Built with Astro; the public site is deployed to **GitHub Pages** at
<https://lajiaomian.codes>. The private training log lives outside GitHub Pages.

## Local development

    cd personal-site
    npm install
    npm run dev

Open http://localhost:4321.

Build / preview:

    npm run build
    npm run preview

## What is inside

    src/pages/index.astro          home
    src/pages/cv.astro             CV
    src/pages/projects/            project index + detail
    src/pages/blog/                writing index + detail
    src/pages/photos.astro         photo gallery
    src/content/blog/*.md          articles (Markdown)
    src/content/projects/*.md      projects (Markdown)
    src/data/site.ts               name, email, domain, nav
    src/data/cv.ts                 CV content
    src/data/photos.ts             photo captions
    public/photos/                 images (replace placeholders)
    public/CNAME                   custom domain for GitHub Pages
    .github/workflows/deploy.yml   build + deploy to GitHub Pages
    deploy/                        optional Caddy/server scripts for the private log

## Replace these placeholders

- **Name / email / domain**: `src/data/site.ts` and `astro.config.mjs`.
- **CV**: `src/data/cv.ts`. Public-safe details only; no address or phone.
- **Photos**: replace `public/photos/placeholder-*.svg` with your own JPG/WebP,
  then update `src/data/photos.ts`.
- **Portrait**: replace `public/photos/portrait.svg`.
- **GitHub / LinkedIn**: add them to `src/data/site.ts` and the footer.
- **Projects / articles**: add Markdown files with frontmatter; the lists sort themselves.

## Deploy the public site (GitHub Pages)

Static Astro site → GitHub Pages: free HTTPS + CDN, no server to maintain.

1. Create a **public** GitHub repo and push this folder to `main`.
   (Pages on the free plan needs a public repo; the content is public anyway.)
2. Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Repo → **Settings → Pages → Custom domain**: enter `lajiaomian.codes`
   (`public/CNAME` already contains it).
4. DNS at **Name.com** (where the domain is registered):

       A      @    185.199.108.153
       A      @    185.199.109.153
       A      @    185.199.110.153
       A      @    185.199.111.153
       CNAME  www  <github-username>.github.io

5. Wait for DNS to resolve, then tick **Enforce HTTPS**.

Every push to `main` runs `.github/workflows/deploy.yml`, which builds with
`npm ci` + `npm run build` and publishes `dist/`.

## Private training page (not on GitHub Pages)

GitHub Pages only serves public content, so the training log is deliberately not
deployed with the site. `src/data/site.ts` has `training: ''`, which hides the
Training nav link and the home-page CTA; set it to the real URL once that exists.

Two options:

- **€0** — keep the log on the Mac and reach it from your phone over Tailscale.
  Health data never leaves the house.
- **~€4/month** — Hetzner CAX11 + Caddy + Basic Auth. `deploy/` already contains
  the Caddyfile example, server setup, rsync deploy and the training sync/watcher.
  Put it on a subdomain (e.g. `log.lajiaomian.codes`), never on the public site.

## Privacy notes

- Public site: CV, photos, projects, articles. **No health data.**
- Never commit raw `.hae` files or `reports/` (already in `.gitignore`).
- If the training page is hosted: Basic Auth + `X-Robots-Tag: noindex`, EU host,
  and no raw data on the server — only generated reports.
- `robots.txt` keeps `/training/` disallowed for when the private page moves.

## Costs

- GitHub Pages: free.
- Domain: `.codes` registered at Name.com; if it came from the GitHub Student Pack
  the first year is free — renew before it expires.
- Optional private server: ~€4/month (Hetzner CAX11). The Student Pack's old
  DigitalOcean $200 credit is **no longer offered**, so don't plan around it.
