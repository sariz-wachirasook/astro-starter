import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import astroI18next from 'astro-i18next';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-starter.com',

  integrations: [
    // @astrojs/sitemap: https://docs.astro.build/en/guides/integrations-guide/sitemap/
    sitemap(),

    // astro-robots-txt: https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt#readme
    robotsTxt(),

    // @astrojs/tailwind: https://docs.astro.build/en/guides/integrations-guide/tailwind/
    tailwind(),

    // @astrojs/image: https://docs.astro.build/en/guides/integrations-guide/image/
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),

    // astro-i18next: https://github.com/yassinedoghri/astro-i18next#readme
    astroI18next(),
  ],
});
