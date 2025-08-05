<template>
  <div>
    <!-- Booking Content -->
    <v-container class="section-container">
      <v-row justify="center">
        <v-col cols="12" lg="10">
          <!-- Page Header -->
          <v-row class="mb-16 mt-8">
            <v-col cols="12" class="text-center">
              <h2 class="text-h3 text-md-h2 font-weight-bold gradient-text-primary mb-4 scroll-animate">
                Objednání sezení
              </h2>
              <div class="spiritual-divider mx-auto scroll-animate" style="width: 100px;"></div>
              <p class="text-h6 text-secondary max-width-600 mx-auto mt-4 scroll-animate">
                Rezervujte si své sezení Reiki nebo šamanského léčení
              </p>
            </v-col>
          </v-row>

          <!-- How to Book -->
          <v-row class="mb-16">
            <v-col cols="12" md="6" class="d-flex align-center scroll-animate-left">
              <div>
                <h2 class="text-h3 text-md-h2 font-weight-bold text-accent mb-6">
                  Jak se objednat
                </h2>
                <p class="text-body-1 text-secondary mb-4">
                  Rezervace je možná telefonicky, emailem nebo přes online rezervační systém. 
                  Doporučuji rezervaci alespoň 3-5 dní dopředu, zejména pro první sezení.
                </p>
                <p class="text-body-1 text-secondary mb-6">
                  Po rezervaci obdržíte potvrzení s přesnou adresou a instrukcemi k cestě. 
                  Přesná adresa se nachází v centru Brna a je snadno dostupná MHD i autem.
                </p>
                
                <div class="d-flex flex-column gap-4">
                  <div class="d-flex align-center">
                    <v-icon color="accent" class="mr-3">mdi-phone</v-icon>
                    <div>
                      <div class="text-subtitle-1 font-weight-bold text-primary">Telefonicky</div>
                      <div class="text-body-2 text-secondary">+420 123 456 789</div>
                    </div>
                  </div>
                  <div class="d-flex align-center">
                    <v-icon color="accent" class="mr-3">mdi-email</v-icon>
                    <div>
                      <div class="text-subtitle-1 font-weight-bold text-primary">Emailem</div>
                      <div class="text-body-2 text-secondary">katerina.patykova@email.cz</div>
                    </div>
                  </div>
                  <div class="d-flex align-center">
                    <v-icon color="accent" class="mr-3">mdi-calendar</v-icon>
                    <div>
                      <div class="text-subtitle-1 font-weight-bold text-primary">Online formulář</div>
                      <div class="text-body-2 text-secondary">Vyplňte formulář níže</div>
                    </div>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="d-flex justify-center scroll-animate-right">
              <v-card
                class="booking-info-card pa-8 hover-lift spiritual-shadow"
                color="surface"
                elevation="2"
                rounded="xl"
                max-width="400"
              >
                <div class="text-center">
                  <v-icon size="80" color="accent" class="mb-4 floating-icon">mdi-clock</v-icon>
                  <h3 class="text-h5 font-weight-bold text-primary mb-3">Otevírací doba</h3>
                  <div class="text-body-2 text-secondary text-left">
                    <div class="d-flex justify-space-between mb-2">
                      <span>Pondělí - Pátek:</span>
                      <span class="font-weight-bold">9:00 - 18:00</span>
                    </div>
                    <div class="d-flex justify-space-between mb-2">
                      <span>Sobota:</span>
                      <span class="font-weight-bold">9:00 - 14:00</span>
                    </div>
                    <div class="d-flex justify-space-between mb-4">
                      <span>Neděle:</span>
                      <span class="font-weight-bold">Zavřeno</span>
                    </div>
                    <div class="spiritual-divider my-4"></div>
                    <div class="text-caption text-secondary">
                      První sezení doporučuji rezervovat s dostatečným časovým předstihem
                    </div>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>

          <!-- Booking Form -->
          <v-row class="mb-8">
            <v-col cols="12" class="text-center">
              <h2 class="text-h3 text-md-h2 font-weight-bold gradient-text-primary mb-4 scroll-animate">
                Rezervační formulář
              </h2>
              <div class="spiritual-divider mx-auto scroll-animate" style="width: 100px;"></div>
              <p class="text-h6 text-secondary max-width-600 mx-auto mt-4 scroll-animate">
                Vyplňte formulář a já se vám ozvu s potvrzením termínu
              </p>
            </v-col>
          </v-row>

          <v-row justify="center" class="mb-16">
            <v-col cols="12" md="8" class="scroll-animate-scale">
              <v-card
                class="booking-form-card pa-8"
                color="surface"
                elevation="4"
                rounded="xl"
              >
                <v-form @submit.prevent="submitBooking">
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="bookingForm.name"
                        label="Vaše jméno *"
                        variant="outlined"
                        color="primary"
                        required
                        class="mb-4"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="bookingForm.email"
                        label="Email *"
                        variant="outlined"
                        color="primary"
                        type="email"
                        required
                        class="mb-4"
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="bookingForm.phone"
                        label="Telefon *"
                        variant="outlined"
                        color="primary"
                        required
                        class="mb-4"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-select
                        v-model="bookingForm.service"
                        label="Typ sezení *"
                        variant="outlined"
                        color="primary"
                        :items="services"
                        required
                        class="mb-4"
                      ></v-select>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" md="6">
                      <v-menu
                        v-model="dateMenu"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                        <template v-slot:activator="{ props }">
                          <v-text-field
                            v-model="bookingForm.date"
                            label="Preferovaný datum *"
                            variant="outlined"
                            color="primary"
                            readonly
                            v-bind="props"
                            required
                            class="mb-4"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="bookingForm.date"
                          @update:model-value="dateMenu = false"
                          :min="minDate"
                        ></v-date-picker>
                      </v-menu>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-select
                        v-model="bookingForm.time"
                        label="Preferovaný čas *"
                        variant="outlined"
                        color="primary"
                        :items="timeSlots"
                        required
                        class="mb-4"
                      ></v-select>
                    </v-col>
                  </v-row>

                  <v-textarea
                    v-model="bookingForm.message"
                    label="Poznámky nebo dotazy"
                    variant="outlined"
                    color="primary"
                    rows="4"
                    class="mb-6"
                    placeholder="Napište mi, pokud máte nějaké speciální požadavky nebo dotazy..."
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
                      <v-icon start>mdi-calendar-check</v-icon>
                      Odeslat rezervaci
                    </v-btn>
                  </div>
                </v-form>
              </v-card>
            </v-col>
          </v-row>

          <!-- Important Information -->
          <v-row>
            <v-col cols="12" class="text-center">
              <h2 class="text-h3 text-md-h2 font-weight-bold gradient-text-primary mb-4 scroll-animate">
                Důležité informace
              </h2>
              <div class="spiritual-divider mx-auto scroll-animate" style="width: 100px;"></div>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="4" class="mb-6">
              <v-card
                class="info-card h-100 pa-6 text-center hover-lift spiritual-shadow"
                color="surface"
                elevation="3"
                rounded="xl"
              >
                <v-icon size="48" color="accent" class="mb-4 floating-icon">mdi-clock-alert</v-icon>
                <h3 class="text-h5 font-weight-bold text-primary mb-3">Časová rezerva</h3>
                <p class="text-body-2 text-secondary">
                  Doporučuji rezervaci alespoň 3-5 dní dopředu, zejména pro první sezení. 
                  Víkendové termíny jsou velmi žádané.
                </p>
              </v-card>
            </v-col>

            <v-col cols="12" md="4" class="mb-6">
              <v-card
                class="info-card h-100 pa-6 text-center hover-lift spiritual-shadow"
                color="surface"
                elevation="3"
                rounded="xl"
              >
                <v-icon size="48" color="accent" class="mb-4 floating-icon">mdi-cancel</v-icon>
                <h3 class="text-h5 font-weight-bold text-primary mb-3">Zrušení sezení</h3>
                <p class="text-body-2 text-secondary">
                  Zrušení sezení je možné do 24 hodin před začátkem. 
                  Pozdější zrušení může být zpoplatněno.
                </p>
              </v-card>
            </v-col>

            <v-col cols="12" md="4" class="mb-6">
              <v-card
                class="info-card h-100 pa-6 text-center hover-lift spiritual-shadow"
                color="surface"
                elevation="3"
                rounded="xl"
              >
                <v-icon size="48" color="accent" class="mb-4 floating-icon">mdi-credit-card-off</v-icon>
                <h3 class="text-h5 font-weight-bold text-primary mb-3">Platba</h3>
                <p class="text-body-2 text-secondary">
                  Platba probíhá na místě v hotovosti. Fakturu vystavuji na požádání. 
                  Ceny najdete v sekci Služby.
                </p>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <!-- Call to Action -->
    <v-container class="section-container soft-gradient-primary">
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center scroll-animate-scale">
          <v-card
            class="cta-card pa-8"
            color="surface"
            elevation="4"
            rounded="xl"
          >
            <h2 class="text-h3 text-md-h2 font-weight-bold gradient-text-primary mb-4">
              Máte otázky?
            </h2>
            <p class="text-h6 text-secondary mb-8">
              Neváhejte mě kontaktovat, pokud potřebujete více informací nebo máte dotazy
            </p>
            <v-btn
              to="/kontakt"
              size="large"
              color="accent"
              variant="elevated"
              class="text-body-1 font-weight-medium animated-gradient-btn"
              rounded="xl"
            >
              <v-icon start>mdi-email</v-icon>
              Kontaktovat
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
  title: 'Objednání - Reiki & Šamanské léčení | Kateřina Patyková',
  meta: [
    { name: 'description', content: 'Objednejte si sezení Reiki nebo šamanského léčení. Online rezervační formulář, telefon a email. Začněte svou cestu k uzdravení.' }
  ]
})

// GSAP animations are handled globally in app.vue

// Form data
const bookingForm = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  date: '',
  time: '',
  message: ''
})

const loading = ref(false)
const dateMenu = ref(false)

// Services list
const services = ref([
  'Reiki léčení (1 200 Kč)',
  'Šamanské léčení (1 500 Kč)',
  'Energetické čištění (800 Kč)',
  'Kombinované sezení'
])

// Time slots
const timeSlots = ref([
  '9:00',
  '10:30',
  '12:00',
  '13:30',
  '15:00',
  '16:30'
])

// Minimum date (today)
const minDate = computed(() => {
  const today = new Date()
  return today.toISOString().substr(0, 10)
})

// Form submission
const submitBooking = async () => {
  loading.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Reset form
  bookingForm.value = {
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  }
  
  loading.value = false
  
  // Show success message
  alert('Děkujeme za vaši rezervaci! Ozvu se vám do 24 hodin s potvrzením termínu.')
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

.booking-info-card {
  border: 2px solid var(--v-primary-base);
  border-opacity: 0.1;
}

.booking-form-card {
  border: 2px solid var(--v-primary-base);
  border-opacity: 0.1;
}

.condition-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid var(--v-primary-base);
  border-opacity: 0.1;
}

.condition-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
}

/* Dark mode adjustments */
.v-theme--dark .hero-section {
  background: linear-gradient(135deg, 
    var(--v-accent-base) 0%, 
    var(--v-background-base) 100%);
}

.v-theme--dark .booking-info-card,
.v-theme--dark .booking-form-card,
.v-theme--dark .condition-card {
  border-opacity: 0.2;
}
</style> 