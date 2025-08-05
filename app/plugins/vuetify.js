import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default defineNuxtPlugin((nuxtApp) => {
  const light = {
    dark: false,
    colors: {
      // Primary colors - Soft lavender (spiritual, calming)
      primary: '#8B7EC8',
      'primary-darken-1': '#7A6BB8',
      'primary-lighten-1': '#9A8DD8',
      
      // Secondary colors - Warm pastel pink (feminine, soft)
      secondary: '#E8C1D3',
      'secondary-darken-1': '#D7B0C2',
      'secondary-lighten-1': '#F0D2E4',
      
      // Accent colors - Brighter pink-purple for call-to-actions
      accent: '#D49DC9',
      'accent-darken-1': '#C38CB8',
      'accent-lighten-1': '#E5B0DA',
      
      // Surface colors - Pale pink background for sections
      surface: '#FAF7FC',
      background: '#FAF7FC',
      
      // Text colors - Improved visibility
      'text-primary': '#2C3E50',
      'text-secondary': '#4A5568', // Darker for better visibility
      
      // System colors
      error: '#FF6B6B',
      info: '#B39DDB',
      success: '#A3D9A5',
      warning: '#FFB74D',
    },
  }
  
  const dark = {
    dark: true,
    colors: {
      // Primary colors - Lighter lavender for dark theme
      primary: '#9A8DD8',
      'primary-darken-1': '#8B7EC8',
      'primary-lighten-1': '#A99CE8',
      
      // Secondary colors - Softer pink for dark theme
      secondary: '#F0D2E4',
      'secondary-darken-1': '#E8C1D3',
      'secondary-lighten-1': '#F8E2F4',
      
      // Accent colors - Brighter accent for dark theme
      accent: '#E5B0DA',
      'accent-darken-1': '#D49DC9',
      'accent-lighten-1': '#F0C5EB',
      
      // Background colors - Deep purple-tinted dark
      background: '#1A1A2E',
      surface: '#16213E',
      
      // Text colors - Improved visibility
      'text-primary': '#FFFFFF',
      'text-secondary': '#E8E8E8', // Brighter for better visibility
      
      // System colors
      error: '#FF8A8A',
      info: '#C7A8E8',
      success: '#B8E6B8',
      warning: '#FFD280',
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
      aliases,
      sets: { mdi }
    },
  })
  
  nuxtApp.vueApp.use(vuetify)
})