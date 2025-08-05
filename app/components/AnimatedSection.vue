<template>
  <div 
    :class="[
      'animated-section',
      animationClass,
      { 'stagger-container': stagger }
    ]"
    :data-animation="animation"
  >
    <slot />
  </div>
</template>

<script setup>
interface Props {
  animation?: 'fade' | 'slide-left' | 'slide-right' | 'scale' | 'stagger'
  stagger?: boolean
  delay?: number
}

const props = withDefaults(defineProps<Props>(), {
  animation: 'fade',
  stagger: false,
  delay: 0
})

// Compute animation class based on prop
const animationClass = computed(() => {
  switch (props.animation) {
    case 'slide-left':
      return 'scroll-animate-left'
    case 'slide-right':
      return 'scroll-animate-right'
    case 'scale':
      return 'scroll-animate-scale'
    case 'stagger':
      return 'stagger-animate'
    default:
      return 'scroll-animate'
  }
})
</script>

<style scoped>
.animated-section {
  will-change: opacity, transform;
}

.stagger-container {
  /* Container for stagger animations */
}
</style> 