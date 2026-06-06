// @ts-check
import { defineConfig } from 'astro/config';
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://dramirwaly.com.au',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      // Exclude noindex routes — confirmation page and the 404 default
      filter: (page) =>
        !page.includes('/contact/thanks') &&
        !page.endsWith('/404'),
      // Prioritise the home and area pages, deprioritise policy/utility pages
      serialize(item) {
        const path = new URL(item.url).pathname;
        if (path === '/') item.priority = 1.0;
        else if (/^\/(skin-cancer-surgery|cosmetic-medicine|laser-medicine)\/?$/.test(path))
          item.priority = 0.9;
        else if (/^\/(about|services|contact|faqs)\/?$/.test(path))
          item.priority = 0.8;
        else if (/^\/(insights|private-gp-explained|insights\/[a-z-]+)\/?$/.test(path))
          item.priority = 0.7;
        else if (/^\/policies\/?$/.test(path))
          item.priority = 0.5;
        else if (/^\/(privacy|fees-and-billing|disclaimer|complaints|patient-rights|open-disclosure|communication-and-results|clinical-photography)\/?$/.test(path))
          item.priority = 0.3;
        else item.priority = 0.5;
        item.changefreq = ChangeFreqEnum.MONTHLY;
        return item;
      },
    }),
  ],
  vite: {
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
