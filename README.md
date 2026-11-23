# Jiaming Luo — personal site

A small, fast personal site for a CV, projects, writing, photos, and a **private** training log.
Built with Astro, served by Caddy on a Hetzner/DigitalOcean VPS.

## Local development

    cd personal-site
    npm install
    npm run dev

Open http://localhost:4321.

Build:

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
    deploy/                        Caddy, setup, deploy, training sync

## Replace these placeholders

- **Name / email / domain**: src/data/site.ts and astro.config.mjs.
- **CV**: src/data/cv.ts. I used public-safe details from the CV; no address or phone.
- **Photos**: replace public/photos/placeholder-*.svg with your own JPG/WebP files, then update src/data/photos.ts.
- **Portrait**: replace public/photos/portrait.svg.
- **GitHub / LinkedIn**: add them to src/data/site.ts and the footer if you want.
- **Projects / articles**: add Markdown files with frontmatter; the lists sort themselves.

## Deploy on DigitalOcean with the GitHub Student Pack

1. Verify the GitHub Student Developer Pack: https://education.github.com/pack
2. Redeem the **DigitalOcean $200 credit** from the pack.
3. Create a Droplet:
   - Region: **Frankfurt (FRA1)**
   - Image: **Ubuntu 24.04 LTS**
   - Plan: **Basic $6/month** (1 vCPU / 1 GB / 25 GB) — enough because analysis runs on the Mac
   - Authentication: **SSH key** (add the public key below)
   - Hostname: jiaming-site
4. Add DNS records at your domain registrar (Namecheap .me is free for a year via the pack):
   - A @ -> your droplet IPv4
   - A www -> your droplet IPv4
5. SSH in and run the setup script:

       ssh root@YOUR_DROPLET_IP
       mkdir -p /root/setup
       # copy deploy/ to /root/setup, then:
       DOMAIN=your-domain.me TRAINING_USER=karwin bash /root/setup/setup-server.sh
       # it prompts for the training-page password

6. From the Mac, deploy the public site:

       cd personal-site
       SERVER=root@YOUR_DROPLET_IP ./deploy/deploy-site.sh

7. Open https://your-domain.me; the training page is https://your-domain.me/training/
   (Basic Auth, noindex).

### SSH public key

    ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIEGSdlJmOIeOa2+x4Nv8DCraizglVsIKdxVaPk4pWIIK

## Real-time training sync

The training report is generated on the Mac from the iCloud AutoSync folder, then
pushed to the server. It does not expose raw health data.

    cd personal-site
    SERVER=root@YOUR_DROPLET_IP ./deploy/sync-training.sh

For near-real-time updates:

    brew install fswatch
    SERVER=root@YOUR_DROPLET_IP ./deploy/watch-training.sh

The watcher debounces changes and regenerates the **current week** report. For the
weekly PDF routine, the DSH schedule at Monday 08:00 remains the source of truth.

If you want true real-time without the Mac, switch Health Auto Export to its REST
API automation and POST JSON directly to a small FastAPI endpoint. That is a larger
change; the iCloud pipeline is the first version.

## Security / privacy

- Public site: CV, photos, projects, articles. No health data.
- /training/* is behind Caddy Basic Auth and X-Robots-Tag: noindex.
- Do not put raw .hae files or reports/ in this repo.
- After SSH keys work, disable password login in /etc/ssh/sshd_config.
- Back up /srv and /etc/caddy regularly (restic/Borg to a Hetzner Storage Box).
- For stricter access, replace Basic Auth with Tailscale Serve or Cloudflare Access.

## Costs

- DigitalOcean: $6/month from the $200 student credit. The credit expires after 1 year,
  so plan to move to Hetzner CAX11 later if needed.
- Domain: Namecheap .me free for one year via Student Pack; renew around €10–15/year.
- Caddy, Astro, Git: free/open source.
