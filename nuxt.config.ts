// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "nuxt3-vuetify",
      titleTemplate: "%s | nuxt3-vuetify",
    },
  },
  css: ["vuetify/lib/styles/main.sass", '@mdi/font/css/materialdesignicons.css'],
  build: {
    transpile: ["vuetify"],
  },
})
