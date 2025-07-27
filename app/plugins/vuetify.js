import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((nuxtApp) => {
  const light = {
    dark: false,
    colors: {
      primary: '#1976D2',
      'primary-darken-1': '#1565C0',
      secondary: '#424242',
      'secondary-darken-1': '#1B1B1B',
      background: '#F5F5F5',
      surface: '#FFFFFF',
      error: '#D32F2F',
      info: '#1976D2',
      success: '#388E3C',
      warning: '#FFA000',
    },
  }
  const dark = {
    dark: true,
    colors: {
      primary: '#90CAF9',
      'primary-darken-1': '#1976D2',
      secondary: '#B0BEC5',
      'secondary-darken-1': '#78909C',
      background: '#121212',
      surface: '#1E1E1E',
      error: '#EF9A9A',
      info: '#90CAF9',
      success: '#A5D6A7',
      warning: '#FFE082',
    },
  }
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'light',
      themes: {
        light,
        dark,
      },
    },
    icons: {
      defaultSet: 'mdi',
    },
  })
  nuxtApp.vueApp.use(vuetify)
})
