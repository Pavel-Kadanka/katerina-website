<template>
  <v-app>
    <!-- Header -->
    <v-app-bar 
      :color="$vuetify.theme.current.dark ? 'surface' : 'background'" 
      elevation="2"
      class="px-4"
    >
      <v-container class="d-flex align-center justify-space-between" fluid>
        <!-- Logo -->
        <div class="logo" @click="handleLogoClick" style="cursor: pointer;">
          <div class="d-flex align-center">
            <v-icon size="32" color="primary" class="mr-2">mdi-heart-pulse</v-icon>
            <div>
              <div class="text-h6 font-weight-bold text-primary">Kateřina Patyková</div>
              <div class="text-caption text-secondary">Reiki & Šamanské léčení</div>
            </div>
          </div>
        </div>

        <!-- Desktop Menu - Centered -->
        <div v-if="windowSize.mdAndUp.value" class="d-flex justify-center align-center flex-grow-1">
          <div class="d-flex justify-center align-center gap-4">
            <v-btn 
              v-for="item in navItems" 
              :key="item.text" 
              :to="item.to" 
              variant="text" 
              color="primary"
              class="text-body-1" 
              rounded 
              :class="{ 'bg-primary-container text-primary': route.path === item.to }"
            >
              {{ item.text }}
            </v-btn>
          </div>
        </div>

        <!-- Desktop Theme Toggle -->
        <div v-if="windowSize.mdAndUp.value" class="d-flex align-center">
          <v-btn @click="toggleTheme" variant="text" color="primary" icon>
            <v-icon>
              {{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}
            </v-icon>
          </v-btn>
        </div>

        <!-- Mobile Menu Icon -->
        <div v-if="windowSize.smAndDown.value" class="d-flex align-center">
          <v-btn @click="toggleTheme" variant="text" color="primary" icon class="mr-2">
            <v-icon>
              {{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}
            </v-icon>
          </v-btn>
          <v-btn icon variant="text" @click="showMobileMenu = true">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </div>
      </v-container>
    </v-app-bar>

    <!-- Mobile Fullscreen Menu -->
    <v-overlay v-model="showMobileMenu" class="align-center justify-center">
      <v-fade-transition>
        <v-card 
          v-if="showMobileMenu" 
          class="d-flex flex-column align-center justify-start" 
          width="100vw" 
          height="100vh" 
          style="border-radius: 0;"
          :color="$vuetify.theme.current.dark ? 'surface' : 'background'"
        >
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

          <!-- Mobile Logo -->
          <div class="d-flex align-center mb-8">
            <v-icon size="48" color="primary" class="mr-3">mdi-heart-pulse</v-icon>
            <div>
              <div class="text-h5 font-weight-bold text-primary">Kateřina Patyková</div>
              <div class="text-body-2 text-secondary">Reiki & Šamanské léčení</div>
            </div>
          </div>

          <div class="d-flex flex-column align-center gap-4 w-100 px-4">
            <v-btn 
              v-for="item in navItems" 
              :key="item.text" 
              class="w-100 mb-2" 
              variant="tonal" 
              size="large"
              :class="{ 'bg-primary-container text-primary': route.path === item.to }" 
              @click="navigate(item.to)"
            >
              <v-icon start>{{ item.icon }}</v-icon>
              {{ item.text }}
            </v-btn>
          </div>
        </v-card>
      </v-fade-transition>
    </v-overlay>

    <!-- Main Content -->
    <v-main>
      <slot />
    </v-main>

    <!-- Footer -->
    <v-footer 
      :color="$vuetify.theme.current.dark ? 'surface' : 'background'" 
      class="text-center d-flex flex-column ga-4 py-8"
    >
      <v-container>
        <div class="d-flex flex-column flex-md-row justify-space-between align-center mb-6">
          <!-- Company Info -->
          <div class="text-center text-md-left mb-4 mb-md-0">
            <div class="d-flex align-center justify-center justify-md-start mb-2">
              <v-icon size="24" color="primary" class="mr-2">mdi-heart-pulse</v-icon>
              <div class="text-h6 font-weight-bold text-primary">Kateřina Patyková</div>
            </div>
            <div class="text-body-2 text-secondary mb-2">
              Certifikovaná terapeutka Reiki a šamanského léčení
            </div>
            <div class="text-caption text-secondary">
              Pomáhám lidem najít vnitřní rovnováhu a harmonii
            </div>
          </div>

          <!-- Contact Info -->
          <div class="text-center text-md-right">
            <div class="text-body-2 text-secondary mb-2">
              <v-icon size="16" class="mr-1">mdi-email</v-icon>
              katerina.patykova@email.cz
            </div>
            <div class="text-body-2 text-secondary mb-2">
              <v-icon size="16" class="mr-1">mdi-phone</v-icon>
              +420 123 456 789
            </div>
            <div class="text-body-2 text-secondary">
              <v-icon size="16" class="mr-1">mdi-map-marker</v-icon>
              Brno – centrum
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div class="d-flex ga-3 justify-center mb-4">
          <v-btn
            v-for="icon in socialIcons"
            :key="icon.name"
            :icon="icon.icon"
            :href="icon.url"
            target="_blank"
            color="primary"
            density="comfortable"
            variant="text"
            size="small"
          ></v-btn>
        </div>

        <v-divider class="my-4" thickness="1"></v-divider>

        <!-- Legal Links -->
        <div class="d-flex flex-wrap justify-center gap-4 mb-4">
          <v-btn 
            v-for="link in legalLinks" 
            :key="link.text"
            :to="link.to"
            variant="text" 
            color="secondary" 
            size="small"
          >
            {{ link.text }}
          </v-btn>
        </div>

        <!-- Copyright -->
        <div class="text-caption text-secondary">
          <span>&copy; {{ new Date().getFullYear() }} Kateřina Patyková - Reiki & Šamanské léčení. Všechna práva vyhrazena.</span>
        </div>
        <div class="text-caption text-secondary mt-1">
          <span>Terapeutická sezení nenahrazují lékařskou péči. Při zdravotních problémech se vždy poraďte s lékařem.</span>
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const windowSize = useWindowSize()

const navItems = [
  { text: 'Domů', to: '/', icon: 'mdi-home' },
  { text: 'O mně', to: '/o-mne', icon: 'mdi-account' },
  { text: 'Služby', to: '/sluzby', icon: 'mdi-heart-pulse' },
  { text: 'Reference', to: '/reference', icon: 'mdi-star' },
  { text: 'Objednání', to: '/objednani', icon: 'mdi-calendar-check' },
  { text: 'Kontakt', to: '/kontakt', icon: 'mdi-email' },
]

const socialIcons = [
  { icon: 'mdi-facebook', url: 'https://facebook.com', name: 'Facebook' },
  { icon: 'mdi-instagram', url: 'https://instagram.com', name: 'Instagram' },
  { icon: 'mdi-linkedin', url: 'https://linkedin.com', name: 'LinkedIn' },
]

const legalLinks = [
  { text: 'Ochrana osobních údajů', to: '/gdpr' },
  { text: 'Obchodní podmínky', to: '/obchodni-podminky' },
  { text: 'Cookies', to: '/cookies' },
]

const router = useRouter()
const route = useRoute()

const showMobileMenu = ref(false)

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

const theme = useTheme()
const isDark = computed(() => theme.global.name.value === 'dark')

function toggleTheme() {
  theme.global.name.value = isDark.value ? 'light' : 'dark'
}
</script>

<style scoped>
.logo {
  transition: transform 0.2s ease;
}

.logo:hover {
  transform: scale(1.05);
}
</style>