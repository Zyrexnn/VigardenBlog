import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://vigarden.blog',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: "id",
    locales: ["id", "en", "ja"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
