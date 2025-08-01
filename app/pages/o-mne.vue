<template>
  <div>
    <!-- Hero Section -->
    <v-container fluid class="hero-section pa-0">
      <v-row no-gutters class="align-center" style="min-height: 60vh;">
        <v-col cols="12" class="text-center">
          <div class="hero-content">
            <v-icon size="64" color="primary" class="mb-4">mdi-account</v-icon>
            <h1 class="text-h2 text-md-h1 font-weight-bold text-primary mb-4">
              O mně
            </h1>
            <p class="text-h5 text-secondary max-width-600 mx-auto">
              Moje cesta k Reiki a šamanismu
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Main Content -->
    <v-container class="py-16">
      <v-row justify="center">
        <v-col cols="12" lg="10">
          <!-- My Journey Section -->
          <v-row class="mb-16">
            <v-col cols="12" md="6" class="d-flex align-center">
              <div>
                <h2 class="text-h3 text-md-h2 font-weight-bold text-primary mb-6">
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
            <v-col cols="12" md="6" class="d-flex justify-center">
              <v-card
                class="journey-image-card pa-8"
                :color="$vuetify.theme.current.dark ? 'surface' : 'accent'"
                elevation="2"
                rounded="xl"
                max-width="400"
              >
                <div class="text-center">
                  <v-icon size="80" color="primary" class="mb-4">mdi-heart-pulse</v-icon>
                  <h3 class="text-h5 font-weight-bold text-primary mb-3">10+ let zkušeností</h3>
                  <p class="text-body-2 text-secondary">
                    Více než deset let se věnuji energetickému léčení a pomáhám lidem najít jejich vnitřní sílu
                  </p>
                </div>
              </v-card>
            </v-col>
          </v-row>

          <!-- My Philosophy Section -->
          <v-row class="mb-16">
            <v-col cols="12" class="text-center">
              <v-card
                class="philosophy-card pa-8"
                :color="$vuetify.theme.current.dark ? 'surface' : 'background'"
                elevation="2"
                rounded="xl"
              >
                <v-icon size="64" color="secondary" class="mb-6">mdi-lightbulb</v-icon>
                <h2 class="text-h3 text-md-h2 font-weight-bold text-primary mb-6">
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
              <h2 class="text-h3 text-md-h2 font-weight-bold text-primary mb-4">
                Vzdělání a certifikace
              </h2>
              <p class="text-h6 text-secondary max-width-600 mx-auto">
                Průběžně se vzdělávám a rozšiřuji své znalosti v oblasti energetického léčení
              </p>
            </v-col>
          </v-row>
          
          <v-row>
            <v-col cols="12" md="4" class="mb-6">
              <v-card
                class="certification-card h-100 pa-6 text-center"
                :color="$vuetify.theme.current.dark ? 'surface' : 'background'"
                elevation="2"
                rounded="xl"
              >
                <v-icon size="64" color="primary" class="mb-4">mdi-certificate</v-icon>
                <h3 class="text-h5 font-weight-bold text-primary mb-3">Reiki Master</h3>
                <p class="text-subtitle-1 text-cta font-weight-bold mb-2">Certifikace 2018</p>
                <p class="text-body-2 text-secondary">
                  Kompletní výcvik v Reiki terapii všech tří stupňů, včetně pokročilých technik 
                  energetického léčení a práce s čakrami.
                </p>
              </v-card>
            </v-col>
            
            <v-col cols="12" md="4" class="mb-6">
              <v-card
                class="certification-card h-100 pa-6 text-center"
                :color="$vuetify.theme.current.dark ? 'surface' : 'background'"
                elevation="2"
                rounded="xl"
              >
                <v-icon size="64" color="secondary" class="mb-4">mdi-star</v-icon>
                <h3 class="text-h5 font-weight-bold text-primary mb-3">Šamanské léčení</h3>
                <p class="text-subtitle-1 text-cta font-weight-bold mb-2">Výcvik 2020</p>
                <p class="text-body-2 text-secondary">
                  Intenzivní výcvik v šamanských technikách, práci s duší, léčení traumatu 
                  a duchovním průvodcovství.
                </p>
              </v-card>
            </v-col>
            
            <v-col cols="12" md="4" class="mb-6">
              <v-card
                class="certification-card h-100 pa-6 text-center"
                :color="$vuetify.theme.current.dark ? 'surface' : 'background'"
                elevation="2"
                rounded="xl"
              >
                <v-icon size="64" color="cta" class="mb-4">mdi-school</v-icon>
                <h3 class="text-h5 font-weight-bold text-primary mb-3">Energetická medicína</h3>
                <p class="text-subtitle-1 text-cta font-weight-bold mb-2">Pokračující vzdělávání</p>
                <p class="text-body-2 text-secondary">
                  Průběžné vzdělávání v oblasti energetické medicíny, anatomie energetického těla 
                  a moderních přístupů k léčení.
                </p>
              </v-card>
            </v-col>
          </v-row>

          <!-- Personal Touch -->
          <v-row class="mt-16">
            <v-col cols="12" class="text-center">
              <v-card
                class="personal-card pa-8"
                :color="$vuetify.theme.current.dark ? 'surface' : 'accent'"
                elevation="2"
                rounded="xl"
              >
                <h2 class="text-h3 text-md-h2 font-weight-bold text-primary mb-6">
                  Proč si vybrat právě mě?
                </h2>
                <v-row>
                  <v-col cols="12" md="4" class="text-center mb-4">
                    <v-icon size="48" color="primary" class="mb-3">mdi-heart</v-icon>
                    <h4 class="text-h6 font-weight-bold text-primary mb-2">Empatie a porozumění</h4>
                    <p class="text-body-2 text-secondary">
                      Každý klient je pro mě jedinečný a přistupuji k němu s otevřeným srdcem
                    </p>
                  </v-col>
                  <v-col cols="12" md="4" class="text-center mb-4">
                    <v-icon size="48" color="secondary" class="mb-3">mdi-shield-check</v-icon>
                    <h4 class="text-h6 font-weight-bold text-primary mb-2">Bezpečný prostor</h4>
                    <p class="text-body-2 text-secondary">
                      Vytvářím důvěrné a bezpečné prostředí pro vaše uzdravení
                    </p>
                  </v-col>
                  <v-col cols="12" md="4" class="text-center mb-4">
                    <v-icon size="48" color="cta" class="mb-3">mdi-lightning-bolt</v-icon>
                    <h4 class="text-h6 font-weight-bold text-primary mb-2">Intuice a zkušenost</h4>
                    <p class="text-body-2 text-secondary">
                      Kombinuji intuitivní přístup s letitými zkušenostmi a vzděláním
                    </p>
                  </v-col>
                </v-row>
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
              Začněme společně vaši cestu
            </h2>
            <p class="text-h6 text-white mb-8">
              Objednejte si své první sezení a poznejte sílu energetického léčení
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
  title: 'O mně - Kateřina Patyková',
  meta: [
    { name: 'description', content: 'Poznejte mou cestu k Reiki a šamanismu, moji filozofii a vzdělání. Certifikovaná terapeutka s více než 10 lety zkušeností.' }
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