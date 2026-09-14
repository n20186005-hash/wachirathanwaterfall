import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://wachirathanwaterfall.com',
  // 混合渲染：主页 SSR（实时天气），其余页面预渲染静态
  output: 'server',
  adapter: cloudflare({
    platformProxy: { enabled: true },
  }),
  i18n: {
    defaultLocale: 'th',
    locales: ['th', 'en', 'zh'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});