<template>
  <div>
    <!-- Testimonials -->
    <v-container class="section-container">
      <v-row justify="center">
        <v-col cols="12" lg="10">
          <v-row class="mb-16 mt-8">
            <v-col cols="12" class="text-center">
              <h2 class="text-h3 text-md-h2 font-weight-bold gradient-text-primary mb-4 scroll-animate">
                Co říkají klienti
              </h2>
              <div class="spiritual-divider mx-auto scroll-animate" style="width: 100px;"></div>
              <p class="text-h6 text-secondary max-width-600 mx-auto mt-4 scroll-animate">
                Přečtěte si autentické zkušenosti lidí, kteří prošli mým energetickým léčením
              </p>
            </v-col>
          </v-row>

          <!-- Testimonial Cards -->
          <v-row>
            <v-col 
              v-for="testimonial in testimonials" 
              :key="testimonial.id"
              cols="12" 
              md="6" 
              class="mb-6"
            >
              <v-card
                class="h-100 pa-6 hover-lift"
                color="surface"
                elevation="3"
                rounded="xl"
              >
                <div class="d-flex align-start mb-4">
                  <v-icon size="48" color="accent" class="mr-3 floating-icon">mdi-format-quote-open</v-icon>
                  <div class="flex-grow-1">
                    <blockquote class="text-body-1 text-primary mb-4">
                      "{{ testimonial.quote }}"
                    </blockquote>
                    <div class="d-flex align-center">
                      <v-avatar size="48" color="accent" class="mr-3">
                        <span class="text-h6 font-weight-bold text-white">{{ testimonial.initials }}</span>
                      </v-avatar>
                      <div>
                        <div class="text-subtitle-1 font-weight-bold text-primary">{{ testimonial.name }}</div>
                        <div class="text-caption text-secondary">{{ testimonial.location }}</div>
                        <div class="d-flex mt-1">
                          <v-icon size="16" color="accent" v-for="i in 5" :key="i">mdi-star</v-icon>
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
              <h2 class="text-h3 text-md-h2 font-weight-bold gradient-text-primary mb-4 scroll-animate">
                Statistiky spokojenosti
              </h2>
              <div class="spiritual-divider mx-auto scroll-animate" style="width: 100px;"></div>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="3" class="text-center mb-6">
              <v-card
                class="stat-card pa-6 hover-lift spiritual-shadow"
                color="surface"
                elevation="3"
                rounded="xl"
              >
                <v-icon size="64" color="accent" class="mb-4 floating-icon">mdi-account-group</v-icon>
                <div class="text-h3 font-weight-bold text-primary mb-2">500+</div>
                <div class="text-body-1 text-secondary">Spokojených klientů</div>
              </v-card>
            </v-col>

            <v-col cols="12" md="3" class="text-center mb-6">
              <v-card
                class="stat-card pa-6 hover-lift spiritual-shadow"
                color="surface"
                elevation="3"
                rounded="xl"
              >
                <v-icon size="64" color="accent" class="mb-4 floating-icon">mdi-star</v-icon>
                <div class="text-h3 font-weight-bold text-primary mb-2">4.9</div>
                <div class="text-body-1 text-secondary">Průměrné hodnocení</div>
              </v-card>
            </v-col>

            <v-col cols="12" md="3" class="text-center mb-6">
              <v-card
                class="stat-card pa-6 hover-lift spiritual-shadow"
                color="surface"
                elevation="3"
                rounded="xl"
              >
                <v-icon size="64" color="accent" class="mb-4 floating-icon">mdi-calendar-check</v-icon>
                <div class="text-h3 font-weight-bold text-primary mb-2">1000+</div>
                <div class="text-body-1 text-secondary">Provedených sezení</div>
              </v-card>
            </v-col>

            <v-col cols="12" md="3" class="text-center mb-6">
              <v-card
                class="stat-card pa-6 hover-lift spiritual-shadow"
                color="surface"
                elevation="3"
                rounded="xl"
              >
                <v-icon size="64" color="accent" class="mb-4 floating-icon">mdi-heart</v-icon>
                <div class="text-h3 font-weight-bold text-primary mb-2">10+</div>
                <div class="text-body-1 text-secondary">Let zkušeností</div>
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
      <!-- Call to Action -->
      <v-row class="mt-16">
            <v-col cols="12" class="text-center scroll-animate-scale">
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
                  Připojte se k těmto spokojeným klientům a objevte sílu energetického léčení
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
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
// Page metadata
useHead({
  title: 'Reference - Reiki & Šamanské léčení | Kateřina Patyková',
  meta: [
    { name: 'description', content: 'Přečtěte si reference a zkušenosti klientů s Reiki a šamanským léčením. Autentické příběhy uzdravení a spokojenosti.' }
  ]
})

// Testimonials data
const testimonials = [
  {
    id: 1,
    quote: "Kateřina má úžasný dar. Po několika sezeních Reiki se cítím mnohem klidnější a vyrovnanější. Její přístup je profesionální, ale zároveň velmi lidský a vřelý. Každé sezení je pro mě časem hlubokého uvolnění a vnitřního klidu.",
    name: "Jana M.",
    location: "Brno",
    initials: "JM",
    },
  {
    id: 2,
    quote: "Šamanské léčení s Kateřinou mi pomohlo vyřešit problémy, které jsem si nesla celý život. Její intuice a empatie jsou neuvěřitelné. Dokázala se dostat k jádru mých problémů a pomohla mi najít cestu k uzdravení.",
    name: "Petr S.",
    location: "Praha",
    initials: "PS",
  },
  {
    id: 3,
    quote: "Kateřina vytváří bezpečný prostor, kde se člověk může uvolnit a nechat se vést. Její terapie mi změnila život k lepšímu. Po několika sezeních se cítím mnohem silnější a vyrovnanější.",
    name: "Marie K.",
    location: "Brno",
    initials: "MK",
    },
  {
    id: 4,
    quote: "Energetické čištění s Kateřinou mi pomohlo zbavit se negativních energií, které mě tížily. Po sezení jsem se cítila lehčí a svěžejší. Její přístup je velmi profesionální.",
    name: "Anna L.",
    location: "Olomouc",
    initials: "AL",
  },
  {
    id: 5,
    quote: "Dlouho jsem hledala někoho, kdo by mi pomohl s emočními bloky. Kateřina je úžasná a její šamanské léčení mi skutečně pomohlo. Cítím se mnohem lépe a vděčná jsem za každé sezení.",
    name: "Klára N.",
    location: "Brno",
    initials: "KN",
  },
  {
    id: 6,
    quote: "Kateřina má dar léčit nejen tělo, ale i duši. Její Reiki sezení mi pomohlo s chronickou bolestí a stresem. Každé sezení je jedinečný zážitek a já se vždy těším na další.",
    name: "Tomáš H.",
    location: "Praha",
    initials: "TH",
    }
]

// GSAP animations are handled globally in app.vue
</script>