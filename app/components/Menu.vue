<template>
  <v-app-bar
    :color="$vuetify.theme.current.dark ? 'surface' : 'surface'"
    elevation="2"
    class="app-menu"
  >
    <v-container class="d-flex align-center">
      <!-- Logo/Brand -->
      <a
        @click="handleLogoClick"
        class="text-h6 font-weight-bold brand-btn text-accent text-decoration-none cursor-pointer"
      >
        <v-icon class="mr-2">mdi-heart-pulse</v-icon>
        Kateřina Patyková
      </a>

      <v-spacer></v-spacer>

      <!-- Navigation Links -->
      <div class="d-none d-md-flex align-center">
        <v-btn
          v-for="item in navigationItems"
          :key="item.path"
          :to="item.path"
          variant="text"
          color="primary"
          class="mx-2"
          rounded="lg"
        >
          {{ item.title }}
        </v-btn>
        <v-btn
          to="/objednani"
          variant="elevated"
          class="mx-2 animated-gradient-btn"
          color="accent"
          rounded="xl"
        >
          Objednat
        </v-btn>
      </div>

      <!-- Theme Toggle -->
      <ThemeToggle class="ml-4" />

      <!-- Mobile Menu -->
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="d-md-none"
        color="primary"
      ></v-app-bar-nav-icon>
    </v-container>
  </v-app-bar>

  <!-- Mobile Navigation Drawer -->
  <v-navigation-drawer
    v-model="drawer"
    temporary
    :color="$vuetify.theme.current.dark ? 'surface' : 'surface'"
    class="mobile-drawer"
  >
    <v-list>
      <v-list-item
        v-for="item in navigationItems"
        :key="item.path"
        :to="item.path"
        @click="drawer = false"
        :color="item.color || 'primary'"
      >
        <v-list-item-title :class="item.mobileClass">
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
      <v-list-item class="d-flex justify-center">
        <v-btn
          to="/objednani"
          variant="elevated"
          class="animated-gradient-btn ma-2"
          color="accent"
          size="large"
          rounded="xl"
        >
          Objednat
        </v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const drawer = ref(false)

const navigationItems = [
  {
    title: 'Domů',
    path: '/',
  },
  {
    title: 'O mně',
    path: '/o-mne',
  },
  {
    title: 'Služby',
    path: '/sluzby',
  },
  {
    title: 'Reference',
    path: '/reference',
  },
  {
    title: 'Kontakt',
    path: '/kontakt',
  },
]

// Function to scroll to top
const scrollToTop = () => {
  if (process.client) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}

// Handle logo click - scroll to top if on landing page, navigate to landing if on other pages
const handleLogoClick = () => {
  if (route.path === '/') {
    // If on landing page, scroll to top
    scrollToTop()
  } else {
    // If on other page, navigate to landing page
    router.push('/')
  }
}


</script>

<style scoped>
.app-menu {
  backdrop-filter: blur(10px);
  border-bottom: 1px solid;
}

.v-theme--light .app-menu {
  border-bottom-color: rgba(139, 126, 200, 0.1);
}

.v-theme--dark .app-menu {
  border-bottom-color: rgba(154, 141, 216, 0.1);
}

.brand-btn {
  font-family: 'Cormorant Garamond', serif;
}

.cursor-pointer {
  cursor: pointer;
}

.mobile-drawer {
  backdrop-filter: blur(10px);
}

.v-theme--light .mobile-drawer {
  border-right: 1px solid rgba(139, 126, 200, 0.1);
}

.v-theme--dark .mobile-drawer {
  border-right: 1px solid rgba(154, 141, 216, 0.1);
}
</style>
