import { initNav } from './modules/nav.js'
import { initContador } from './modules/contador.js'
import { initHeroCarrusel } from './modules/hero-carrusel.js'
import { initFooterReveal } from './modules/footer-reveal.js'

initNav()
initContador()
initHeroCarrusel()
initFooterReveal()

// Diferido — no bloquea LCP ni FCP
requestIdleCallback(() => {
  import('./modules/floating-actions.js').then(m => m.initFloatingActions())
}, { timeout: 2000 })
