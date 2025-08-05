# Animation System Guide

This guide explains how to use the animation system implemented in the Nuxt 4 + Vuetify 3 app.

## Overview

The animation system consists of:
- **Global Page Transitions**: Smooth fade transitions between pages
- **Scroll-triggered Animations**: GSAP + ScrollTrigger for scroll-based animations
- **Vuetify Transitions**: Enhanced component transitions
- **Performance Optimizations**: Mobile responsiveness and accessibility

## Files Structure

```
app/
├── assets/styles/animations.css     # Global animation styles
├── composables/useGsap.ts           # GSAP composable
├── plugins/gsap.client.ts           # GSAP client plugin
├── components/
│   ├── AnimatedSection.vue          # Reusable animation wrapper
│   └── TransitionWrapper.vue        # Vuetify transition wrapper
└── pages/
    └── sluzby.vue                   # Example implementation
```

## Usage

### 1. Global Page Transitions

Page transitions are automatically applied to all pages. The transition is configured in `nuxt.config.ts`:

```typescript
app: {
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  }
}
```

### 2. Scroll Animations

#### Basic Usage

Add animation classes to elements:

```vue
<template>
  <!-- Fade in + slide up -->
  <div class="scroll-animate">
    Content that animates on scroll
  </div>
  
  <!-- Slide from left -->
  <div class="scroll-animate-left">
    Content sliding from left
  </div>
  
  <!-- Slide from right -->
  <div class="scroll-animate-right">
    Content sliding from right
  </div>
  
  <!-- Scale animation -->
  <div class="scroll-animate-scale">
    Content with scale effect
  </div>
</template>
```

#### Stagger Animations

For repeated elements (like cards, lists):

```vue
<template>
  <div class="stagger-animate">
    <div class="stagger-item">Item 1</div>
    <div class="stagger-item">Item 2</div>
    <div class="stagger-item">Item 3</div>
  </div>
</template>
```

#### Initialize in Pages

```vue
<script setup>
const { initScrollAnimations, cleanupScrollAnimations } = useGsap()

onMounted(() => {
  initScrollAnimations()
})

onUnmounted(() => {
  cleanupScrollAnimations()
})
</script>
```

### 3. Using AnimatedSection Component

```vue
<template>
  <AnimatedSection animation="slide-left">
    <h2>This will slide in from the left</h2>
  </AnimatedSection>
  
  <AnimatedSection animation="stagger" :stagger="true">
    <div class="stagger-item">Item 1</div>
    <div class="stagger-item">Item 2</div>
  </AnimatedSection>
</template>
```

### 4. Vuetify Transitions

#### Using TransitionWrapper

```vue
<template>
  <TransitionWrapper type="expand" mode="out-in">
    <v-card v-if="showCard">
      Card content
    </v-card>
  </TransitionWrapper>
</template>
```

#### Direct Vuetify Transitions

```vue
<template>
  <v-fade-transition mode="out-in">
    <v-dialog v-model="dialog">
      Dialog content
    </v-dialog>
  </v-fade-transition>
</template>
```

## Animation Classes

### Scroll Animation Classes

- `.scroll-animate` - Fade in + slide up (default)
- `.scroll-animate-left` - Slide from left
- `.scroll-animate-right` - Slide from right
- `.scroll-animate-scale` - Scale animation
- `.stagger-animate` - Container for stagger animations
- `.stagger-item` - Individual items in stagger animation

### Page Transition Classes

- `.page-enter-active` - Page enter transition
- `.page-leave-active` - Page leave transition
- `.page-enter-from` - Initial state for page enter
- `.page-leave-to` - Final state for page leave

## Performance Features

### Mobile Optimization

- Simplified animations on mobile devices (≤768px)
- Reduced animation duration and complexity
- Optimized trigger points for better performance

### Accessibility

- Respects `prefers-reduced-motion` media query
- Disables animations for users who prefer reduced motion
- Maintains functionality without animations

### Hardware Acceleration

- Uses `transform` and `opacity` for best performance
- Includes `will-change` properties for optimization
- GPU acceleration with `transform: translateZ(0)`

## Customization

### Modifying Animation Timing

Edit `app/assets/styles/animations.css`:

```css
.page-enter-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Adjusting GSAP Settings

Modify `app/composables/useGsap.ts`:

```typescript
gsap.fromTo(element, 
  { opacity: 0, y: 30 },
  {
    opacity: 1,
    y: 0,
    duration: 0.8, // Adjust duration
    ease: "power2.out", // Change easing
    scrollTrigger: {
      trigger: element,
      start: "top 85%", // Adjust trigger point
      end: "bottom 15%"
    }
  }
)
```

### Adding New Animation Types

1. Add CSS class in `animations.css`
2. Add GSAP logic in `useGsap.ts`
3. Update `AnimatedSection.vue` component

## Best Practices

1. **Use sparingly**: Don't animate everything - focus on key elements
2. **Consistent timing**: Keep animation durations consistent (0.4s - 0.8s)
3. **Smooth easing**: Use `cubic-bezier(0.4, 0, 0.2, 1)` for natural motion
4. **Performance first**: Only animate `transform` and `opacity`
5. **Mobile consideration**: Test on mobile devices
6. **Accessibility**: Always respect user preferences

## Troubleshooting

### Animations not working

1. Check if GSAP is properly initialized
2. Verify animation classes are applied
3. Ensure `onMounted` hook is called
4. Check browser console for errors

### Performance issues

1. Reduce number of animated elements
2. Simplify animation complexity
3. Check for layout thrashing
4. Use `will-change` sparingly

### Mobile issues

1. Verify responsive breakpoints
2. Check touch event handling
3. Test on actual mobile devices
4. Consider disabling animations on low-end devices 