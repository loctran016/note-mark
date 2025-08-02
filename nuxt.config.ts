// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  experimental: {
    sqliteConnector: "native",
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: {
      name: "slide",
      mode: "out-in", // default
    },
  },

  content: {
    experimental: { sqliteConnector: "native" },
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
    "@nuxtjs/color-mode",
  ],
});
