import { initNav } from './modules/nav.js'
import { renderFooter } from './modules/footer-render.js'
import { initFooterReveal } from './modules/footer-reveal.js'

// ── Global — corre en todas las páginas ───────────────────────────────────
initNav()
renderFooter()
initFooterReveal()

// Flotantes diferidos — fallback para iOS Safari (no tiene requestIdleCallback)
const cargarFlotantes = () => import('./modules/floating-actions.js').then(m => m.initFloatingActions())
if (typeof requestIdleCallback !== 'undefined') {
  requestIdleCallback(cargarFlotantes, { timeout: 2000 })
} else {
  setTimeout(cargarFlotantes, 500)
}

// ── Por página — detecta dónde estamos y carga solo lo necesario ──────────
const path = window.location.pathname

if (path === '/' || path === '/index.html') {
  const { initContador } = await import('./modules/contador.js')
  const { initHeroCarrusel } = await import('./modules/hero-carrusel.js')
  initContador()
  initHeroCarrusel()
}

if (path === '/servicios.html' || path === '/trabajos.html') {
  const { default: GLightbox } = await import('glightbox')
  await import('glightbox/dist/css/glightbox.min.css')
  const { initGaleriaFiltro } = await import('./modules/galeria-filtro.js')
  initGaleriaFiltro()
  GLightbox({ selector: '.glightbox' })
}

if (path === '/contacto.html') {
  const { initForms } = await import('./modules/forms.js')
  initForms()
}
