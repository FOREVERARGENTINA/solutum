import GLightbox from 'glightbox'
import 'glightbox/dist/css/glightbox.min.css'

import { initNav } from './modules/nav.js'
import { initGaleriaFiltro } from './modules/galeria-filtro.js'
import { initFooterReveal } from './modules/footer-reveal.js'

initNav()
initGaleriaFiltro()
initFooterReveal()

GLightbox({ selector: '.glightbox' })

requestIdleCallback(() => {
  import('./modules/floating-actions.js').then(m => m.initFloatingActions())
}, { timeout: 2000 })
