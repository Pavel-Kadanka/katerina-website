<template>
  <div>
    <!-- Hero Section -->
    <v-container fluid class="hero-section pa-0">
      <v-row no-gutters class="align-center" style="min-height: 80vh;">
        <v-col cols="12" class="text-center">
          <div class="hero-content">
            <v-icon size="80" color="primary" class="mb-6">mdi-heart-pulse</v-icon>
            <h1 class="text-h2 text-md-h1 font-weight-bold text-primary mb-4">
              Kateřina Patyková
            </h1>
            <h2 class="text-h4 text-md-h3 font-weight-light text-secondary mb-8">
              Reiki & Šamanské léčení
            </h2>
            <p class="text-h6 text-md-h5 text-secondary mb-8 max-width-600 mx-auto">
              Vítejte v prostoru klidu a uzdravení
            </p>
            <div class="d-flex flex-column flex-md-row gap-4 justify-center">
              <v-btn
                to="/sluzby"
                size="x-large"
                color="cta"
                variant="elevated"
                class="text-body-1 font-weight-medium"
                rounded="pill"
              >
                <v-icon start>mdi-heart-pulse</v-icon>
                Zjistit více o mých službách
              </v-btn>
              <v-btn
                to="/objednani"
                size="x-large"
                color="primary"
                variant="outlined"
                class="text-body-1 font-weight-medium"
                rounded="pill"
              >
                <v-icon start>mdi-calendar-check</v-icon>
                Objednat se na sezení
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Welcome Section -->
    <v-container class="py-16">
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center">
          <v-card
            class="welcome-card pa-8"
            :color="$vuetify.theme.current.dark ? 'surface' : 'accent'"
            elevation="0"
            rounded="xl"
          >
            <v-icon size="48" color="primary" class="mb-6">mdi-quote-open</v-icon>
            <blockquote class="text-h5 text-md-h4 font-weight-light text-primary mb-6">
              "Vítejte v prostoru klidu a uzdravení. Jsem Kateřina Patyková a pomáhám lidem najít vnitřní rovnováhu a harmonii skrze Reiki a šamanské léčení."
            </blockquote>
            <p class="text-body-1 text-secondary">
              Jsem certifikovaná terapeutka s více než 10 lety zkušeností v oblasti energetického léčení. 
              Specializuji se na Reiki terapii a šamanské léčení, které pomáhají uvolnit bloky, obnovit 
              energetickou rovnováhu a podpořit přirozený proces uzdravení.
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Quick Services Preview -->
    <v-container class="py-16">
      <v-row>
        <v-col cols="12" class="text-center mb-12">
          <h2 class="text-h3 text-md-h2 font-weight-bold text-primary mb-4">
            Moje služby
          </h2>
          <p class="text-h6 text-secondary max-width-600 mx-auto">
            Nabízím dvě hlavní formy energetického léčení, které vám pomohou najít vnitřní klid a harmonii
          </p>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col cols="12" md="6" class="mb-6">
          <v-card
            class="service-preview-card h-100 pa-6"
            :color="$vuetify.theme.current.dark ? 'surface' : 'background'"
            elevation="2"
            rounded="xl"
          >
            <div class="d-flex align-center mb-4">
              <v-icon size="48" color="primary" class="mr-4">mdi-heart</v-icon>
              <div>
                <h3 class="text-h5 font-weight-bold text-primary">Reiki léčení</h3>
                <p class="text-subtitle-1 text-secondary">Harmonie těla a duše</p>
              </div>
            </div>
            <p class="text-body-1 text-secondary mb-4">
              Reiki je jemná forma energetického léčení, která pomáhá uvolnit napětí, podpořit relaxaci 
              a obnovit přirozenou energetickou rovnováhu.
            </p>
            <div class="d-flex align-center justify-space-between">
              <span class="text-h6 font-weight-bold text-cta">1 200 Kč / sezení</span>
              <v-btn
                to="/sluzby"
                color="primary"
                variant="text"
                class="text-body-2"
              >
                Více informací
                <v-icon end>mdi-arrow-right</v-icon>
              </v-btn>
            </div>
          </v-card>
        </v-col>
        
        <v-col cols="12" md="6" class="mb-6">
          <v-card
            class="service-preview-card h-100 pa-6"
            :color="$vuetify.theme.current.dark ? 'surface' : 'background'"
            elevation="2"
            rounded="xl"
          >
            <div class="d-flex align-center mb-4">
              <v-icon size="48" color="secondary" class="mr-4">mdi-star</v-icon>
              <div>
                <h3 class="text-h5 font-weight-bold text-primary">Šamanské léčení</h3>
                <p class="text-subtitle-1 text-secondary">Hluboké uzdravení duše</p>
              </div>
            </div>
            <p class="text-body-1 text-secondary mb-4">
              Šamanské léčení pracuje s hlubšími vrstvami našeho bytí a pomáhá řešit emoční bloky, 
              traumata a duchovní otázky.
            </p>
            <div class="d-flex align-center justify-space-between">
              <span class="text-h6 font-weight-bold text-cta">1 500 Kč / sezení</span>
              <v-btn
                to="/sluzby"
                color="primary"
                variant="text"
                class="text-body-2"
              >
                Více informací
                <v-icon end>mdi-arrow-right</v-icon>
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Testimonials Section -->
    <v-container class="py-16">
      <v-row>
        <v-col cols="12" class="text-center mb-12">
          <h2 class="text-h3 text-md-h2 font-weight-bold text-primary mb-4">
            Co říkají klienti
          </h2>
          <p class="text-h6 text-secondary max-width-600 mx-auto">
            Přečtěte si autentické zkušenosti lidí, kteří prošli mým energetickým léčením
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4" class="mb-6">
          <v-card
            class="testimonial-card h-100 pa-6"
            :color="$vuetify.theme.current.dark ? 'surface' : 'background'"
            elevation="3"
            rounded="xl"
          >
            <div class="d-flex align-start mb-4">
              <v-icon size="48" color="primary" class="mr-3">mdi-format-quote-open</v-icon>
              <div class="flex-grow-1">
                <blockquote class="text-body-1 text-secondary mb-4">
                  "Kateřina má úžasný dar. Po několika sezeních Reiki se cítím mnohem klidnější a vyrovnanější. 
                  Její přístup je profesionální, ale zároveň velmi lidský a vřelý."
                </blockquote>
                <div class="d-flex align-center">
                  <v-avatar size="40" color="primary" class="mr-3">
                    <span class="text-body-2 font-weight-bold text-white">JM</span>
                  </v-avatar>
                  <div>
                    <div class="text-subtitle-2 font-weight-bold text-primary">Jana M.</div>
                    <div class="text-caption text-secondary">Brno</div>
                    <div class="d-flex mt-1">
                      <v-icon size="14" color="cta" v-for="i in 5" :key="i">mdi-star</v-icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" md="4" class="mb-6">
          <v-card
            class="testimonial-card h-100 pa-6"
            :color="$vuetify.theme.current.dark ? 'surface' : 'background'"
            elevation="3"
            rounded="xl"
          >
            <div class="d-flex align-start mb-4">
              <v-icon size="48" color="secondary" class="mr-3">mdi-format-quote-open</v-icon>
              <div class="flex-grow-1">
                <blockquote class="text-body-1 text-secondary mb-4">
                  "Šamanské léčení s Kateřinou mi pomohlo vyřešit problémy, které jsem si nesla celý život. 
                  Její intuice a empatie jsou neuvěřitelné."
                </blockquote>
                <div class="d-flex align-center">
                  <v-avatar size="40" color="secondary" class="mr-3">
                    <span class="text-body-2 font-weight-bold text-white">PS</span>
                  </v-avatar>
                  <div>
                    <div class="text-subtitle-2 font-weight-bold text-primary">Petr S.</div>
                    <div class="text-caption text-secondary">Praha</div>
                    <div class="d-flex mt-1">
                      <v-icon size="14" color="cta" v-for="i in 5" :key="i">mdi-star</v-icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" md="4" class="mb-6">
          <v-card
            class="testimonial-card h-100 pa-6"
            :color="$vuetify.theme.current.dark ? 'surface' : 'background'"
            elevation="3"
            rounded="xl"
          >
            <div class="d-flex align-start mb-4">
              <v-icon size="48" color="cta" class="mr-3">mdi-format-quote-open</v-icon>
              <div class="flex-grow-1">
                <blockquote class="text-body-1 text-secondary mb-4">
                  "Kateřina vytváří bezpečný prostor, kde se člověk může uvolnit a nechat se vést. 
                  Její terapie mi změnila život k lepšímu."
                </blockquote>
                <div class="d-flex align-center">
                  <v-avatar size="40" color="cta" class="mr-3">
                    <span class="text-body-2 font-weight-bold text-white">MK</span>
                  </v-avatar>
                  <div>
                    <div class="text-subtitle-2 font-weight-bold text-primary">Marie K.</div>
                    <div class="text-caption text-secondary">Brno</div>
                    <div class="d-flex mt-1">
                      <v-icon size="14" color="cta" v-for="i in 5" :key="i">mdi-star</v-icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="mt-8">
        <v-col cols="12" class="text-center">
          <v-btn
            to="/reference"
            color="primary"
            variant="outlined"
            size="large"
            rounded="pill"
            class="text-body-1 font-weight-medium"
          >
            <v-icon start>mdi-star</v-icon>
            Zobrazit všechny reference
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <!-- Call to Action Section -->
    <v-container fluid class="cta-section py-16">
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center">
          <v-card
            class="cta-card pa-8"
            color="primary"
            elevation="4"
            rounded="xl"
          >
            <h2 class="text-h3 text-md-h2 font-weight-bold text-white mb-4">
              Začněte svou cestu k uzdravení
            </h2>
            <p class="text-h6 text-white mb-8">
              Objednejte si své první sezení a objevte sílu energetického léčení
            </p>
            <v-btn
              to="/objednani"
              size="x-large"
              color="cta"
              variant="elevated"
              class="text-body-1 font-weight-medium"
              rounded="pill"
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
// Page metadata
useHead({
  title: 'Kateřina Patyková - Reiki & Šamanské léčení',
  meta: [
    { name: 'description', content: 'Certifikovaná terapeutka Reiki a šamanského léčení s více než 10 lety zkušeností. Pomáhám lidem najít vnitřní rovnováhu a harmonii.' }
  ]
})
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

.welcome-card {
  border: 2px solid var(--v-primary-base);
  border-opacity: 0.1;
}

.service-preview-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid var(--v-primary-base);
  border-opacity: 0.1;
}

.service-preview-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
}

.testimonial-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid var(--v-primary-base);
  border-opacity: 0.1;
}

.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
}

.cta-section {
  background: linear-gradient(135deg, 
    var(--v-primary-base) 0%, 
    var(--v-secondary-base) 100%);
}

.cta-card {
  border: 2px solid rgba(255,255,255,0.2);
}

/* Dark mode adjustments */
.v-theme--dark .hero-section {
  background: linear-gradient(135deg, 
    var(--v-accent-base) 0%, 
    var(--v-background-base) 100%);
}

.v-theme--dark .welcome-card {
  border-color: var(--v-primary-base);
  border-opacity: 0.2;
}

.v-theme--dark .service-preview-card {
  border-color: var(--v-primary-base);
  border-opacity: 0.2;
}

.v-theme--dark .testimonial-card {
  border-color: var(--v-primary-base);
  border-opacity: 0.2;
}
</style>