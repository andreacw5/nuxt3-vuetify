// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Nuxt Example",
      titleTemplate: "%s | nuxt3-vuetify",
    },
  },
  modules: ['@nuxtjs/sitemap', '@nuxtjs/eslint-module'],
  css: ["vuetify/lib/styles/main.sass", '@mdi/font/css/materialdesignicons.css'],
  build: {
    transpile: ["vuetify"],
  },
})
