<template>
  <div>
    <!-- Hero Section -->
    <v-container fluid class="hero-section pa-0">
      <v-row no-gutters class="align-center" style="min-height: 60vh;">
        <v-col cols="12" class="text-center">
          <div class="hero-content">
            <v-icon size="64" color="primary" class="mb-4">mdi-email</v-icon>
            <h1 class="text-h2 text-md-h1 font-weight-bold text-primary mb-4">
              Kontakt
            </h1>
            <p class="text-h5 text-secondary max-width-600 mx-auto">
              Kontaktujte mě a začněme společně vaši cestu k uzdravení
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Contact Content -->
    <v-container class="py-16">
      <v-row justify="center">
        <v-col cols="12" lg="10">
          <!-- Contact Information -->
          <v-row class="mb-16">
            <v-col cols="12" class="text-center mb-8">
              <h2 class="text-h3 text-md-h2 font-weight-bold text-primary mb-4">
                Kontaktní informace
              </h2>
              <p class="text-h6 text-secondary max-width-600 mx-auto">
                Jsem tu pro vás a ráda zodpovím všechny vaše otázky
              </p>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="4" class="mb-6">
              <v-card
                class="contact-card h-100 pa-6 text-center"
                :color="$vuetify.theme.current.dark ? 'surface' : 'background'"
                elevation="3"
                rounded="xl"
              >
                <v-icon size="64" color="primary" class="mb-4">mdi-email</v-icon>
                <h3 class="text-h5 font-weight-bold text-primary mb-3">Email</h3>
                <p class="text-body-1 text-secondary mb-3">katerina.patykova@email.cz</p>
                <p class="text-body-2 text-secondary">
                  Odpovídám do 24 hodin, obvykle mnohem dříve
                </p>
              </v-card>
            </v-col>

            <v-col cols="12" md="4" class="mb-6">
              <v-card
                class="contact-card h-100 pa-6 text-center"
                :color="$vuetify.theme.current.dark ? 'surface' : 'background'"
                elevation="3"
                rounded="xl"
              >
                <v-icon size="64" color="secondary" class="mb-4">mdi-phone</v-icon>
                <h3 class="text-h5 font-weight-bold text-primary mb-3">Telefon</h3>
                <p class="text-body-1 text-secondary mb-3">+420 123 456 789</p>
                <p class="text-body-2 text-secondary">
                  Volat můžete v otevírací době
                </p>
              </v-card>
            </v-col>

            <v-col cols="12" md="4" class="mb-6">
              <v-card
                class="contact-card h-100 pa-6 text-center"
                :color="$vuetify.theme.current.dark ? 'surface' : 'background'"
                elevation="3"
                rounded="xl"
              >
                <v-icon size="64" color="cta" class="mb-4">mdi-map-marker</v-icon>
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
            <v-col cols="12" md="6" class="d-flex align-center">
              <div>
                <h2 class="text-h3 text-md-h2 font-weight-bold text-primary mb-6">
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
                    <span class="text-body-1 font-weight-bold text-secondary">zavřeno</span>
                  </div>
                </div>
                <v-divider class="my-6"></v-divider>
                <p class="text-body-2 text-secondary">
                  První sezení doporučuji rezervovat s dostatečným časovým předstihem. 
                  Přijďte prosím 10 minut před začátkem sezení.
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="d-flex justify-center">
              <v-card
                class="location-card pa-8"
                :color="$vuetify.theme.current.dark ? 'surface' : 'accent'"
                elevation="2"
                rounded="xl"
                max-width="400"
              >
                <div class="text-center">
                  <v-icon size="80" color="primary" class="mb-4">mdi-map</v-icon>
                  <h3 class="text-h5 font-weight-bold text-primary mb-3">Jak se dostat</h3>
                  <p class="text-body-2 text-secondary mb-4">
                    Nacházím se v centru Brna, snadno dostupné MHD i autem. 
                    Přesnou adresu a instrukce k cestě obdržíte po rezervaci sezení.
                  </p>
                  <div class="d-flex flex-column gap-2">
                    <div class="d-flex align-center">
                      <v-icon size="20" color="secondary" class="mr-2">mdi-bus</v-icon>
                      <span class="text-body-2 text-secondary">MHD - zastávka 5 min chůze</span>
                    </div>
                    <div class="d-flex align-center">
                      <v-icon size="20" color="secondary" class="mr-2">mdi-car</v-icon>
                      <span class="text-body-2 text-secondary">Parkování v okolí</span>
                    </div>
                    <div class="d-flex align-center">
                      <v-icon size="20" color="secondary" class="mr-2">mdi-walk</v-icon>
                      <span class="text-body-2 text-secondary">Centrum - 10 min chůze</span>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>

          <!-- Contact Form -->
          <v-row class="mb-16">
            <v-col cols="12" class="text-center mb-8">
              <h2 class="text-h3 text-md-h2 font-weight-bold text-primary mb-4">
                Kontaktní formulář
              </h2>
              <p class="text-h6 text-secondary max-width-600 mx-auto">
                Máte otázky? Napište mi a já se vám ozvu co nejdříve
              </p>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col cols="12" md="8">
              <v-card
                class="contact-form-card pa-8"
                :color="$vuetify.theme.current.dark ? 'surface' : 'background'"
                elevation="3"
                rounded="xl"
              >
                <v-form @submit.prevent="submitContact">
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="contactForm.name"
                        label="Jméno *"
                        variant="outlined"
                        color="primary"
                        required
                        :rules="[rules.required]"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="contactForm.email"
                        label="Email *"
                        variant="outlined"
                        color="primary"
                        type="email"
                        required
                        :rules="[rules.required, rules.email]"
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="contactForm.subject"
                        label="Předmět *"
                        variant="outlined"
                        color="primary"
                        required
                        :rules="[rules.required]"
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12">
                      <v-textarea
                        v-model="contactForm.message"
                        label="Zpráva *"
                        variant="outlined"
                        color="primary"
                        rows="6"
                        required
                        :rules="[rules.required]"
                        placeholder="Napište mi vaši zprávu..."
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
                        Odeslat zprávu
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card>
            </v-col>
          </v-row>

          <!-- FAQ Section -->
          <v-row class="mt-16">
            <v-col cols="12" class="text-center mb-8">
              <h2 class="text-h3 text-md-h2 font-weight-bold text-primary mb-4">
                Často kladené otázky
              </h2>
              <p class="text-h6 text-secondary max-width-600 mx-auto">
                Odpovědi na nejčastější otázky
              </p>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6" class="mb-6">
              <v-card
                class="faq-card pa-6"
                :color="$vuetify.theme.current.dark ? 'surface' : 'background'"
                elevation="2"
                rounded="xl"
              >
                <h3 class="text-h6 font-weight-bold text-primary mb-3">
                  Jak dlouho trvá sezení?
                </h3>
                <p class="text-body-2 text-secondary">
                  Reiki sezení trvá 60-90 minut, šamanské léčení 90-120 minut. 
                  Celkový čas zahrnuje úvodní konzultaci, samotnou terapii a závěrečnou část.
                </p>
              </v-card>
            </v-col>

            <v-col cols="12" md="6" class="mb-6">
              <v-card
                class="faq-card pa-6"
                :color="$vuetify.theme.current.dark ? 'surface' : 'background'"
                elevation="2"
                rounded="xl"
              >
                <h3 class="text-h6 font-weight-bold text-primary mb-3">
                  Co si mám vzít s sebou?
                </h3>
                <p class="text-body-2 text-secondary">
                  Stačí pohodlné oblečení. Vše ostatní je zajištěno. 
                  Doporučuji přijít s dostatečným časovým předstihem.
                </p>
              </v-card>
            </v-col>

            <v-col cols="12" md="6" class="mb-6">
              <v-card
                class="faq-card pa-6"
                :color="$vuetify.theme.current.dark ? 'surface' : 'background'"
                elevation="2"
                rounded="xl"
              >
                <h3 class="text-h6 font-weight-bold text-primary mb-3">
                  Je možné platit kartou?
                </h3>
                <p class="text-body-2 text-secondary">
                  Ano, přijímám platby hotovostí, kartou i bankovním převodem. 
                  Fakturu vystavuji na požádání.
                </p>
              </v-card>
            </v-col>

            <v-col cols="12" md="6" class="mb-6">
              <v-card
                class="faq-card pa-6"
                :color="$vuetify.theme.current.dark ? 'surface' : 'background'"
                elevation="2"
                rounded="xl"
              >
                <h3 class="text-h6 font-weight-bold text-primary mb-3">
                  Jak často chodit na sezení?
                </h3>
                <p class="text-body-2 text-secondary">
                  Frekvence závisí na vašich potřebách. Pro akutní problémy doporučuji 
                  1-2 sezení týdně, pro udržovací péči 1x měsíčně.
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
          <h3 class="text-h5 font-weight-bold text-primary mb-3">Zpráva odeslána!</h3>
          <p class="text-body-1 text-secondary mb-6">
            Děkujeme za vaši zprávu. Ozvu se vám do 24 hodin.
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
  title: 'Kontakt - Kateřina Patyková',
  meta: [
    { name: 'description', content: 'Kontaktujte Kateřinu Patykovou pro Reiki a šamanské léčení. Kontaktní informace, formulář a adresa v Brně.' }
  ]
})

// Form data
const contactForm = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccessDialog = ref(false)

// Form validation rules
const rules = {
  required: v => !!v || 'Toto pole je povinné',
  email: v => /.+@.+\..+/.test(v) || 'Zadejte platný email'
}

// Submit form
const submitContact = async () => {
  isSubmitting.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  isSubmitting.value = false
  showSuccessDialog.value = true
  
  // Reset form
  contactForm.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
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