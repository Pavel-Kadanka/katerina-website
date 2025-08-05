<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// Global page transition configuration
definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  }
})

// Global GSAP initialization
const { initScrollAnimations, cleanupScrollAnimations, refreshScrollTrigger } = useGsap()

// Track if animations are initialized
const animationsInitialized = ref(false)

// Initialize animations with proper timing
const initializeAnimations = () => {
  if (process.client && !animationsInitialized.value) {
    // Wait for DOM to be fully ready
    nextTick(() => {
      // Additional delay to ensure all components are rendered
      setTimeout(() => {
        try {
          initScrollAnimations()
          refreshScrollTrigger()
          animationsInitialized.value = true
        } catch (error) {
          // Try again after a longer delay if it fails
          setTimeout(() => {
            if (!animationsInitialized.value) {
              try {
                initScrollAnimations()
                refreshScrollTrigger()
                animationsInitialized.value = true
              } catch (retryError) {
                // Silent fail on retry
              }
            }
          }, 1000)
        }
      }, 300)
    })
  }
}

// Initialize on app mount
onMounted(() => {
  initializeAnimations()
})

// Handle route changes
const route = useRoute()
watch(() => route.path, () => {
  // Reset flag and reinitialize
  animationsInitialized.value = false
  cleanupScrollAnimations()
  
  nextTick(() => {
    setTimeout(() => {
      initializeAnimations()
    }, 200)
  })
})

// Also try to initialize when the page becomes visible
onMounted(() => {
  if (process.client) {
    const handleVisibilityChange = () => {
      if (!document.hidden && !animationsInitialized.value) {
        initializeAnimations()
      }
    }
    
    const handleWindowLoad = () => {
      if (!animationsInitialized.value) {
        initializeAnimations()
      }
    }
    
    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('load', handleWindowLoad)
    
    // Cleanup
    onUnmounted(() => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('load', handleWindowLoad)
    })
  }
})

// Cleanup on unmount
onUnmounted(() => {
  cleanupScrollAnimations()
})
</script>
