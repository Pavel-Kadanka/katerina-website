import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger)
  
  // Set default GSAP settings for better performance
  gsap.defaults({
    ease: "power2.out",
    duration: 0.8
  })
  
  // Ensure ScrollTrigger is ready
  ScrollTrigger.config({
    ignoreMobileResize: true,
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
  })
  
  // Provide GSAP globally
  return {
    provide: {
      gsap,
      ScrollTrigger
    }
  }
}) 