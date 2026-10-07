import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://web-expense-tracking.facware.com',
  output: 'static',
  integrations: [sitemap()],
  build: {
    // Generates contact.html, privacy-policy.html etc. (mirrors current URL structure)
    format: 'file',
  },
});
