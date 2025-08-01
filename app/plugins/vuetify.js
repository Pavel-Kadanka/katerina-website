import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((nuxtApp) => {
  const light = {
    dark: false,
    colors: {
      // Primary colors
      primary: '#D78BBF', // orchid pink
      'primary-darken-1': '#C67AAE',
      'primary-lighten-1': '#E9A8D6',
      
      // Secondary colors
      secondary: '#B29DD9', // lavender
      'secondary-darken-1': '#A18CC8',
      'secondary-lighten-1': '#C5B5EC',
      
      // Background colors - more pink, less blinding
      background: '#FDF2F8', // warmer pink-white
      surface: '#F8F0F5', // warmer lavender-tinted white
      accent: '#F9EBF3', // soft blush (background tint)
      
      // Text colors
      'text-primary': '#2E2E2E', // dark gray
      'text-secondary': '#666666', // medium gray
      
      // CTA colors
      cta: '#FF99C8', // rose-pink
      'cta-lighten-1': '#FFADE1', // light candy pink
      
      // System colors
      error: '#D32F2F',
      info: '#1976D2',
      success: '#388E3C',
      warning: '#FFA000',
    },
  }
  
  const dark = {
    dark: true,
    colors: {
      // Primary colors
      primary: '#E9A8D6', // lighter orchid
      'primary-darken-1': '#D78BBF',
      'primary-lighten-1': '#F2C4E3',
      
      // Secondary colors
      secondary: '#C5B5EC', // brighter pastel lavender
      'secondary-darken-1': '#B29DD9',
      'secondary-lighten-1': '#D4C7F0',
      
      // Background colors
      background: '#121212', // deep black
      surface: '#1F1B24', // deep muted purple
      accent: '#1A1A1D', // charcoal black
      
      // Text colors
      'text-primary': '#FFFFFF',
      'text-secondary': '#CCCCCC',
      
      // CTA colors
      cta: '#FFADE1', // light candy pink
      'cta-lighten-1': '#FFC2E8',
      
      // System colors
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
