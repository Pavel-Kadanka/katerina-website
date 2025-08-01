<template>
  <div>
    <!-- Hero Section -->
    <v-container fluid class="hero-section pa-0">
      <v-row no-gutters class="align-center" style="min-height: 60vh;">
        <v-col cols="12" class="text-center">
          <div class="hero-content">
            <v-icon size="64" color="primary" class="mb-4">mdi-calendar-check</v-icon>
            <h1 class="text-h2 text-md-h1 font-weight-bold text-primary mb-4">
              Objednání
            </h1>
            <p class="text-h5 text-secondary max-width-600 mx-auto">
              Rezervujte si své sezení a začněte cestu k uzdravení
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Booking Content -->
    <v-container class="py-16">
      <v-row justify="center">
        <v-col cols="12" lg="10">
          <!-- How to Book -->
          <v-row class="mb-16">
            <v-col cols="12" md="6" class="d-flex align-center">
              <div>
                <h2 class="text-h3 text-md-h2 font-weight-bold text-primary mb-6">
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
                    <v-icon color="primary" class="mr-3">mdi-phone</v-icon>
                    <div>
                      <div class="text-subtitle-1 font-weight-bold text-primary">Telefonicky</div>
                      <div class="text-body-2 text-secondary">+420 123 456 789</div>
                    </div>
                  </div>
                  <div class="d-flex align-center">
                    <v-icon color="secondary" class="mr-3">mdi-email</v-icon>
                    <div>
                      <div class="text-subtitle-1 font-weight-bold text-primary">Emailem</div>
                      <div class="text-body-2 text-secondary">katerina.patykova@email.cz</div>
                    </div>
                  </div>
                  <div class="d-flex align-center">
                    <v-icon color="cta" class="mr-3">mdi-calendar</v-icon>
                    <div>
                      <div class="text-subtitle-1 font-weight-bold text-primary">Online formulář</div>
                      <div class="text-body-2 text-secondary">Vyplňte formulář níže</div>
                    </div>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="d-flex justify-center">
              <v-card
                class="booking-info-card pa-8"
                :color="$vuetify.theme.current.dark ? 'surface' : 'accent'"
                elevation="2"
                rounded="xl"
                max-width="400"
              >
                <div class="text-center">
                  <v-icon size="80" color="primary" class="mb-4">mdi-clock</v-icon>
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
                      <span class="font-weight-bold">zavřeno</span>
                    </div>
                    <v-divider class="my-4"></v-divider>
                    <div class="text-caption text-secondary">
                      První sezení doporučuji rezervovat s dostatečným časovým předstihem
                    </div>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>

          <!-- Booking Form -->
          <v-row class="mb-16">
            <v-col cols="12" class="text-center mb-8">
              <h2 class="text-h3 text-md-h2 font-weight-bold text-primary mb-4">
                Rezervační formulář
              </h2>
              <p class="text-h6 text-secondary max-width-600 mx-auto">
                Vyplňte formulář a já se vám ozvu s potvrzením termínu
              </p>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col cols="12" md="8">
              <v-card
                class="booking-form-card pa-8"
                :color="$vuetify.theme.current.dark ? 'surface' : 'background'"
                elevation="3"
                rounded="xl"
              >
                <v-form @submit.prevent="submitBooking">
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="bookingForm.firstName"
                        label="Jméno *"
                        variant="outlined"
                        color="primary"
                        required
                        :rules="[rules.required]"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="bookingForm.lastName"
                        label="Příjmení *"
                        variant="outlined"
                        color="primary"
                        required
                        :rules="[rules.required]"
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="bookingForm.email"
                        label="Email *"
                        variant="outlined"
                        color="primary"
                        type="email"
                        required
                        :rules="[rules.required, rules.email]"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="bookingForm.phone"
                        label="Telefon *"
                        variant="outlined"
                        color="primary"
                        required
                        :rules="[rules.required]"
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" md="6">
                      <v-select
                        v-model="bookingForm.serviceType"
                        label="Typ terapie *"
                        variant="outlined"
                        color="primary"
                        :items="serviceTypes"
                        required
                        :rules="[rules.required]"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-select
                        v-model="bookingForm.preferredDate"
                        label="Preferovaný termín *"
                        variant="outlined"
                        color="primary"
                        :items="availableDates"
                        required
                        :rules="[rules.required]"
                      ></v-select>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12">
                      <v-textarea
                        v-model="bookingForm.notes"
                        label="Poznámky"
                        variant="outlined"
                        color="primary"
                        rows="4"
                        placeholder="Napište mi něco o vašich problémech nebo očekáváních..."
                      ></v-textarea>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" class="text-center">
                      <v-btn
                        type="submit"
                        size="x-large"
                        color="cta"
                        variant="elevated"
                        class="text-body-1 font-weight-medium"
                        rounded="pill"
                        :loading="isSubmitting"
                        :disabled="isSubmitting"
                      >
                        <v-icon start>mdi-send</v-icon>
                        Odeslat rezervaci
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card>
            </v-col>
          </v-row>

          <!-- Booking Conditions -->
          <v-row class="mt-16">
            <v-col cols="12" class="text-center mb-8">
              <h2 class="text-h3 text-md-h2 font-weight-bold text-primary mb-4">
                Rezervační podmínky
              </h2>
              <p class="text-h6 text-secondary max-width-600 mx-auto">
                Důležité informace o rezervaci a zrušení sezení
              </p>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="4" class="mb-6">
              <v-card
                class="condition-card h-100 pa-6 text-center"
                :color="$vuetify.theme.current.dark ? 'surface' : 'background'"
                elevation="2"
                rounded="xl"
              >
                <v-icon size="48" color="primary" class="mb-4">mdi-clock-alert</v-icon>
                <h3 class="text-h5 font-weight-bold text-primary mb-3">Zrušení sezení</h3>
                <p class="text-body-2 text-secondary">
                  Zrušení sezení je možné nejpozději 24 hodin předem. 
                  Při pozdějším zrušení se účtuje 50% ceny sezení.
                </p>
              </v-card>
            </v-col>

            <v-col cols="12" md="4" class="mb-6">
              <v-card
                class="condition-card h-100 pa-6 text-center"
                :color="$vuetify.theme.current.dark ? 'surface' : 'background'"
                elevation="2"
                rounded="xl"
              >
                <v-icon size="48" color="secondary" class="mb-4">mdi-calendar-clock</v-icon>
                <h3 class="text-h5 font-weight-bold text-primary mb-3">První sezení</h3>
                <p class="text-body-2 text-secondary">
                  První sezení doporučuji rezervovat s dostatečným časovým předstihem. 
                  Přijďte prosím 10 minut před začátkem sezení.
                </p>
              </v-card>
            </v-col>

            <v-col cols="12" md="4" class="mb-6">
              <v-card
                class="condition-card h-100 pa-6 text-center"
                :color="$vuetify.theme.current.dark ? 'surface' : 'background'"
                elevation="2"
                rounded="xl"
              >
                <v-icon size="48" color="cta" class="mb-4">mdi-information</v-icon>
                <h3 class="text-h5 font-weight-bold text-primary mb-3">Důležité upozornění</h3>
                <p class="text-body-2 text-secondary">
                  Terapeutická sezení nenahrazují lékařskou péči. 
                  Při zdravotních problémech se vždy poraďte s lékařem.
                </p>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <!-- Success Dialog -->
    <v-dialog v-model="showSuccessDialog" max-width="500">
      <v-card class="pa-6" rounded="xl">
        <div class="text-center">
          <v-icon size="64" color="success" class="mb-4">mdi-check-circle</v-icon>
          <h3 class="text-h5 font-weight-bold text-primary mb-3">Rezervace odeslána!</h3>
          <p class="text-body-1 text-secondary mb-6">
            Děkujeme za vaši rezervaci. Ozvu se vám do 24 hodin s potvrzením termínu.
          </p>
          <v-btn
            color="primary"
            variant="elevated"
            @click="showSuccessDialog = false"
            rounded="pill"
          >
            Zavřít
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Page metadata
useHead({
  title: 'Objednání - Kateřina Patyková',
  meta: [
    { name: 'description', content: 'Objednejte si Reiki nebo šamanské léčení. Rezervační formulář a informace o objednávce. Certifikovaná terapeutka v Brně.' }
  ]
})

// Form data
const bookingForm = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  serviceType: '',
  preferredDate: '',
  notes: ''
})

const isSubmitting = ref(false)
const showSuccessDialog = ref(false)

// Form options
const serviceTypes = [
  { title: 'Reiki léčení (1 200 Kč)', value: 'reiki' },
  { title: 'Šamanské léčení (1 500 Kč)', value: 'shamanic' },
  { title: '3 sezení Reiki (3 200 Kč)', value: 'reiki-package' },
  { title: '3 sezení Šamanské léčení (4 200 Kč)', value: 'shamanic-package' },
  { title: 'Kombinovaný balíček (5 500 Kč)', value: 'combined-package' }
]

const availableDates = [
  'Pondělí 9:00 - 18:00',
  'Úterý 9:00 - 18:00',
  'Středa 9:00 - 18:00',
  'Čtvrtek 9:00 - 18:00',
  'Pátek 9:00 - 18:00',
  'Sobota 9:00 - 14:00'
]

// Form validation rules
const rules = {
  required: v => !!v || 'Toto pole je povinné',
  email: v => /.+@.+\..+/.test(v) || 'Zadejte platný email'
}

// Submit form
const submitBooking = async () => {
  isSubmitting.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  isSubmitting.value = false
  showSuccessDialog.value = true
  
  // Reset form
  bookingForm.value = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: '',
    preferredDate: '',
    notes: ''
  }
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