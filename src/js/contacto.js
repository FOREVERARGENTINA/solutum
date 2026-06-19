import { initNav } from './modules/nav.js'
import { initForms } from './modules/forms.js'
import { initFooterReveal } from './modules/footer-reveal.js'

initNav()
initForms()
initFooterReveal()

requestIdleCallback(() => {
  import('./modules/floating-actions.js').then(m => m.initFloatingActions())
}, { timeout: 2000 })
