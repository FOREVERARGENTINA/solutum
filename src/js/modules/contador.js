export function initContador() {
  const stats = document.querySelectorAll('[data-counter]')
  if (!stats.length) return

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return
      const el = entry.target
      const target = parseInt(el.dataset.counter, 10)
      const duration = 1200
      const start = performance.now()
      const tick = (now) => {
        const elapsed = now - start
        const progress = Math.min(elapsed / duration, 1)
        el.textContent = Math.floor(progress * target) + (el.dataset.suffix || '')
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
      observer.unobserve(el)
    })
  }, { threshold: 0.5 })

  stats.forEach(el => observer.observe(el))
}
