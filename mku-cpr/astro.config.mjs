import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.mku-cpr.ac.ke',
  base: '/CPR-WEBSITE-MAIN/',
  trailingSlash: 'always',
  output: 'static',
  compressHTML: true,

  build: { format: 'directory' },

  integrations: [
    mdx(),
    tailwind({ applyBaseStyles: false }),
    sitemap({ changefreq: 'weekly' }),
    react(),
  ],

  prefetch: { defaultStrategy: 'viewport' },

  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },

  vite: {
    build: {
      cssCodeSplit: false,
    },
  },
});
