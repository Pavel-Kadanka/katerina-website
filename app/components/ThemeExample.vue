<template>
  <div class="theme-example">
    <!-- Hero Section -->
    <v-container class="animated-gradient-bg pa-8">
      <v-row justify="center" align="center" class="min-vh-100">
        <v-col cols="12" md="8" class="text-center">
          <h1 class="gradient-text-primary mb-4">
            Reiki & Šamanské léčení
          </h1>
          <p class="text-body text-h6 mb-6">
            Harmonizace těla a duše pomocí jemného energetického ošetření
          </p>
          <v-btn
            color="accent"
            size="large"
            class="animated-gradient-btn"
            rounded="xl"
            elevation="4"
          >
            <v-icon left>mdi-heart</v-icon>
            Objednat se
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <!-- Services Section -->
    <v-container class="section-container">
      <v-row>
        <v-col cols="12" class="text-center mb-8">
          <h2 class="gradient-text-primary">Naše služby</h2>
          <div class="spiritual-divider mx-auto" style="width: 100px;"></div>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col cols="12" md="4" v-for="(service, index) in services" :key="index">
          <v-card
            class="pa-6 mb-6 hover-lift spiritual-shadow"
            color="surface"
            elevation="2"
            rounded="xl"
          >
            <div class="text-center mb-4">
              <v-icon
                :icon="service.icon"
                size="48"
                color="primary"
                class="floating-icon"
              ></v-icon>
            </div>
            <v-card-title class="text-h5 text-primary font-weight-bold text-center">
              {{ service.title }}
            </v-card-title>
            <v-card-text class="text-body-1 text-center">
              {{ service.description }}
            </v-card-text>
            <div class="text-center">
              <v-btn
                color="accent"
                variant="outlined"
                rounded="xl"
                class="mt-4"
              >
                Více informací
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Testimonial Section -->
    <v-container class="soft-gradient-primary pa-8">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <blockquote class="spiritual-pattern">
            "Reiki léčení mi pomohlo najít vnitřní klid a harmonii. 
            Energetické ošetření bylo velmi jemné a příjemné. 
            Cítím se mnohem lépe a vyrovnaněji."
          </blockquote>
          <div class="text-center mt-4">
            <p class="text-secondary text-body-2">— Marie Nováková</p>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Contact Section -->
    <v-container class="section-container">
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-card
            class="pa-6 spiritual-border"
            color="surface"
            elevation="4"
            rounded="xl"
          >
            <v-card-title class="text-h4 text-primary text-center mb-6">
              Kontaktujte nás
            </v-card-title>
            
            <v-form>
              <v-text-field
                v-model="contactForm.name"
                label="Vaše jméno"
                variant="outlined"
                color="primary"
                class="mb-4"
              ></v-text-field>
              
              <v-text-field
                v-model="contactForm.email"
                label="Email"
                variant="outlined"
                color="primary"
                type="email"
                class="mb-4"
              ></v-text-field>
              
              <v-textarea
                v-model="contactForm.message"
                label="Vaše zpráva"
                variant="outlined"
                color="primary"
                rows="4"
                class="mb-6"
              ></v-textarea>
              
              <v-btn
                color="accent"
                size="large"
                block
                rounded="xl"
                elevation="2"
                class="animated-gradient-btn"
              >
                <v-icon left>mdi-send</v-icon>
                Odeslat zprávu
              </v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Decorative Footer -->
    <v-container class="soft-gradient-secondary pa-4">
      <v-row justify="center" align="center">
        <v-col cols="12" class="text-center">
          <div class="d-flex justify-center align-center mb-4">
            <v-icon class="decorative-icon">mdi-flower</v-icon>
            <v-icon class="decorative-icon">mdi-heart</v-icon>
            <v-icon class="decorative-icon">mdi-star</v-icon>
          </div>
          <p class="text-secondary text-body-2">
            © 2024 Reiki & Šamanské léčení - Harmonizace těla a duše
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const contactForm = ref({
  name: '',
  email: '',
  message: ''
})

const services = ref([
  {
    title: 'Reiki léčení',
    description: 'Jemné energetické ošetření pro harmonizaci těla a duše pomocí univerzální životní energie.',
    icon: 'mdi-heart-pulse'
  },
  {
    title: 'Šamanské léčení',
    description: 'Tradiční šamanské techniky pro očistu a uzdravení na hlubších úrovních vědomí.',
    icon: 'mdi-feather'
  },
  {
    title: 'Energetické čištění',
    description: 'Odstranění negativních energií a blokád z vašeho energetického pole.',
    icon: 'mdi-sparkles'
  }
])
</script>

<style scoped>
.theme-example {
  min-height: 100vh;
}

.min-vh-100 {
  min-height: 100vh;
}

/* Custom animations for the theme example */
.v-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.v-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(139, 126, 200, 0.25);
}

/* Enhanced button styling */
.v-btn {
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: none;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .pa-8 {
    padding: 2rem !important;
  }
  
  .pa-6 {
    padding: 1.5rem !important;
  }
}
</style> 