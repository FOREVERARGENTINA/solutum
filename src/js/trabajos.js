import '@fontsource/space-grotesk/400.css'
import '@fontsource/space-grotesk/700.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'

import '../css/global.css'
import '../css/components.css'
import '../css/sections/hero.css'
import '../css/sections/stats.css'
import '../css/sections/servicios.css'
import '../css/sections/galeria.css'
import '../css/sections/cta.css'
import '../css/sections/footer.css'
import '../css/sections/contacto.css'

import GLightbox from 'glightbox'
import 'glightbox/dist/css/glightbox.min.css'

import { initNav } from './modules/nav.js'
import { initGaleriaFiltro } from './modules/galeria-filtro.js'
import { initFooterReveal } from './modules/footer-reveal.js'

initNav()
initGaleriaFiltro()
initFooterReveal()

GLightbox({ selector: '.glightbox' })
