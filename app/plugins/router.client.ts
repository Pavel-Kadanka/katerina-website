export default defineNuxtPlugin(() => {
  const router = useRouter()

  router.beforeEach((to, from, next) => {
    // Always scroll to top on navigation
    if (process.client) {
      // Use setTimeout to ensure the scroll happens after the route change
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }, 100)
    }
    next()
  })

  // Also handle scroll restoration for browser back/forward buttons
  if (process.client) {
    window.addEventListener('popstate', () => {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }, 100)
    })
  }
}) 