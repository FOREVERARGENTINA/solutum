# CHANGELOG — SOLUTUM

## [Unreleased] — en desarrollo

---

## 2026-06-17 — Footer moderno + deploy CLI

### Añadido
- **Footer reveal**: efecto de footer fijo al fondo que se revela al scrollear (solo desktop). Módulo `src/js/modules/footer-reveal.js`
- **Footer rediseñado**: gradiente oscuro, línea naranja decorativa en el top, íconos SVG en contacto (email, ubicación, horario), chevrons en navegación, botones sociales circulares (Instagram, Facebook, WhatsApp), títulos de columna con separador naranja
- **Logo en footer**: 100px, vertical (logo arriba, descripción abajo)
- **Script `npm run deploy`** en `package.json`: hace build + `wrangler pages deploy dist --project-name=soltum` en un solo comando

### Cambiado
- Footer pasó de layout horizontal (logo + texto lado a lado) a columna vertical en la sección de marca

### Deploy
- URL producción: https://soltum.pages.dev
- Plataforma: Cloudflare Pages vía Wrangler CLI

---

## 2026-06-17 — Sitio completo v1.0

### Añadido
- 4 páginas HTML: `index.html`, `nosotros.html`, `trabajos.html`, `contacto.html`
- Sistema de diseño CSS con variables (paleta Tech Premium Dark, tipografía Space Grotesk + Inter)
- Hero carrusel automático (4 fotos, intervalo 2s, pausa en hover)
- Galería con filtros por categoría (Residencial / Comercial / Ampliaciones / Refacciones) + GLightbox
- Formulario de contacto con validación Zod (cliente, sin backend)
- Nav tipográfico: SVG triángulo naranja + "SOLUTUM" (reemplaza logo.webp inapropiado para fondo oscuro)
- 30 fotos reales WebP en `public/images/trabajos/` (renombradas semánticamente)
- 4 fotos hero WebP en `public/images/hero/`
- SEO: robots.txt, sitemap.xml, llms.txt, favicons (favicomatic), meta OG
- Seguridad: `_headers` con HSTS, CSP, X-Frame-Options, Permissions-Policy
- Primer deploy en Cloudflare Pages: https://soltum.pages.dev

---

## Pendientes
- [ ] URLs reales de redes sociales (footer usa placeholders)
- [ ] Email real de SOLUTUM (usa info@solutum.com.uy de placeholder)
- [ ] Teléfono / WhatsApp real
- [ ] Dirección exacta para el mapa de Google Maps
- [ ] OG image real (`/images/og-image.webp`)
- [ ] Dominio personalizado en Cloudflare Pages
- [ ] Conectar formulario a backend (email o CRM)
