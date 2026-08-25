// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import node from '@astrojs/node';

// https://astro.build/config
function isAdmin(path) {
  return path.includes('/admin') || path.includes('/api/');
}

export default defineConfig({
  site: 'https://nl.peptidux.com',

  output: 'server',

  adapter: node({ mode: 'standalone' }),

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), sitemap({filter: (page) => !isAdmin(new URL(page).pathname), changefreq: 'weekly', priority: 0.7, lastmod: new Date()})]
});
