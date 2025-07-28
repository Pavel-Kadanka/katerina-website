<template>
  <v-app>
    <v-container class="d-flex align-center justify-space-between bg-surface" fluid>
      <div class="logo" @click="handleLogoClick" style="cursor: pointer;">
        <v-img src="/favicon.ico" alt="JarasServis" width="75" />
      </div>

      <!-- Desktop Menu -->
      <div v-if="windowSize.mdAndUp.value" class="d-flex justify-center align-center gap-4">
        <v-btn v-for="item in navItems" :key="item.text" :to="item.to" variant="text" color="primary"
          class="text-body-1" rounded :class="{ 'bg-primary-container text-primary': route.path === item.to }">
          {{ item.text }}
        </v-btn>
        <v-btn @click="toggleTheme" variant="text" color="primary" icon>
          <v-icon>
            {{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}
          </v-icon>
        </v-btn>
      </div>

      <!-- Mobile Menu Icon -->
       <div v-if="windowSize.smAndDown.value">
        <v-btn @click="toggleTheme" variant="text" color="primary" icon>
          <v-icon>
            {{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}
          </v-icon>
        </v-btn>
        <v-btn class="pa-0 ma-0" icon variant="text" @click="showMobileMenu = true">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
       </div>
    </v-container>

    <!-- Mobile Fullscreen Menu -->
    <v-overlay v-model="showMobileMenu" class="align-center justify-center">
      <v-fade-transition>
                 <v-card v-if="showMobileMenu" class="d-flex flex-column align-center justify-start" 
                 width="100vw" height="100vh" style="border-radius: 0;">
           <div class="d-flex justify-end align-center pt-8 pr-4 w-100">
             <v-btn @click="toggleTheme" variant="text" color="primary" icon>
               <v-icon>
                 {{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}
               </v-icon>
             </v-btn>
             <v-btn icon variant="text" @click="showMobileMenu = false">
               <v-icon>mdi-close</v-icon>
             </v-btn>
           </div>

          <v-img src="/favicon.ico" alt="JarasServis" width="100" class="mb-8" />

          <div class="d-flex flex-column align-center gap-4 w-100">
            <v-btn v-for="item in navItems" :key="item.text" class="w-50 mb-2" variant="tonal" size="large"
              :class="{ 'bg-primary-container text-primary': route.path === item.to }" @click="navigate(item.to)">
              <v-icon start>{{ item.icon }}</v-icon>
              {{ item.text }}
            </v-btn>
            
            <!-- Theme toggle in mobile menu -->
            <v-btn class="w-50" variant="tonal" size="large" @click="toggleTheme">
              <v-icon start>{{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
              {{ isDark ? 'Světlý režim' : 'Tmavý režim' }}
            </v-btn>
          </div>
        </v-card>
      </v-fade-transition>
    </v-overlay>

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
          color="primary"
          density="comfortable"
          variant="text"
        ></v-btn>
      </div>
      <v-divider class="my-2" thickness="2" width="50"></v-divider>
      <div class="text-caption font-weight-regular opacity-60">
        <span>Web vytvořila <a href="sociya.cz" class="font-weight-bold text-primary">Sociya</a></span> &copy; {{ new Date().getFullYear() }}
      </div>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const windowSize = useWindowSize()

const navItems = [
  { text: 'Domů', to: '/', icon: 'mdi-home' },
  { text: 'O nás', to: '/o-nas', icon: 'mdi-information' },
  { text: 'Služby', to: '/sluzby', icon: 'mdi-briefcase' },
  { text: 'Kariéra', to: '/kariera', icon: 'mdi-account-tie' },
  { text: 'Kontakt', to: '/kontakt', icon: 'mdi-email' },
]

const router = useRouter()
const route = useRoute()

const visible = ref(false)
const showMobileMenu = ref(false)

onMounted(() => {
  setTimeout(() => {
    visible.value = true
  }, 200)
})

function navigate(to) {
  showMobileMenu.value = false
  router.push(to)
}

function handleLogoClick() {
  if (route.path === '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    router.push('/')
  }
}

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