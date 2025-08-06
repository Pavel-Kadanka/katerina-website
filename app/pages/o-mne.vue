<template>
  <div>
    <!-- Main Content -->
    <v-container class="section-container">
      <v-row justify="center">
        <v-col cols="12" lg="10">
          <!-- Header Section -->
          <v-row class="mb-16 mt-8">
            <v-col cols="12" class="text-center">
              <h2 class="text-h3 text-md-h2 font-weight-bold gradient-text-primary mb-4 scroll-animate">
                O mně
              </h2>
              <div class="spiritual-divider mx-auto scroll-animate" style="width: 100px;"></div>
              <p class="text-h6 text-secondary max-width-600 mx-auto mt-4 scroll-animate">
                Poznejte mou cestu k energetickému léčení a filozofii uzdravení
              </p>
            </v-col>
          </v-row>

          <!-- My Journey Section -->
          <v-row class="mb-16">
            <v-col cols="12" md="6" class="d-flex align-center scroll-animate-left">
              <div>
                <h2 class="text-h3 text-md-h2 font-weight-bold text-accent mb-6">
                  Moje cesta k Reiki a šamanismu
                </h2>
                <p class="text-body-1 text-secondary mb-4">
                  Moje cesta začala před více než deseti lety, kdy jsem poprvé pocítila hlubokou potřebu 
                  pomáhat druhým na jejich cestě k uzdravení. Bylo to období, kdy jsem sama procházela 
                  náročnou životní situací a hledala způsob, jak se s ní vyrovnat.
                </p>
                <p class="text-body-1 text-secondary mb-4">
                  První setkání s Reiki bylo pro mě zlomovým momentem. Pocítila jsem, jak jemná energie 
                  proniká mým tělem a přináší mi klid a uvolnění, které jsem dlouho postrádala. 
                  Od té chvíle jsem věděla, že chci tuto léčivou sílu předávat dál.
                </p>
                <p class="text-body-1 text-secondary">
                  Po letech studia a praxe jsem získala certifikace v Reiki terapii a absolvovala 
                  výcvik v šamanském léčení. Každý den se učím něco nového a každý klient mě učí 
                  něco o sobě i o léčení.
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="6" rounded="xl" class="d-flex align-center justify-center scroll-animate-right soft-gradient-primary">
                <div class="text-center">
                  <v-icon size="80" color="accent" class="mb-4 floating-icon">mdi-heart-pulse</v-icon>
                  <h3 class="text-h5 font-weight-bold text-primary mb-3">10+ let zkušeností</h3>
                  <p class="text-body-2 text-secondary">
                    Více než deset let se věnuji energetickému léčení a pomáhám lidem najít jejich vnitřní sílu
                  </p>
                </div>
              </v-col>
          </v-row>

          <!-- My Philosophy Section -->
          <v-row class="mb-16">
            <v-col cols="12" class="text-center scroll-animate-scale">
              <v-card
                class="philosophy-card pa-8 hover-lift spiritual-shadow"
                color="surface"
                elevation="2"
                rounded="xl"
              >
                <v-icon size="64" color="accent" class="mb-6 floating-icon">mdi-lightbulb</v-icon>
                <h2 class="text-h3 text-md-h2 font-weight-bold text-accent mb-6">
                  Moje filozofie
                </h2>
                <blockquote class="text-h5 text-md-h4 font-weight-light text-primary mb-6 max-width-800 mx-auto">
                  "Věřím, že každý z nás má v sobě přirozenou schopnost uzdravit se."
                </blockquote>
                <p class="text-body-1 text-secondary mb-4 max-width-800 mx-auto">
                  Mé terapeutické sezení je založeno na respektu k individuální cestě každého klienta 
                  a vytvoření bezpečného prostoru pro uzdravení. Každý člověk je jedinečný a každé 
                  sezení je proto přizpůsobeno konkrétním potřebám a situaci.
                </p>
                <p class="text-body-1 text-secondary max-width-800 mx-auto">
                  Věřím v sílu jemnosti a trpělivosti. Uzdravení je proces, který vyžaduje čas a 
                  ochotu naslouchat svému tělu a duši. Mé role je být průvodcem na této cestě, 
                  poskytovat podporu a bezpečný prostor pro objevení vlastní vnitřní moudrosti.
                </p>
              </v-card>
            </v-col>
          </v-row>

          <!-- Education & Certifications -->
          <v-row>
            <v-col cols="12" class="text-center mb-8">
              <h2 class="text-h3 text-md-h2 font-weight-bold gradient-text-primary mb-4 scroll-animate">
                Vzdělání a certifikace
              </h2>
              <div class="spiritual-divider mx-auto scroll-animate" style="width: 100px;"></div>
              <p class="text-h6 text-secondary max-width-600 mx-auto mt-4 scroll-animate">
                Moje vzdělání a odborné certifikace v oblasti energetického léčení
              </p>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="4" class="mb-6">
              <v-card
                class="certification-card h-100 pa-6 text-center hover-lift spiritual-shadow"
                color="surface"
                elevation="3"
                rounded="xl"
              >
                <v-icon size="48" color="accent" class="mb-4 floating-icon">mdi-certificate</v-icon>
                <h3 class="text-h5 font-weight-bold text-primary mb-3">Reiki Master</h3>
                <p class="text-body-2 text-secondary mb-3">Certifikace Reiki Master</p>
                <p class="text-caption text-secondary">2015 - současnost</p>
              </v-card>
            </v-col>

            <v-col cols="12" md="4" class="mb-6">
              <v-card
                class="certification-card h-100 pa-6 text-center hover-lift spiritual-shadow"
                color="surface"
                elevation="3"
                rounded="xl"
              >
                <v-icon size="48" color="accent" class="mb-4 floating-icon">mdi-star</v-icon>
                <h3 class="text-h5 font-weight-bold text-primary mb-3">Šamanské léčení</h3>
                <p class="text-body-2 text-secondary mb-3">Výcvik v šamanském léčení</p>
                <p class="text-caption text-secondary">2018 - současnost</p>
              </v-card>
            </v-col>

            <v-col cols="12" md="4" class="mb-6">
              <v-card
                class="certification-card h-100 pa-6 text-center hover-lift spiritual-shadow"
                color="surface"
                elevation="3"
                rounded="xl"
              >
                <v-icon size="48" color="accent" class="mb-4 floating-icon">mdi-heart</v-icon>
                <h3 class="text-h5 font-weight-bold text-primary mb-3">Energetické léčení</h3>
                <p class="text-body-2 text-secondary mb-3">Kurzy energetického léčení</p>
                <p class="text-caption text-secondary">2013 - současnost</p>
              </v-card>
            </v-col>
          </v-row>

          <!-- Personal Story -->
          <v-row class="mt-16">
            <v-col cols="12" class="text-center">
              <h2 class="text-h3 text-md-h2 font-weight-bold gradient-text-primary mb-4 scroll-animate">
                Můj příběh
              </h2>
              <div class="spiritual-divider mx-auto scroll-animate" style="width: 100px;"></div>
            </v-col>
          </v-row>

          <v-row class="mb-16">
            <v-col cols="12" class="text-center scroll-animate">
              <v-card
                class="story-card pa-8"
                color="surface"
                elevation="3"
                rounded="xl"
              >
                <p class="text-body-1 text-secondary mb-4">
                  Jmenuji se Kateřina Patyková a jsem certifikovaná terapeutka Reiki a šamanského léčení. 
                  Moje cesta k energetickému léčení začala před více než deseti lety, kdy jsem sama procházela 
                  náročným obdobím a hledala způsob, jak najít vnitřní klid a harmonii.
                </p>
                <p class="text-body-1 text-secondary mb-4">
                  První setkání s Reiki bylo pro mě zlomovým momentem. Pocítila jsem, jak jemná energie 
                  proniká mým tělem a přináší mi úlevu a uvolnění, které jsem dlouho postrádala. 
                  Od té chvíle jsem věděla, že chci tuto léčivou sílu předávat dál a pomáhat druhým 
                  na jejich cestě k uzdravení.
                </p>
                <p class="text-body-1 text-secondary">
                  Dnes se věnuji energetickému léčení na plný úvazek a každý den jsem vděčná za možnost 
                  být součástí uzdravovacího procesu mých klientů. Věřím, že každý z nás má v sobě 
                  přirozenou schopnost uzdravit se a moje role je být průvodcem na této cestě.
                </p>
              </v-card>
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
              Začněme společně vaši cestu k uzdravení
            </h2>
            <p class="text-h6 text-secondary mb-8">
              Objednejte si své první sezení a objevte sílu energetického léčení
            </p>
            <div class="d-flex flex-column flex-md-row gap-4 justify-center">
              <v-btn
                to="/objednani"
                size="large"
                color="accent"
                variant="elevated"
                class="text-body-1 font-weight-medium animated-gradient-btn ma-2"
                rounded="xl"
              >
                <v-icon start>mdi-calendar-check</v-icon>
                Objednat sezení
              </v-btn>
              <v-btn
                to="/kontakt"
                size="large"
                color="primary"
                variant="outlined"
                class="text-body-1 font-weight-medium ma-2"
                rounded="xl"
              >
                <v-icon start>mdi-email</v-icon>
                Kontaktovat
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
// Page metadata
useHead({
  title: 'O mně - Reiki & Šamanské léčení | Kateřina Patyková',
  meta: [
    { name: 'description', content: 'Poznejte Kateřinu Patykovou - certifikovanou terapeutku Reiki a šamanského léčení s více než 10 lety zkušeností. Moje cesta k energetickému léčení.' }
  ]
})

// GSAP animations are handled globally in app.vue
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

.max-width-800 {
  max-width: 800px;
}

.journey-image-card {
  border: 2px solid var(--v-primary-base);
  border-opacity: 0.1;
}

.philosophy-card {
  border: 2px solid var(--v-secondary-base);
  border-opacity: 0.1;
}

.certification-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid var(--v-primary-base);
  border-opacity: 0.1;
}

.certification-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
}

.personal-card {
  border: 2px solid var(--v-cta-base);
  border-opacity: 0.1;
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

.v-theme--dark .journey-image-card,
.v-theme--dark .philosophy-card,
.v-theme--dark .personal-card {
  border-opacity: 0.2;
}

.v-theme--dark .certification-card {
  border-opacity: 0.2;
}
</style> 