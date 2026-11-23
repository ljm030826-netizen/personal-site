---
title: "This Website"
description: "A small, fast personal site for projects, writing, photos, and a private training log."
year: "2026"
role: "Design and build"
stack: ["Astro", "TypeScript", "Caddy", "Hetzner"]
featured: true
order: 3
---

This site is deliberately simple: static pages, no tracking, no third-party fonts, no client-side framework. The public part is a place for work, writing, and photos. The training part lives behind a private route and is updated by a small sync script.

## Why Astro

Most of the site is content. Astro lets me write Markdown for articles and projects, keep the layout in components, and ship almost no JavaScript. The build output is a folder of HTML, CSS, and images that any small server can serve.

## Why a private route

Health data is not portfolio material. The training page is protected separately and marked noindex. The public site can be open; the training log does not have to be.
