// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    // CSS file in the project
    '@/assets/scss/index.scss',
  ],
  modules: ['@element-plus/nuxt']
})
