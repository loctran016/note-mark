// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  nitro: {
    static: true,
  },

  content: {
    build: {
      markdown: {
        remarkPlugins: {},
        rehypePlugins: {},
        toc: {
          depth: 3, // include h3 headings
        },
        highlight: false,
      },
    },
  },

  modules: [
    "@nuxt/content",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
  ],
});
