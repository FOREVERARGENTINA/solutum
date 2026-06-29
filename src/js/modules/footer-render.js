const CHEVRON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>`

const NAV_LINKS = [
  { href: '/',               label: 'Inicio' },
  { href: '/nosotros.html',  label: 'Nosotros' },
  { href: '/servicios.html', label: 'Servicios' },
  { href: '/trabajos.html',  label: 'Trabajos' },
  { href: '/contacto.html',  label: 'Contacto' },
]

export function renderFooter() {
  const footer = document.querySelector('footer.footer')
  if (!footer) return

  const navItems = NAV_LINKS.map(({ href, label }) => `
    <li>${CHEVRON}<a href="${href}">${label}</a></li>`).join('')

  footer.innerHTML = `
    <div class="container">
      <div class="footer__grid">

        <!-- Marca -->
        <div>
          <div class="footer__marca">
            <img src="/images/logo/logo3.webp" alt="SOLUTUM" width="100" height="95">
            <p class="footer__desc">Centro de Mantenimiento Programado. Proveedor oficial de ANDA en Montevideo y área metropolitana.</p>
            <div class="footer__social">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="https://wa.me/59896793203" target="_blank" rel="noopener" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Navegación -->
        <div>
          <p class="footer__titulo">Navegación</p>
          <ul class="footer__links">${navItems}</ul>
        </div>

        <!-- Contacto -->
        <div>
          <p class="footer__titulo">Contacto</p>
          <ul class="footer__links">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <a href="mailto:info@solutum.com.uy">info@solutum.com.uy</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Montevideo, Uruguay</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>Lun–Vie 9:00 a 18:00</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
              <a href="https://wa.me/59896793203">+598 96 793 203</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
              <a href="https://wa.me/59893838257">+598 093 838 257</a>
            </li>
          </ul>
        </div>

      </div>
      <div class="footer__bottom">
        <span>&copy; 2026 SOLUTUM S.A. Todos los derechos reservados.</span>
        <span>Sitio web por <a href="https://frandoweb.com" target="_blank" rel="noopener">FrandoWeb</a></span>
      </div>
    </div>
  `
}
