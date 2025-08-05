<template>
  <div>
    <!-- Main Services -->
    <v-container class="section-container">
      <v-row justify="center">
        <v-col cols="12" lg="10">
          <!-- Header Section -->
          <v-row class="mb-16 mt-8">
            <v-col cols="12" class="text-center">
              <h2 class="text-h3 text-md-h2 font-weight-bold gradient-text-primary mb-4 scroll-animate">
                Moje služby
              </h2>
              <div class="spiritual-divider mx-auto scroll-animate" style="width: 100px;"></div>
              <p class="text-h6 text-secondary max-width-600 mx-auto mt-4 scroll-animate">
                Profesionální energetické terapie pro vaši vnitřní rovnováhu a harmonii
              </p>
            </v-col>
          </v-row>

          <!-- Reiki Healing -->
          <v-row class="mb-16">
            <v-col cols="12" md="6" class="d-flex align-center scroll-animate-left">
              <div>
                <div class="d-flex align-center mb-4">
                  <v-icon size="48" color="accent" class="mr-3">mdi-heart</v-icon>
                  <h2 class="text-h3 text-md-h2 font-weight-bold text-accent">Reiki léčení</h2>
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
                  <v-icon color="accent" class="mr-2">mdi-clock</v-icon>
                  <span class="text-body-1 text-secondary">Doba sezení: 60-90 minut</span>
                </div>
                <div class="d-flex align-center mb-6">
                  <v-icon color="accent" class="mr-2">mdi-currency-czk</v-icon>
                  <span class="text-h5 font-weight-bold text-accent">1 200 Kč / sezení</span>
                </div>
                <v-btn
                  to="/objednani"
                  color="accent"
                  variant="elevated"
                  size="large"
                  rounded="xl"
                  class="text-body-1 font-weight-medium animated-gradient-btn"
                >
                  <v-icon start>mdi-calendar-check</v-icon>
                  Objednat Reiki sezení
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="d-flex justify-center scroll-animate-right">
              <v-card
                class="service-image-card pa-8 hover-lift spiritual-shadow"
                color="surface"
                elevation="2"
                rounded="xl"
                max-width="400"
              >
                <div class="text-center">
                  <v-icon size="80" color="accent" class="mb-4 floating-icon">mdi-heart-pulse</v-icon>
                  <h3 class="text-h5 font-weight-bold text-primary mb-3">Co Reiki léčí?</h3>
                  <ul class="text-body-2 text-secondary text-left">
                    <li class="mb-2">Stres a úzkost</li>
                    <li class="mb-2">Chronickou bolest</li>
                    <li class="mb-2">Poruchy spánku</li>
                    <li class="mb-2">Emoční bloky</li>
                    <li class="mb-2">Energetické nerovnováhy</li>
                    <li class="mb-2">Celkové uvolnění</li>
                  </ul>
                </div>
              </v-card>
            </v-col>
          </v-row>

          <!-- Shamanic Healing -->
          <v-row class="mb-16">
            <v-col cols="12" md="6" class="d-flex justify-center order-md-2 scroll-animate-right">
              <v-card
                class="service-image-card pa-8 hover-lift spiritual-shadow"
                color="surface"
                elevation="2"
                rounded="xl"
                max-width="400"
              >
                <div class="text-center">
                  <v-icon size="80" color="accent" class="mb-4 floating-icon">mdi-star</v-icon>
                  <h3 class="text-h5 font-weight-bold text-primary mb-3">Co šamanské léčení řeší?</h3>
                  <ul class="text-body-2 text-secondary text-left">
                    <li class="mb-2">Hluboká traumata</li>
                    <li class="mb-2">Emoční bloky</li>
                    <li class="mb-2">Duchovní krize</li>
                    <li class="mb-2">Vztahové problémy</li>
                    <li class="mb-2">Ztráta smyslu života</li>
                    <li class="mb-2">Očista energetického pole</li>
                  </ul>
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" md="6" class="d-flex align-center order-md-1 scroll-animate-left">
              <div>
                <div class="d-flex align-center mb-4">
                  <v-icon size="48" color="accent" class="mr-3">mdi-star</v-icon>
                  <h2 class="text-h3 text-md-h2 font-weight-bold text-accent">Šamanské léčení</h2>
                </div>
                <h3 class="text-h5 font-weight-bold text-secondary mb-4">Hluboké uzdravení duše</h3>
                <p class="text-body-1 text-secondary mb-4">
                  Šamanské léčení je starodávná metoda, která pracuje s hlubšími vrstvami našeho bytí. 
                  Pomáhá řešit emoční bloky, traumata a duchovní otázky, které mohou bránit našemu 
                  osobnímu růstu a štěstí.
                </p>
                <p class="text-body-1 text-secondary mb-4">
                  Během šamanského sezení používám různé techniky jako bubnování, zpěv, pohyb a 
                  vizualizace. Společně procházíme procesem očisty a uzdravení, který vám pomůže 
                  najít vnitřní klid a sílu.
                </p>
                <div class="d-flex align-center mb-4">
                  <v-icon color="accent" class="mr-2">mdi-clock</v-icon>
                  <span class="text-body-1 text-secondary">Doba sezení: 90-120 minut</span>
                </div>
                <div class="d-flex align-center mb-6">
                  <v-icon color="accent" class="mr-2">mdi-currency-czk</v-icon>
                  <span class="text-h5 font-weight-bold text-accent">1 500 Kč / sezení</span>
                </div>
                <v-btn
                  to="/objednani"
                  color="accent"
                  variant="elevated"
                  size="large"
                  rounded="xl"
                  class="text-body-1 font-weight-medium animated-gradient-btn"
                >
                  <v-icon start>mdi-calendar-check</v-icon>
                  Objednat šamanské sezení
                </v-btn>
              </div>
            </v-col>
          </v-row>

          <!-- Energy Cleansing -->
          <v-row class="mb-16">
            <v-col cols="12" md="6" class="d-flex align-center scroll-animate-left">
              <div>
                <div class="d-flex align-center mb-4">
                  <v-icon size="48" color="accent" class="mr-3">mdi-star-four-points</v-icon>
                  <h2 class="text-h3 text-md-h2 font-weight-bold text-accent">Energetické čištění</h2>
                </div>
                <h3 class="text-h5 font-weight-bold text-secondary mb-4">Očista a harmonizace</h3>
                <p class="text-body-1 text-secondary mb-4">
                  Energetické čištění je specializovaná služba zaměřená na odstranění negativních energií 
                  a blokád z vašeho energetického pole. Tato metoda je ideální pro lidi, kteří se cítí 
                  energeticky vyčerpaní nebo mají pocit, že je něco "drží zpět".
                </p>
                <p class="text-body-1 text-secondary mb-4">
                  Během sezení pracuji s vaším aurickým polem a čakrami, odstraňuji negativní energie 
                  a obnovuji přirozený tok životní energie. Po sezení se budete cítit lehčí, svěžejší 
                  a energeticky vyrovnaní.
                </p>
                <div class="d-flex align-center mb-4">
                  <v-icon color="accent" class="mr-2">mdi-clock</v-icon>
                  <span class="text-body-1 text-secondary">Doba sezení: 45-60 minut</span>
                </div>
                <div class="d-flex align-center mb-6">
                  <v-icon color="accent" class="mr-2">mdi-currency-czk</v-icon>
                  <span class="text-h5 font-weight-bold text-accent">800 Kč / sezení</span>
                </div>
                <v-btn
                  to="/objednani"
                  color="accent"
                  variant="elevated"
                  size="large"
                  rounded="xl"
                  class="text-body-1 font-weight-medium animated-gradient-btn"
                >
                  <v-icon start>mdi-calendar-check</v-icon>
                  Objednat energetické čištění
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="d-flex justify-center scroll-animate-right">
              <v-card
                class="service-image-card pa-8 hover-lift spiritual-shadow"
                color="surface"
                elevation="2"
                rounded="xl"
                max-width="400"
              >
                <div class="text-center">
                  <v-icon size="80" color="accent" class="mb-4 floating-icon">mdi-star-four-points</v-icon>
                  <h3 class="text-h5 font-weight-bold text-primary mb-3">Výhody energetického čištění</h3>
                  <ul class="text-body-2 text-secondary text-left">
                    <li class="mb-2">Odstranění negativních energií</li>
                    <li class="mb-2">Harmonizace čaker</li>
                    <li class="mb-2">Zvýšení energie</li>
                    <li class="mb-2">Lepší spánek</li>
                    <li class="mb-2">Emoční stabilita</li>
                    <li class="mb-2">Celkové uvolnění</li>
                  </ul>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <!-- Pricing Section -->
    <v-container class="section-container mb-16">
      <v-row>
        <v-col cols="12" class="text-center mb-8">
          <h2 class="text-h3 text-md-h2 font-weight-bold gradient-text-primary mb-4 scroll-animate">
            Ceník služeb
          </h2>
          <div class="spiritual-divider mx-auto scroll-animate" style="width: 100px;"></div>
          <p class="text-h6 text-secondary max-width-600 mx-auto mt-4 scroll-animate">
            Transparentní ceny za všechny mé služby
          </p>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="4" class="mb-6">
          <v-card
            class="pricing-card h-100 pa-6 hover-lift"
            color="surface"
            elevation="3"
            rounded="xl"
          >
            <div class="text-center mb-6">
              <v-icon size="64" color="accent" class="mb-4 floating-icon">mdi-heart</v-icon>
              <h3 class="text-h4 font-weight-bold text-primary mb-2">Reiki léčení</h3>
              <div class="text-h3 font-weight-bold text-accent mb-2">1 200 Kč</div>
              <div class="text-body-2 text-secondary">za sezení</div>
            </div>
            <ul class="text-body-1 text-secondary mb-6 d-flex flex-column justify-center align-center">
              <li class="mb-2">60-90 minut sezení</li>
              <li class="mb-2">Kompletní energetické ošetření</li>
              <li class="mb-2">Konzultace před a po sezení</li>
              <li class="mb-2">Doporučení pro domácí péči</li>
            </ul>
            <v-btn
              to="/objednani"
              color="accent"
              variant="elevated"
              block
              rounded="xl"
              class="animated-gradient-btn"
            >
              Objednat
            </v-btn>
          </v-card>
        </v-col>

        <v-col cols="12" md="4" class="mb-6">
          <v-card
            class="pricing-card h-100 pa-6 hover-lift"
            color="surface"
            elevation="4"
            rounded="xl"
          >
            <div class="text-center mb-6">
              <v-icon size="64" color="accent" class="mb-4 floating-icon">mdi-star</v-icon>
              <h3 class="text-h4 font-weight-bold text-primary mb-2">Šamanské léčení</h3>
              <div class="text-h3 font-weight-bold text-accent mb-2">1 500 Kč</div>
              <div class="text-body-2 text-secondary">za sezení</div>
            </div>
            <ul class="text-body-1 text-secondary mb-6 d-flex flex-column justify-center align-center">
              <li class="mb-2">90-120 minut sezení</li>
              <li class="mb-2">Hluboké duchovní léčení</li>
              <li class="mb-2">Práce s traumaty a bloky</li>
              <li class="mb-2">Integrační podpora</li>
            </ul>
            <v-btn
              to="/objednani"
              color="accent"
              variant="elevated"
              block
              rounded="xl"
              class="animated-gradient-btn"
            >
              Objednat
            </v-btn>
          </v-card>
        </v-col>

        <v-col cols="12" md="4" class="mb-6">
          <v-card
            class="pricing-card h-100 pa-6 hover-lift spiritual-shadow"
            color="surface"
            elevation="3"
            rounded="xl"
          >
            <div class="text-center mb-6">
              <v-icon size="64" color="accent" class="mb-4 floating-icon">mdi-star-four-points</v-icon>
              <h3 class="text-h4 font-weight-bold text-primary mb-2">Energetické čištění</h3>
              <div class="text-h3 font-weight-bold text-accent mb-2">800 Kč</div>
              <div class="text-body-2 text-secondary">za sezení</div>
            </div>
            <ul class="text-body-1 text-secondary mb-6 d-flex flex-column justify-center align-center">
              <li class="mb-2">45-60 minut sezení</li>
              <li class="mb-2">Očista aurického pole</li>
              <li class="mb-2">Harmonizace čaker</li>
              <li class="mb-2">Energetická ochrana</li>
            </ul>
            <v-btn
              to="/objednani"
              color="accent"
              variant="elevated"
              block
              rounded="xl"
              class="animated-gradient-btn"
            >
              Objednat
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- FAQ Section -->
    <v-container class="section-container mb-16">
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
    </v-container>

    <!-- Call to Action -->
    <v-container class="section-container soft-gradient-primary">
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center scroll-animate-scale">
          <v-card
            class="cta-card pa-8 "
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
// Page metadata
useHead({
  title: 'Služby - Reiki & Šamanské léčení | Kateřina Patyková',
  meta: [
    { name: 'description', content: 'Nabízím Reiki léčení, šamanské léčení a energetické čištění. Profesionální energetické terapie pro vaši vnitřní rovnováhu a harmonii.' }
  ]
})

// GSAP animations are handled globally in app.vue

// FAQ data
const faqs = ref([
  {
    question: 'Jak dlouho trvá jedno sezení?',
    answer: 'Doba sezení se liší podle typu terapie. Reiki léčení trvá 60-90 minut, šamanské léčení 90-120 minut a energetické čištění 45-60 minut.'
  },
  {
    question: 'Co mám očekávat od prvního sezení?',
    answer: 'První sezení začíná krátkou konzultací, kde si povíme o vašich potřebách a očekáváních. Poté následuje samotná terapie a na závěr shrnutí a doporučení.'
  },
  {
    question: 'Je energetické léčení bezpečné?',
    answer: 'Ano, všechny mé terapie jsou zcela bezpečné a neinvazivní. Reiki a šamanské léčení pracují s jemnými energiemi a jsou vhodné pro všechny věkové kategorie.'
  },
  {
    question: 'Kolik sezení budu potřebovat?',
    answer: 'Počet sezení je individuální a závisí na vašich potřebách a cílech. Někteří klienti pocítí úlevu již po prvním sezení, jiní potřebují více sezení pro trvalé výsledky.'
  },
  {
    question: 'Mohu sezení kombinovat?',
    answer: 'Ano, různé typy terapie se mohou vzájemně doplňovat. Ráda vám poradím, jaká kombinace bude pro vás nejvhodnější.'
  }
])
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, 
    var(--v-primary-base) 0%, 
    var(--v-secondary-base) 100%);
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