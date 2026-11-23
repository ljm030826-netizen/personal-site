import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lajiaomian.codes',
  integrations: [sitemap()],
  redirects: {
    '/projects': '/',
    '/projects/training-diagnostic': '/training/',
    '/projects/health-export-pipeline': '/training/',
    '/projects/personal-site': '/',
    '/blog': '/diary/',
  },
  prefetch: true,
});
