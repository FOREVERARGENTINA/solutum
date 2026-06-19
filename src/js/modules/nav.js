import { renderNav } from './nav-render.js'

export function initNav() {
  renderNav()

  const nav = document.querySelector('.nav')
  if (!nav) return

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40)
  }, { passive: true })

  const hamburger = nav.querySelector('.nav__hamburger')
  const drawer = document.getElementById('nav-drawer')
  if (!hamburger || !drawer) return

  hamburger.addEventListener('click', () => {
    const open = hamburger.getAttribute('aria-expanded') === 'true'
    hamburger.setAttribute('aria-expanded', String(!open))
    drawer.classList.toggle('abierto', !open)
    document.body.style.overflow = open ? '' : 'hidden'
  })

  drawer.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      hamburger.setAttribute('aria-expanded', 'false')
      drawer.classList.remove('abierto')
      document.body.style.overflow = ''
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('abierto')) {
      hamburger.setAttribute('aria-expanded', 'false')
      drawer.classList.remove('abierto')
      document.body.style.overflow = ''
      hamburger.focus()
    }
  })
}
