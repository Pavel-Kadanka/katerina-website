<template>
  <div>
    <!-- Hero Section -->
    <v-container fluid class="hero-section pa-0">
      <v-row no-gutters class="align-center" style="min-height: 60vh;">
        <v-col cols="12" class="text-center">
          <div class="hero-content">
            <v-icon size="64" color="primary" class="mb-4">mdi-star</v-icon>
            <h1 class="text-h2 text-md-h1 font-weight-bold text-primary mb-4">
              Reference
            </h1>
            <p class="text-h5 text-secondary max-width-600 mx-auto">
              Co říkají klienti o mých službách
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Testimonials -->
    <v-container class="py-16">
      <v-row justify="center">
        <v-col cols="12" lg="10">
          <v-row class="mb-8">
            <v-col cols="12" class="text-center">
              <h2 class="text-h3 text-md-h2 font-weight-bold text-primary mb-4">
                Co říkají klienti
              </h2>
              <p class="text-h6 text-secondary max-width-600 mx-auto">
                Přečtěte si autentické zkušenosti lidí, kteří prošli mým energetickým léčením
              </p>
            </v-col>
          </v-row>

          <!-- Testimonial Cards -->
          <v-row>
            <v-col cols="12" md="6" class="mb-6">
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
                      Její přístup je profesionální, ale zároveň velmi lidský a vřelý. Každé sezení je pro mě 
                      časem hlubokého uvolnění a vnitřního klidu."
                    </blockquote>
                    <div class="d-flex align-center">
                      <v-avatar size="48" color="primary" class="mr-3">
                        <span class="text-h6 font-weight-bold text-white">JM</span>
                      </v-avatar>
                      <div>
                        <div class="text-subtitle-1 font-weight-bold text-primary">Jana M.</div>
                        <div class="text-caption text-secondary">Brno</div>
                        <div class="d-flex mt-1">
                          <v-icon size="16" color="cta" v-for="i in 5" :key="i">mdi-star</v-icon>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-col>

            <v-col cols="12" md="6" class="mb-6">
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
                      Její intuice a empatie jsou neuvěřitelné. Dokázala se dostat k jádru mých problémů a pomohla 
                      mi najít cestu k uzdravení."
                    </blockquote>
                    <div class="d-flex align-center">
                      <v-avatar size="48" color="secondary" class="mr-3">
                        <span class="text-h6 font-weight-bold text-white">PS</span>
                      </v-avatar>
                      <div>
                        <div class="text-subtitle-1 font-weight-bold text-primary">Petr S.</div>
                        <div class="text-caption text-secondary">Praha</div>
                        <div class="d-flex mt-1">
                          <v-icon size="16" color="cta" v-for="i in 5" :key="i">mdi-star</v-icon>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-col>

            <v-col cols="12" md="6" class="mb-6">
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
                      Její terapie mi změnila život k lepšímu. Naučila jsem se lépe naslouchat svému tělu 
                      a duši. Vřele doporučuji každému, kdo hledá skutečné uzdravení."
                    </blockquote>
                    <div class="d-flex align-center">
                      <v-avatar size="48" color="cta" class="mr-3">
                        <span class="text-h6 font-weight-bold text-white">MK</span>
                      </v-avatar>
                      <div>
                        <div class="text-subtitle-1 font-weight-bold text-primary">Marie K.</div>
                        <div class="text-caption text-secondary">Brno</div>
                        <div class="d-flex mt-1">
                          <v-icon size="16" color="cta" v-for="i in 5" :key="i">mdi-star</v-icon>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-col>

            <v-col cols="12" md="6" class="mb-6">
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
                      "Po letech chronické bolesti zad jsem našla úlevu díky Reiki sezením s Kateřinou. 
                      Její jemný přístup a hluboké znalosti energetického léčení mi pomohly nejen s bolestí, 
                      ale také s celkovým pocitem pohody."
                    </blockquote>
                    <div class="d-flex align-center">
                      <v-avatar size="48" color="primary" class="mr-3">
                        <span class="text-h6 font-weight-bold text-white">AL</span>
                      </v-avatar>
                      <div>
                        <div class="text-subtitle-1 font-weight-bold text-primary">Anna L.</div>
                        <div class="text-caption text-secondary">Olomouc</div>
                        <div class="d-flex mt-1">
                          <v-icon size="16" color="cta" v-for="i in 5" :key="i">mdi-star</v-icon>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-col>

            <v-col cols="12" md="6" class="mb-6">
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
                      "Šamanské léčení mi pomohlo vyrovnat se s traumatem z dětství. Kateřina má dar 
                      vytvořit bezpečný prostor pro uzdravení. Její práce je hluboká a transformativní. 
                      Děkuji za pomoc na mé cestě k uzdravení."
                    </blockquote>
                    <div class="d-flex align-center">
                      <v-avatar size="48" color="secondary" class="mr-3">
                        <span class="text-h6 font-weight-bold text-white">TH</span>
                      </v-avatar>
                      <div>
                        <div class="text-subtitle-1 font-weight-bold text-primary">Tomáš H.</div>
                        <div class="text-caption text-secondary">Ostrava</div>
                        <div class="d-flex mt-1">
                          <v-icon size="16" color="cta" v-for="i in 5" :key="i">mdi-star</v-icon>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-col>

            <v-col cols="12" md="6" class="mb-6">
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
                      "Kateřina je úžasná terapeutka s velkým srdcem. Její Reiki sezení mi pomohla 
                      s úzkostí a stresem. Cítím se mnohem klidnější a vyrovnanější. Určitě budu pokračovat 
                      v pravidelných sezeních."
                    </blockquote>
                    <div class="d-flex align-center">
                      <v-avatar size="48" color="cta" class="mr-3">
                        <span class="text-h6 font-weight-bold text-white">KV</span>
                      </v-avatar>
                      <div>
                        <div class="text-subtitle-1 font-weight-bold text-primary">Klára V.</div>
                        <div class="text-caption text-secondary">Brno</div>
                        <div class="d-flex mt-1">
                          <v-icon size="16" color="cta" v-for="i in 5" :key="i">mdi-star</v-icon>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>

          <!-- Statistics Section -->
          <v-row class="mt-16">
            <v-col cols="12" class="text-center mb-8">
              <h2 class="text-h3 text-md-h2 font-weight-bold text-primary mb-4">
                Moje výsledky
              </h2>
              <p class="text-h6 text-secondary max-width-600 mx-auto">
                Za více než 10 let praxe jsem pomohla stovkám klientů najít vnitřní rovnováhu
              </p>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="3" class="text-center mb-6">
              <v-card
                class="stat-card pa-6"
                :color="$vuetify.theme.current.dark ? 'surface' : 'accent'"
                elevation="2"
                rounded="xl"
              >
                <v-icon size="64" color="primary" class="mb-4">mdi-account-group</v-icon>
                <div class="text-h3 font-weight-bold text-primary mb-2">500+</div>
                <div class="text-body-1 text-secondary">Spokojených klientů</div>
              </v-card>
            </v-col>

            <v-col cols="12" md="3" class="text-center mb-6">
              <v-card
                class="stat-card pa-6"
                :color="$vuetify.theme.current.dark ? 'surface' : 'accent'"
                elevation="2"
                rounded="xl"
              >
                <v-icon size="64" color="secondary" class="mb-4">mdi-heart-pulse</v-icon>
                <div class="text-h3 font-weight-bold text-primary mb-2">2000+</div>
                <div class="text-body-1 text-secondary">Provedených sezení</div>
              </v-card>
            </v-col>

            <v-col cols="12" md="3" class="text-center mb-6">
              <v-card
                class="stat-card pa-6"
                :color="$vuetify.theme.current.dark ? 'surface' : 'accent'"
                elevation="2"
                rounded="xl"
              >
                <v-icon size="64" color="cta" class="mb-4">mdi-star</v-icon>
                <div class="text-h3 font-weight-bold text-primary mb-2">4.9</div>
                <div class="text-body-1 text-secondary">Průměrné hodnocení</div>
              </v-card>
            </v-col>

            <v-col cols="12" md="3" class="text-center mb-6">
              <v-card
                class="stat-card pa-6"
                :color="$vuetify.theme.current.dark ? 'surface' : 'accent'"
                elevation="2"
                rounded="xl"
              >
                <v-icon size="64" color="primary" class="mb-4">mdi-calendar</v-icon>
                <div class="text-h3 font-weight-bold text-primary mb-2">10+</div>
                <div class="text-body-1 text-secondary">Let zkušeností</div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <!-- Call to Action -->
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
              Zažijte to sami
            </h2>
            <p class="text-h6 text-white mb-8">
              Připojte se k těm, kteří už našli vnitřní klid a harmonii
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
  title: 'Reference - Kateřina Patyková',
  meta: [
    { name: 'description', content: 'Přečtěte si autentické reference a zkušenosti klientů s Reiki a šamanským léčením. Certifikovaná terapeutka s více než 10 lety zkušeností.' }
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

.testimonial-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid var(--v-primary-base);
  border-opacity: 0.1;
}

.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
}

.stat-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid var(--v-primary-base);
  border-opacity: 0.1;
}

.stat-card:hover {
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

.v-theme--dark .testimonial-card,
.v-theme--dark .stat-card {
  border-opacity: 0.2;
}
</style> 