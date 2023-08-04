// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    // CSS file in the project
    '@/assets/scss/index.scss',
  ],
  app: {
    head: {
      charset: 'utf-8',
      title: 'Naraon',
      meta: [
        {name: 'description', content: ''},
        {name: 'author', content: ''}
      ]
    }
  },
  modules: ['@element-plus/nuxt']
})
