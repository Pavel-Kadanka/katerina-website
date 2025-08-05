import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

export const useGsap = () => {
  // Initialize GSAP animations
  const initScrollAnimations = () => {
    if (!process.client) {
      return
    }

    // Clear any existing ScrollTrigger instances first
    try {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    } catch (error) {
      // Silent fail
    }

    // Wait for next tick to ensure DOM is ready
    nextTick(() => {
      // Small delay to ensure all elements are rendered
      setTimeout(() => {
        try {
          // Check if elements exist before setting up animations
          const scrollElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale, .stagger-animate')
          
          if (scrollElements.length === 0) {
            return
          }

          // Set up responsive breakpoints
          ScrollTrigger.matchMedia({
      // Desktop animations
      "(min-width: 769px)": () => {
        // Fade in + slide up animations
        gsap.utils.toArray('.scroll-animate').forEach((element: any) => {
          gsap.fromTo(element, 
            {
              opacity: 0,
              y: 30,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
              }
            }
          )
        })

        // Left slide animations
        gsap.utils.toArray('.scroll-animate-left').forEach((element: any) => {
          gsap.fromTo(element,
            {
              opacity: 0,
              x: -30,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
              }
            }
          )
        })

        // Right slide animations
        gsap.utils.toArray('.scroll-animate-right').forEach((element: any) => {
          gsap.fromTo(element,
            {
              opacity: 0,
              x: 30,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
              }
            }
          )
        })

        // Scale animations
        gsap.utils.toArray('.scroll-animate-scale').forEach((element: any) => {
          gsap.fromTo(element,
            {
              opacity: 0,
              scale: 0.95,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
              }
            }
          )
        })

        // Stagger animations for repeated elements
        gsap.utils.toArray('.stagger-animate').forEach((container: any) => {
          const elements = container.querySelectorAll('.stagger-item')
          if (elements.length > 0) {
            // Set initial state
            gsap.set(elements, {
              opacity: 0,
              y: 30
            })
            
            // Create the stagger animation
            gsap.to(elements, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: container,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
                onEnter: () => {
                  console.log('Stagger animation triggered for:', container)
                }
              }
            })
          }
        })
      },

      // Mobile animations (simplified)
      "(max-width: 768px)": () => {
        // Simplified animations for mobile
        gsap.utils.toArray('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale').forEach((element: any) => {
          gsap.fromTo(element,
            {
              opacity: 0,
              y: 20,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none reverse"
              }
            }
          )
        })

        // Simplified stagger for mobile
        gsap.utils.toArray('.stagger-animate').forEach((container: any) => {
          const elements = container.querySelectorAll('.stagger-item')
          if (elements.length > 0) {
            gsap.fromTo(elements,
              {
                opacity: 0,
                y: 15,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.05,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: container,
                  start: "top 90%",
                  end: "bottom 10%",
                  toggleActions: "play none none reverse"
                }
              }
            )
          }
        })
      }
    })
  } catch (error) {
    // Silent fail
  }
}, 100) // 100ms delay to ensure DOM is ready
})
  }

  // Clean up ScrollTrigger instances
  const cleanupScrollAnimations = () => {
    if (process.client) {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }

  // Refresh ScrollTrigger (useful after dynamic content changes)
  const refreshScrollTrigger = () => {
    if (process.client) {
      ScrollTrigger.refresh()
    }
  }

  // Animate specific element
  const animateElement = (element: HTMLElement, animation: string, options = {}) => {
    if (!process.client) return

    const defaultOptions = {
      duration: 0.8,
      ease: "power2.out",
      ...options
    }

    switch (animation) {
      case 'fadeIn':
        gsap.fromTo(element, 
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, ...defaultOptions }
        )
        break
      case 'slideInLeft':
        gsap.fromTo(element,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, ...defaultOptions }
        )
        break
      case 'slideInRight':
        gsap.fromTo(element,
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, ...defaultOptions }
        )
        break
      case 'scaleIn':
        gsap.fromTo(element,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, ...defaultOptions }
        )
        break
      default:
        gsap.fromTo(element,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, ...defaultOptions }
        )
    }
  }

  return {
    initScrollAnimations,
    cleanupScrollAnimations,
    refreshScrollTrigger,
    animateElement
  }
} 