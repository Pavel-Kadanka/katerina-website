<template>
  <v-app>
    <v-app-bar color="primary">
      <v-toolbar-title>My App</v-toolbar-title>
      <v-spacer />
      <v-btn v-for="item in navItems" :key="item.title" :to="item.to" text tag="NuxtLink">
        {{ item.title }}
      </v-btn>
      <v-btn icon @click="toggleTheme">
        <v-icon>{{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="d-flex align-center justify-center">
        <slot />
    </v-main>

    <v-footer class="text-center d-flex flex-column ga-2 py-4">
      <div class="d-flex ga-3 justify-center">
        <v-btn
          v-for="icon in icons"
          :key="icon.name"
          :icon="icon.icon"
          :href="icon.url"
          target="_blank"
          density="comfortable"
          variant="text"
        ></v-btn>
      </div>
      <v-divider class="my-2" thickness="2" width="50"></v-divider>
      <div class="text-caption font-weight-regular opacity-60">
        &copy; {{ new Date().getFullYear() }} — <strong>My App</strong>
      </div>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const drawer = ref(false)
const navItems = [
  { title: 'Home', to: '/' },
  { title: 'About', to: '/about' },
  { title: 'Contact', to: '/contact' },
]
const icons = [
  { icon: 'mdi-facebook', url: 'https://facebook.com' },
  { icon: 'mdi-twitter', url: 'https://twitter.com' },
  { icon: 'mdi-linkedin', url: 'https://linkedin.com' },
  { icon: 'mdi-instagram', url: 'https://instagram.com' },
]

const theme = useTheme()
const isDark = computed(() => theme.global.name.value === 'dark')
function toggleTheme() {
  theme.global.name.value = isDark.value ? 'light' : 'dark'
}
</script>