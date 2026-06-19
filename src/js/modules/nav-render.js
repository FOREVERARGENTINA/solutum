const NAV_LINKS = [
  { href: '/',              label: 'Inicio' },
  { href: '/nosotros.html', label: 'Nosotros' },
  { href: '/servicios.html', label: 'Servicios' },
  { href: '/trabajos.html', label: 'Trabajos' },
  { href: '/contacto.html', label: 'Contacto', cta: true },
]

function activePath() {
  const path = window.location.pathname
  // Normaliza: /index.html → /
  return path === '/index.html' ? '/' : path
}

function renderLinks(drawer = false) {
  const current = activePath()
  return NAV_LINKS.map(({ href, label, cta }) => {
    const isActive = href === current
    const ariaCurrent = isActive ? ' aria-current="page"' : ''
    if (drawer) {
      const ctaClass = cta ? ' class="nav__drawer-cta"' : ''
      return `<a href="${href}"${ariaCurrent}${ctaClass}>${label}</a>`
    }
    const ctaClass = cta ? ' class="nav__cta"' : ''
    return `<li><a href="${href}"${ariaCurrent}${ctaClass}>${label}</a></li>`
  }).join('\n        ')
}

export function renderNav() {
  const header = document.querySelector('header.nav')
  if (!header) return

  header.innerHTML = `
    <div class="container nav__inner">
      <a href="/" class="nav__logo" aria-label="SOLUTUM — Inicio">
        <img src="/images/logo/logo3.webp" alt="SOLUTUM" width="48" height="46">
        <span>SOLUTUM</span>
      </a>
      <nav aria-label="Navegación principal">
        <ul class="nav__links">
        ${renderLinks(false)}
        </ul>
      </nav>
      <button class="nav__hamburger" aria-expanded="false" aria-controls="nav-drawer" aria-label="Abrir menú">
        <span></span><span></span><span></span>
      </button>
    </div>
  `

  // Inyectar drawer justo después del header
  const drawer = document.createElement('div')
  drawer.className = 'nav__drawer'
  drawer.id = 'nav-drawer'
  drawer.setAttribute('role', 'dialog')
  drawer.setAttribute('aria-label', 'Menú de navegación')
  drawer.innerHTML = renderLinks(true)
  header.insertAdjacentElement('afterend', drawer)
}
