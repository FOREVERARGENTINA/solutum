# CHANGELOG — SOLUTUM

## [Unreleased] — en desarrollo

### Añadido
- Botones flotantes globales: scroll al inicio a la izquierda y WhatsApp a la derecha, con tamaño simétrico y estilos de marca.
- Navegación renderizada desde `src/js/modules/nav-render.js`, con drawer mobile y estado activo por página.
- Hoja global `src/css/app.css` enlazada desde el HTML para evitar el primer render sin estilos cuando el CSS se cargaba solo desde JS.

### Cambiado
- SEO actualizado en páginas principales: títulos, descripciones, canonical, Open Graph, Twitter Card y JSON-LD.
- `llms.txt` y `public/llms.txt` sincronizados con datos actuales de SOLUTUM: dominio definitivo, proveedor ANDA, servicios, contacto y página de servicios.
- `robots.txt`, `public/robots.txt`, `sitemap.xml` y `public/sitemap.xml` alineados al dominio canónico `https://solutum.com.uy/`; se agregó `servicios.html` al sitemap.
- Los imports de CSS salieron de los bundles JS principales para que el CSS base llegue por `<link rel="stylesheet">` en el `<head>`.

### Corregido
- Se eliminaron datos viejos de `llms.txt` como fundación 2015, "10+ años" y web "[por definir]".
- Se restauró `servicios.html` con el bundle `trabajos.js` para conservar filtros de galería y GLightbox.

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
- URL producción: https://solutum.pages.dev
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
- Primer deploy en Cloudflare Pages: https://solutum.pages.dev

---

## Pendientes
- [ ] URLs reales de redes sociales (footer usa placeholders)
- [ ] Email real de SOLUTUM (usa info@solutum.com.uy de placeholder)
- [ ] Teléfono / WhatsApp real
- [ ] Dirección exacta para el mapa de Google Maps
- [ ] Dominio personalizado en Cloudflare Pages
- [ ] **Al tener dominio: actualizar `og:image` en las 4 páginas** — actualmente apunta a `https://solutum.pages.dev/images/og-image.png`, debe cambiarse a la URL definitiva. Facebook requiere URL absoluta.
- [ ] Conectar formulario a backend (email o CRM)

## 2026-06-17 — OG image

### Añadido
- OG image global (`public/images/og-image.png`) — imagen branded 1200×628 con logo, claim y foto de obra
- `og:image` con URL absoluta en las 4 páginas (`https://solutum.pages.dev/images/og-image.png`) — Facebook requiere URL absoluta, no relativa
