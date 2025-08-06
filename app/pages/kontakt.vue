<template>
  <div>
    <!-- Contact Content -->
    <v-container class="section-container">
      <v-row justify="center">
        <v-col cols="12" lg="10">
          <!-- Contact Information -->
          <v-row class="mb-16 mt-8">
            <v-col cols="12" class="text-center">
              <h2 class="text-h3 text-md-h2 font-weight-bold gradient-text-primary mb-4 scroll-animate">
                Kontaktní informace
              </h2>
              <div class="spiritual-divider mx-auto scroll-animate" style="width: 100px;"></div>
              <p class="text-h6 text-secondary max-width-600 mx-auto mt-4 scroll-animate">
                Jsem tu pro vás a ráda zodpovím všechny vaše otázky
              </p>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="4" class="mb-8">
              <v-card
                class="contact-card h-100 pa-6 text-center hover-lift spiritual-shadow"
                color="surface"
                elevation="3"
                rounded="xl"
              >
                <v-icon size="64" color="accent" class="mb-4 floating-icon">mdi-email</v-icon>
                <h3 class="text-h5 font-weight-bold text-primary mb-3">Email</h3>
                <p class="text-body-1 text-secondary mb-3">katerina.patykova@email.cz</p>
                <p class="text-body-2 text-secondary">
                  Odpovídám do 24 hodin, obvykle mnohem dříve
                </p>
              </v-card>
            </v-col>

            <v-col cols="12" md="4" class="mb-6">
              <v-card
                class="contact-card h-100 pa-6 text-center hover-lift spiritual-shadow"
                color="surface"
                elevation="3"
                rounded="xl"
              >
                <v-icon size="64" color="accent" class="mb-4 floating-icon">mdi-phone</v-icon>
                <h3 class="text-h5 font-weight-bold text-primary mb-3">Telefon</h3>
                <p class="text-body-1 text-secondary mb-3">+420 123 456 789</p>
                <p class="text-body-2 text-secondary">
                  Volat můžete v otevírací době
                </p>
              </v-card>
            </v-col>

            <v-col cols="12" md="4" class="mb-6">
              <v-card
                class="contact-card h-100 pa-6 text-center hover-lift spiritual-shadow"
                color="surface"
                elevation="3"
                rounded="xl"
              >
                <v-icon size="64" color="accent" class="mb-4 floating-icon">mdi-map-marker</v-icon>
                <h3 class="text-h5 font-weight-bold text-primary mb-3">Adresa</h3>
                <p class="text-body-1 text-secondary mb-3">Brno – centrum</p>
                <p class="text-body-2 text-secondary">
                  Přesnou adresu obdržíte po rezervaci
                </p>
              </v-card>
            </v-col>
          </v-row>

          <!-- Opening Hours -->
          <v-row class="mb-16">
            <v-col cols="12" md="6" class="d-flex align-center scroll-animate-left">
              <div>
                <h2 class="text-h3 text-md-h2 font-weight-bold text-accent mb-6">
                  Otevírací doba
                </h2>
                <div class="d-flex flex-column gap-4">
                  <div class="d-flex justify-space-between align-center">
                    <span class="text-body-1 text-secondary">Pondělí - Pátek</span>
                    <span class="text-body-1 font-weight-bold text-primary">9:00 - 18:00</span>
                  </div>
                  <div class="d-flex justify-space-between align-center">
                    <span class="text-body-1 text-secondary">Sobota</span>
                    <span class="text-body-1 font-weight-bold text-primary">9:00 - 14:00</span>
                  </div>
                  <div class="d-flex justify-space-between align-center">
                    <span class="text-body-1 text-secondary">Neděle</span>
                    <span class="text-body-1 font-weight-bold text-primary">Zavřeno</span>
                  </div>
                </div>
                <p class="text-body-2 text-secondary mt-6">
                  * Individuální termíny jsou možné po předchozí domluvě
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="d-flex justify-center scroll-animate-right">
              <v-card
                class="hours-card pa-8 hover-lift spiritual-shadow"
                color="surface"
                elevation="3"
                rounded="xl"
                max-width="400"
              >
                <div class="text-center">
                  <v-icon size="64" color="accent" class="mb-4 floating-icon">mdi-clock</v-icon>
                  <h3 class="text-h5 font-weight-bold text-primary mb-4">Důležité informace</h3>
                  <ul class="text-body-2 text-secondary text-left">
                    <li class="mb-3">Sezení je nutné objednat předem</li>
                    <li class="mb-3">Zrušení sezení je možné do 24h předem</li>
                    <li class="mb-3">Platba probíhá na místě v hotovosti</li>
                    <li class="mb-3">Parkování je možné v okolí</li>
                    <li class="mb-3">Bezbariérový přístup</li>
                  </ul>
                </div>
              </v-card>
            </v-col>
          </v-row>

          <!-- Contact Form -->
          <v-row class="mb-8">
            <v-col cols="12" class="text-center">
              <h2 class="text-h3 text-md-h2 font-weight-bold gradient-text-primary mb-4 scroll-animate">
                Napište mi
              </h2>
              <div class="spiritual-divider mx-auto scroll-animate" style="width: 100px;"></div>
              <p class="text-h6 text-secondary max-width-600 mx-auto mt-4 scroll-animate">
                Máte otázky nebo chcete objednat sezení? Napište mi zprávu
              </p>
            </v-col>
          </v-row>

          <v-row class="mb-8" justify="center">
            <v-col cols="12" md="8" class="scroll-animate-scale">
              <v-card
                class="contact-form-card pa-8"
                color="surface"
                elevation="4"
                rounded="xl"
              >
                <v-form @submit.prevent="submitForm">
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="form.name"
                        label="Vaše jméno *"
                        variant="outlined"
                        color="primary"
                        required
                        class="mb-4"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="form.email"
                        label="Email *"
                        variant="outlined"
                        color="primary"
                        type="email"
                        required
                        class="mb-4"
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-text-field
                    v-model="form.phone"
                    label="Telefon"
                    variant="outlined"
                    color="primary"
                    class="mb-4"
                  ></v-text-field>

                  <v-select
                    v-model="form.service"
                    label="Zájem o službu"
                    variant="outlined"
                    color="primary"
                    :items="services"
                    class="mb-4"
                  ></v-select>

                  <v-textarea
                    v-model="form.message"
                    label="Vaše zpráva *"
                    variant="outlined"
                    color="primary"
                    rows="6"
                    required
                    class="mb-6"
                  ></v-textarea>

                  <div class="d-flex justify-center">
                    <v-btn
                      type="submit"
                      color="accent"
                      size="large"
                      class="animated-gradient-btn"
                      rounded="xl"
                      :loading="loading"
                    >
                      <v-icon start>mdi-send</v-icon>
                      Odeslat zprávu
                    </v-btn>
                  </div>
                </v-form>
              </v-card>
            </v-col>
          </v-row>

          <!-- FAQ Section -->
          <v-row>
            <v-col cols="12" class="text-center">
              <h2 class="text-h3 text-md-h2 font-weight-bold gradient-text-primary mb-4 scroll-animate">
                Často kladené otázky
              </h2>
              <div class="spiritual-divider mx-auto scroll-animate" style="width: 100px;"></div>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col cols="12" lg="8" class="scroll-animate">
              <v-expansion-panels variant="accordion">
                <v-expansion-panel
                  v-for="(faq, index) in faqs"
                  :key="index"
                  class="mb-4"
                >
                  <v-expansion-panel-title class="text-h6 font-weight-bold text-primary">
                    {{ faq.question }}
                  </v-expansion-panel-title>
                  <v-expansion-panel-text class="text-body-1 text-secondary">
                    {{ faq.answer }}
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <!-- Call to Action -->
    <v-container fluid class="section-container soft-gradient-primary">
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center scroll-animate-scale">
          <v-card
            class="cta-card pa-8"
            color="surface"
            elevation="4"
            rounded="xl"
          >
            <h2 class="text-h3 text-md-h2 font-weight-bold gradient-text-primary mb-4">
              Začněte svou cestu k uzdravení
            </h2>
            <p class="text-h6 text-secondary mb-8">
              Objednejte si své první sezení a objevte sílu energetického léčení
            </p>
            <v-btn
              to="/objednani"
              size="x-large"
              color="accent"
              variant="elevated"
              class="text-body-1 font-weight-medium animated-gradient-btn"
              rounded="xl"
            >
              <v-icon start>mdi-calendar-check</v-icon>
              Objednat sezení
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Page metadata
useHead({
  title: 'Kontakt - Reiki & Šamanské léčení | Kateřina Patyková',
  meta: [
    { name: 'description', content: 'Kontaktujte mě pro Reiki a šamanské léčení. Email, telefon, adresa a kontaktní formulář. Jsem tu pro vás.' }
  ]
})

// GSAP animations are handled globally in app.vue

// Form data
const form = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const loading = ref(false)

// Services list
const services = ref([
  'Reiki léčení',
  'Šamanské léčení',
  'Energetické čištění',
  'Kombinované sezení',
  'Jiné'
])

// FAQ data
const faqs = ref([
  {
    question: 'Jak se objednat na sezení?',
    answer: 'Můžete se objednat telefonicky, emailem nebo přes kontaktní formulář na této stránce. Ráda vám pomohu najít vhodný termín.'
  },
  {
    question: 'Jak dlouho trvá odpověď na email?',
    answer: 'Odpovídám obvykle do 24 hodin, často mnohem dříve. V pracovní dny obvykle do několika hodin.'
  },
  {
    question: 'Je možné sezení v jiných časech?',
    answer: 'Ano, individuální termíny jsou možné po předchozí domluvě. Ráda se přizpůsobím vašim potřebám.'
  },
  {
    question: 'Co mám přinést na sezení?',
    answer: 'Stačí pohodlné oblečení a otevřenou mysl. Vše ostatní je zajištěno. Doporučuji přijít 10 minut před začátkem.'
  },
  {
    question: 'Je možné sezení online?',
    answer: 'Některé formy energetického léčení je možné provádět i na dálku. Kontaktujte mě pro více informací.'
  }
])

// Form submission
const submitForm = async () => {
  loading.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Reset form
  form.value = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  }
  
  loading.value = false
  
  // Show success message (you can implement this with a toast or alert)
  alert('Děkujeme za vaši zprávu! Odpovím vám co nejdříve.')
}
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, 
    var(--v-accent-base) 0%, 
    var(--v-background-base) 100%);
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23D78BBF" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="%23B29DD9" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="%23FF99C8" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  opacity: 0.3;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.max-width-600 {
  max-width: 600px;
}

.contact-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid var(--v-primary-base);
  border-opacity: 0.1;
}

.contact-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
}

.location-card {
  border: 2px solid var(--v-primary-base);
  border-opacity: 0.1;
}

.contact-form-card {
  border: 2px solid var(--v-primary-base);
  border-opacity: 0.1;
}

.faq-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid var(--v-primary-base);
  border-opacity: 0.1;
}

.faq-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.1) !important;
}

/* Dark mode adjustments */
.v-theme--dark .hero-section {
  background: linear-gradient(135deg, 
    var(--v-accent-base) 0%, 
    var(--v-background-base) 100%);
}

.v-theme--dark .contact-card,
.v-theme--dark .location-card,
.v-theme--dark .contact-form-card,
.v-theme--dark .faq-card {
  border-opacity: 0.2;
}
</style> 