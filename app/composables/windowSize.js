import { useDisplay } from 'vuetify'

// Note: All returned properties are refs. Use .value in your components/templates.
export const useWindowSize = () => {
  const display = useDisplay()
  return {
    ...display,
    current: display.name, // e.g., 'xs', 'sm', 'md', etc.
  }
}