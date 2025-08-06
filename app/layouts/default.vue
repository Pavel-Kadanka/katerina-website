<template>
  <v-app>
    <!-- Header -->
    <Menu />

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
              <v-icon size="24" color="accent" class="mr-2">mdi-heart-pulse</v-icon>
              <div class="text-h6 font-weight-bold text-accent">Kateřina Patyková</div>
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
              <v-icon size="16" color="accent" class="mr-1">mdi-email</v-icon>
              katerina.patykova@email.cz
            </div>
            <div class="text-body-2 text-secondary mb-2">
              <v-icon size="16" color="accent" class="mr-1">mdi-phone</v-icon>
              +420 123 456 789
            </div>
            <div class="text-body-2 text-secondary">
              <v-icon size="16" color="accent" class="mr-1">mdi-map-marker</v-icon>
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
            color="accent"
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
        
        <!-- Web Development Credit -->
        <div class="text-caption text-secondary mt-2">
          <span>Web vytvořil <a href="https://www.sociya.cz/" target="_blank" class="text-accent text-decoration-none">Sociya</a></span>
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup>
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
</script>

<style scoped>
.logo {
  transition: transform 0.2s ease;
}

.logo:hover {
  transform: scale(1.05);
}
</style>