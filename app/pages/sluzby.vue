<template>
  <div>
    <!-- Hero Section -->
    <v-container fluid class="hero-section pa-0">
      <v-row no-gutters class="align-center" style="min-height: 60vh;">
        <v-col cols="12" class="text-center">
          <div class="hero-content">
            <v-icon size="64" color="primary" class="mb-4">mdi-heart-pulse</v-icon>
            <h1 class="text-h2 text-md-h1 font-weight-bold text-primary mb-4">
              Služby
            </h1>
            <p class="text-h5 text-secondary max-width-600 mx-auto">
              Reiki & Šamanské léčení pro vaši vnitřní rovnováhu
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Main Services -->
    <v-container class="py-16">
      <v-row justify="center">
        <v-col cols="12" lg="10">
          <!-- Reiki Healing -->
          <v-row class="mb-16">
            <v-col cols="12" md="6" class="d-flex align-center">
              <div>
                <div class="d-flex align-center mb-4">
                  <v-icon size="48" color="primary" class="mr-3">mdi-heart</v-icon>
                  <h2 class="text-h3 text-md-h2 font-weight-bold text-primary">Reiki léčení</h2>
                </div>
                <h3 class="text-h5 font-weight-bold text-secondary mb-4">Harmonie těla a duše</h3>
                <p class="text-body-1 text-secondary mb-4">
                  Reiki je jemná forma energetického léčení, která pomáhá uvolnit napětí, podpořit relaxaci 
                  a obnovit přirozenou energetickou rovnováhu. Je to bezpečná a přírodní metoda, která 
                  pracuje s životní energií a podporuje samoléčebné procesy těla.
                </p>
                <p class="text-body-1 text-secondary mb-4">
                  Během sezení ležíte pohodlně na lehátku, zatímco já jemně pokládám ruce na různá místa 
                  vašeho těla. Energie Reiki proudí skrze mé ruce a pomáhá uvolnit bloky, zmírnit bolest 
                  a podpořit celkové uzdravení.
                </p>
                <div class="d-flex align-center mb-4">
                  <v-icon color="cta" class="mr-2">mdi-clock</v-icon>
                  <span class="text-body-1 text-secondary">Doba sezení: 60-90 minut</span>
                </div>
                <div class="d-flex align-center mb-6">
                  <v-icon color="cta" class="mr-2">mdi-currency-czk</v-icon>
                  <span class="text-h5 font-weight-bold text-cta">1 200 Kč / sezení</span>
                </div>
                <v-btn
                  to="/objednani"
                  color="cta"
                  variant="elevated"
                  size="large"
                  rounded="pill"
                  class="text-body-1 font-weight-medium"
                >
                  <v-icon start>mdi-calendar-check</v-icon>
                  Objednat Reiki sezení
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="d-flex justify-center">
              <v-card
                class="service-image-card pa-8"
                :color="$vuetify.theme.current.dark ? 'surface' : 'accent'"
                elevation="2"
                rounded="xl"
                max-width="400"
              >
                <div class="text-center">
                  <v-icon size="80" color="primary" class="mb-4">mdi-heart-pulse</v-icon>
                  <h3 class="text-h5 font-weight-bold text-primary mb-3">Co Reiki léčí?</h3>
                  <ul class="text-body-2 text-secondary text-left">
                    <li class="mb-2">• Stres a úzkost</li>
                    <li class="mb-2">• Chronickou bolest</li>
                    <li class="mb-2">• Poruchy spánku</li>
                    <li class="mb-2">• Emoční bloky</li>
                    <li class="mb-2">• Energetické nerovnováhy</li>
                    <li class="mb-2">• Celkové uvolnění</li>
                  </ul>
                </div>
              </v-card>
            </v-col>
          </v-row>

          <!-- Shamanic Healing -->
          <v-row class="mb-16">
            <v-col cols="12" md="6" class="d-flex justify-center order-md-2">
              <v-card
                class="service-image-card pa-8"
                :color="$vuetify.theme.current.dark ? 'surface' : 'accent'"
                elevation="2"
                rounded="xl"
                max-width="400"
              >
                <div class="text-center">
                  <v-icon size="80" color="secondary" class="mb-4">mdi-star</v-icon>
                  <h3 class="text-h5 font-weight-bold text-primary mb-3">Co šamanské léčení řeší?</h3>
                  <ul class="text-body-2 text-secondary text-left">
                    <li class="mb-2">• Hluboká traumata</li>
                    <li class="mb-2">• Duchovní krize</li>
                    <li class="mb-2">• Emoční bloky</li>
                    <li class="mb-2">• Ztrátu smyslu života</li>
                    <li class="mb-2">• Vztahové problémy</li>
                    <li class="mb-2">• Spojení s duší</li>
                  </ul>
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" md="6" class="d-flex align-center order-md-1">
              <div>
                <div class="d-flex align-center mb-4">
                  <v-icon size="48" color="secondary" class="mr-3">mdi-star</v-icon>
                  <h2 class="text-h3 text-md-h2 font-weight-bold text-primary">Šamanské léčení</h2>
                </div>
                <h3 class="text-h5 font-weight-bold text-secondary mb-4">Hluboké uzdravení duše</h3>
                <p class="text-body-1 text-secondary mb-4">
                  Šamanské léčení pracuje s hlubšími vrstvami našeho bytí a pomáhá řešit emoční bloky, 
                  traumata a duchovní otázky. Je to starodávná metoda, která využívá sílu přírody, 
                  rituálů a duchovního světa k uzdravení.
                </p>
                <p class="text-body-1 text-secondary mb-4">
                  Každé sezení je jedinečné a přizpůsobené potřebám klienta. Může zahrnovat práci s 
                  bubnem, rituály, vizualizace a hluboké rozhovory. Šamanské léčení pomáhá najít 
                  ztracené části duše a obnovit spojení s vlastní vnitřní moudrostí.
                </p>
                <div class="d-flex align-center mb-4">
                  <v-icon color="cta" class="mr-2">mdi-clock</v-icon>
                  <span class="text-body-1 text-secondary">Doba sezení: 90-120 minut</span>
                </div>
                <div class="d-flex align-center mb-6">
                  <v-icon color="cta" class="mr-2">mdi-currency-czk</v-icon>
                  <span class="text-h5 font-weight-bold text-cta">1 500 Kč / sezení</span>
                </div>
                <v-btn
                  to="/objednani"
                  color="cta"
                  variant="elevated"
                  size="large"
                  rounded="pill"
                  class="text-body-1 font-weight-medium"
                >
                  <v-icon start>mdi-calendar-check</v-icon>
                  Objednat šamanské sezení
                </v-btn>
              </div>
            </v-col>
          </v-row>

          <!-- Session Structure -->
          <v-row class="mb-16">
            <v-col cols="12" class="text-center">
              <h2 class="text-h3 text-md-h2 font-weight-bold text-primary mb-8">
                Průběh sezení
              </h2>
            </v-col>
          </v-row>
          
          <v-row>
            <v-col cols="12" md="4" class="mb-6">
              <v-card
                class="session-step-card h-100 pa-6 text-center"
                :color="$vuetify.theme.current.dark ? 'surface' : 'background'"
                elevation="2"
                rounded="xl"
              >
                <div class="step-number mb-4">1</div>
                <v-icon size="48" color="primary" class="mb-4">mdi-chat</v-icon>
                <h3 class="text-h5 font-weight-bold text-primary mb-3">Úvodní konzultace</h3>
                <p class="text-subtitle-1 text-cta font-weight-bold mb-2">15 minut</p>
                <p class="text-body-2 text-secondary">
                  Povídáme si o vašich potřebách, problémech a očekáváních. 
                  Vysvětlím vám průběh sezení a odpovím na vaše otázky.
                </p>
              </v-card>
            </v-col>
            
            <v-col cols="12" md="4" class="mb-6">
              <v-card
                class="session-step-card h-100 pa-6 text-center"
                :color="$vuetify.theme.current.dark ? 'surface' : 'background'"
                elevation="2"
                rounded="xl"
              >
                <div class="step-number mb-4">2</div>
                <v-icon size="48" color="secondary" class="mb-4">mdi-heart-pulse</v-icon>
                <h3 class="text-h5 font-weight-bold text-primary mb-3">Energetické ošetření</h3>
                <p class="text-subtitle-1 text-cta font-weight-bold mb-2">45-60 minut</p>
                <p class="text-body-2 text-secondary">
                  Samotná terapie, během které pracuji s vaší energií a pomáhám 
                  uvolnit bloky a obnovit přirozenou rovnováhu.
                </p>
              </v-card>
            </v-col>
            
            <v-col cols="12" md="4" class="mb-6">
              <v-card
                class="session-step-card h-100 pa-6 text-center"
                :color="$vuetify.theme.current.dark ? 'surface' : 'background'"
                elevation="2"
                rounded="xl"
              >
                <div class="step-number mb-4">3</div>
                <v-icon size="48" color="cta" class="mb-4">mdi-lightbulb</v-icon>
                <h3 class="text-h5 font-weight-bold text-primary mb-3">Závěrečná část</h3>
                <p class="text-subtitle-1 text-cta font-weight-bold mb-2">15 minut</p>
                <p class="text-body-2 text-secondary">
                  Sdílíme pocity ze sezení, dám vám doporučení pro domácí péči 
                  a odpovím na případné otázky.
                </p>
              </v-card>
            </v-col>
          </v-row>

          <!-- Packages and Discounts -->
          <v-row class="mt-16">
            <v-col cols="12" class="text-center mb-8">
              <h2 class="text-h3 text-md-h2 font-weight-bold text-primary mb-4">
                Balíčky a slevy
              </h2>
              <p class="text-h6 text-secondary max-width-600 mx-auto">
                Ušetřete při objednání více sezení najednou
              </p>
            </v-col>
          </v-row>
          
          <v-row>
            <v-col cols="12" md="4" class="mb-6">
              <v-card
                class="package-card h-100 pa-6 text-center"
                :color="$vuetify.theme.current.dark ? 'surface' : 'background'"
                elevation="3"
                rounded="xl"
              >
                <v-icon size="64" color="primary" class="mb-4">mdi-heart</v-icon>
                <h3 class="text-h5 font-weight-bold text-primary mb-3">3 sezení Reiki</h3>
                <div class="price-section mb-4">
                  <span class="text-h4 font-weight-bold text-cta">3 200 Kč</span>
                  <div class="text-body-2 text-secondary">ušetříte 400 Kč</div>
                </div>
                <p class="text-body-2 text-secondary mb-4">
                  Ideální pro začátečníky nebo pro řešení akutních problémů
                </p>
                <v-btn
                  to="/objednani"
                  color="primary"
                  variant="outlined"
                  size="large"
                  rounded="pill"
                  class="text-body-1 font-weight-medium"
                >
                  Objednat balíček
                </v-btn>
              </v-card>
            </v-col>
            
            <v-col cols="12" md="4" class="mb-6">
              <v-card
                class="package-card h-100 pa-6 text-center"
                :color="$vuetify.theme.current.dark ? 'surface' : 'background'"
                elevation="3"
                rounded="xl"
              >
                <v-icon size="64" color="secondary" class="mb-4">mdi-star</v-icon>
                <h3 class="text-h5 font-weight-bold text-primary mb-3">3 sezení Šamanské léčení</h3>
                <div class="price-section mb-4">
                  <span class="text-h4 font-weight-bold text-cta">4 200 Kč</span>
                  <div class="text-body-2 text-secondary">ušetříte 300 Kč</div>
                </div>
                <p class="text-body-2 text-secondary mb-4">
                  Pro hlubší práci s duší a řešení komplexních problémů
                </p>
                <v-btn
                  to="/objednani"
                  color="secondary"
                  variant="outlined"
                  size="large"
                  rounded="pill"
                  class="text-body-1 font-weight-medium"
                >
                  Objednat balíček
                </v-btn>
              </v-card>
            </v-col>
            
            <v-col cols="12" md="4" class="mb-6">
              <v-card
                class="package-card h-100 pa-6 text-center"
                :color="$vuetify.theme.current.dark ? 'surface' : 'background'"
                elevation="3"
                rounded="xl"
              >
                <v-icon size="64" color="cta" class="mb-4">mdi-mix</v-icon>
                <h3 class="text-h5 font-weight-bold text-primary mb-3">Kombinovaný balíček</h3>
                <div class="price-section mb-4">
                  <span class="text-h4 font-weight-bold text-cta">5 500 Kč</span>
                  <div class="text-body-2 text-secondary">5 sezení dle výběru</div>
                </div>
                <p class="text-body-2 text-secondary mb-4">
                  Kombinujte Reiki a šamanské léčení podle vašich potřeb
                </p>
                <v-btn
                  to="/objednani"
                  color="cta"
                  variant="outlined"
                  size="large"
                  rounded="pill"
                  class="text-body-1 font-weight-medium"
                >
                  Objednat balíček
                </v-btn>
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
  title: 'Služby - Reiki & Šamanské léčení | Kateřina Patyková',
  meta: [
    { name: 'description', content: 'Nabízím Reiki a šamanské léčení. Ceny, průběh sezení a balíčky. Certifikovaná terapeutka s více než 10 lety zkušeností.' }
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

.service-image-card {
  border: 2px solid var(--v-primary-base);
  border-opacity: 0.1;
}

.session-step-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid var(--v-primary-base);
  border-opacity: 0.1;
}

.session-step-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
}

.step-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--v-primary-base);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0 auto;
}

.package-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid var(--v-primary-base);
  border-opacity: 0.1;
}

.package-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
}

.price-section {
  padding: 1rem;
  background: var(--v-accent-base);
  border-radius: 12px;
  margin: 1rem 0;
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

.v-theme--dark .service-image-card,
.v-theme--dark .session-step-card,
.v-theme--dark .package-card {
  border-opacity: 0.2;
}

.v-theme--dark .price-section {
  background: var(--v-surface-base);
}
</style> 