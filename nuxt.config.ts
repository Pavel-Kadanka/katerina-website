import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css',
    '@/assets/styles/gradients.css',
    '@/assets/styles/global.scss',
    '@/assets/styles/animations.css',
  ],

  // Page transition configuration
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },

  // Plugins
  plugins: [
    '~/plugins/router.client.ts'
  ],

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    plugins: [
      vuetify(),
    ],
  },
})