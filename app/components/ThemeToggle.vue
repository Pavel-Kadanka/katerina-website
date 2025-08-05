<template>
  <v-btn
    @click="toggleTheme"
    :color="isDark ? 'primary' : 'secondary'"
    variant="text"
    size="small"
    class="theme-toggle-btn"
    :title="isDark ? 'Přepnout na světlý režim' : 'Přepnout na tmavý režim'"
  >
    <v-icon v-if="isDark" size="20">mdi-weather-sunny</v-icon>
    <v-icon v-else size="20">mdi-weather-night</v-icon>
  </v-btn>
</template>

<script setup>
import { useTheme } from 'vuetify'
import { computed } from 'vue'

const theme = useTheme()

const isDark = computed(() => theme.global.current.value.dark)

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<style scoped>
.theme-toggle-btn {
  transition: all 0.3s ease;
  border-radius: 50%;
  min-width: 40px;
  height: 40px;
}

.v-theme--light .theme-toggle-btn {
  color: #8B7EC8;
}

.v-theme--light .theme-toggle-btn:hover {
  background-color: rgba(139, 126, 200, 0.1);
  transform: scale(1.1);
}

.v-theme--dark .theme-toggle-btn {
  color: #9A8DD8;
}

.v-theme--dark .theme-toggle-btn:hover {
  background-color: rgba(154, 141, 216, 0.1);
  transform: scale(1.1);
}
</style> 