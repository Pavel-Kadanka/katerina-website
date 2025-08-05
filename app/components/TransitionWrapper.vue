<template>
  <component
    :is="transitionComponent"
    :mode="mode"
    :appear="appear"
    :group="group"
    :tag="tag"
    :css="css"
  >
    <slot />
  </component>
</template>

<script setup>
interface Props {
  type?: 'fade' | 'expand' | 'slide' | 'scale' | 'custom'
  mode?: 'in-out' | 'out-in'
  appear?: boolean
  group?: boolean
  tag?: string
  css?: boolean
  duration?: number
}

const props = withDefaults(defineProps<Props>(), {
  type: 'fade',
  mode: 'out-in',
  appear: false,
  group: false,
  tag: 'div',
  css: true,
  duration: 400
})

// Compute transition component based on type
const transitionComponent = computed(() => {
  switch (props.type) {
    case 'expand':
      return 'v-expand-transition'
    case 'slide':
      return 'v-slide-x-transition'
    case 'scale':
      return 'v-scale-transition'
    case 'custom':
      return 'v-fade-transition'
    default:
      return 'v-fade-transition'
  }
})
</script>

<style scoped>
/* Custom transition styles can be added here */
.v-fade-transition-enter-active,
.v-fade-transition-leave-active {
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.v-fade-transition-enter-from,
.v-fade-transition-leave-to {
  opacity: 0;
}

.v-expand-transition-enter-active,
.v-expand-transition-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.v-expand-transition-enter-from,
.v-expand-transition-leave-to {
  opacity: 0;
  transform: scaleY(0);
  transform-origin: top;
}
</style> 