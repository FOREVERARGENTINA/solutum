import GLightbox from 'glightbox'
import 'glightbox/dist/css/glightbox.min.css'

import { initNav } from './modules/nav.js'
import { initGaleriaFiltro } from './modules/galeria-filtro.js'
import { initFooterReveal } from './modules/footer-reveal.js'
import { initFloatingActions } from './modules/floating-actions.js'

initNav()
initGaleriaFiltro()
initFooterReveal()
initFloatingActions()

GLightbox({ selector: '.glightbox' })
