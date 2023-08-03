// https://nuxt.com/docs/api/configuration/nuxt-config
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    // CSS file in the project
    '@/assets/scss/index.scss',
  ],
  transpileDependencies: true,
  lintOnSave:false,
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  }
})
