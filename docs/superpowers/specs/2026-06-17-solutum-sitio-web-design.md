# SOLUTUM — Diseño del Sitio Web
**Fecha:** 2026-06-17
**Estado:** Aprobado por usuario
**Tipo de proyecto:** Tipo A avanzado — Sitio corporativo estático
**Creator:** FrandoWeb / Hernán Frandolich

---

## 1. Contexto del negocio

**Empresa:** SOLUTUM
**Rubro:** Construcción — residencial, comercial, ampliaciones y refacciones
**Ubicación:** Montevideo, Uruguay
**Trayectoria:** 10 años en el mercado (desde aprox. 2015)
**Audiencia objetivo:** Clientes residenciales y corporativos en Uruguay
**Dominio:** Por definir
**Slogan propuesto:** *"Construimos lo que imaginás."*

---

## 2. Dirección visual — Tech Premium Dark

Estilo aprobado: **C — Tech Premium Dark**

Fondo azul-gris oscuro que evoca planos de arquitectura y construcción nocturna. Ninguna constructora local usa este estilo — es el diferenciador clave. Naranja eléctrico como acento dominante (CTA, énfasis), verde del logo como color de confianza y badges.

### Paleta de colores

| Rol | Hex |
|-----|-----|
| Fondo principal | `#1C2B3A` |
| Fondo secundario | `#162233` |
| Fondo profundo | `#0D1B27` |
| Naranja eléctrico (CTA, acento) | `#FF5F00` |
| Naranja hover/gradiente | `#FF8C42` |
| Verde logo claro (badges, confianza) | `#6BC28B` |
| Verde logo oscuro (íconos, detalles) | `#028F46` |
| Texto principal | `#FFFFFF` |
| Texto secundario | `#8BA5BC` |
| Bordes sutiles | `#2A3D52` |

### Tipografía

- **Títulos:** Space Grotesk (700, 800) — geométrica, industrial
- **Cuerpo:** Inter (400, 500) — limpia, legible
- **Implementación:** `@fontsource/space-grotesk` + `@fontsource/inter` (self-hosted, sin Google Fonts CDN)
- `font-display: swap` obligatorio

### Layout homepage aprobado: B — Hero Split + Scroll horizontal

Hero dividido: texto izquierda + foto de obra derecha con badge flotante. Servicios en carrusel horizontal deslizable. Mini galería masonry integrada.

---

## 3. Estructura del sitio — 4 páginas

### 3.1 Inicio (`index.html`)

| Sección | Descripción |
|---------|-------------|
| **Nav** | Logo izq · links centro · botón "Contacto" naranja der. Sticky con `backdrop-filter: blur(12px)` + clase `.scrolled` al hacer scroll |
| **Hero split** | 50/50: texto izq con título grande (Space Grotesk 800) + slogan + 2 CTAs ("Ver trabajos" naranja, "Nosotros" outline) · Foto de obra derecha con badge flotante naranja. Línea vertical naranja como separador visual |
| **Stats bar** | 3 números en naranja: `10+ años` · `200+ obras` · `Montevideo`. Fondo `#162233`, separadores verticales sutiles |
| **Servicios** | Grid 2x2 en mobile, carrusel en desktop. 4 cards: Construcción Residencial · Comercial · Ampliaciones · Refacciones. Borde superior `#FF5F00`, ícono en `#028F46`, hover con fondo naranja suave |
| **Preview trabajos** | Grid 3 columnas, 6 fotos highlight. Hover overlay con categoría en `#6BC28B` y título breve. Botón "Ver todos los trabajos" |
| **CTA contacto** | Banda con fondo `#162233`, borde superior sutil naranja, texto + botón naranja |
| **Footer** | Logo · links internos · "Montevideo, Uruguay" · email (a completar) · crédito FrandoWeb |

### 3.2 Nosotros (`nosotros.html`)

| Sección | Descripción |
|---------|-------------|
| **Hero página** | Fondo `#0D1B27`, título "Quiénes somos" + breadcrumb Home > Nosotros |
| **Historia** | Split: texto izq + foto der. Línea naranja izq como accent |
| **Valores** | 3 columnas: Calidad · Compromiso · Puntualidad. Ícono SVG en verde, descripción breve |
| **CTA** | Mismo bloque que inicio |

**Contenido historia:**
> *"SOLUTUM nació en 2015 en Montevideo con una idea simple: hacer bien las cosas. En más de 10 años construimos y reformamos cientos de espacios en todo Uruguay — desde casas familiares hasta locales comerciales e industrias. Trabajamos con materiales de primera, plazos reales y un equipo que se involucra en cada proyecto como si fuera propio."*

**Valores:**
- **Calidad:** Usamos materiales de primera y procesos probados en cada obra, sin importar el tamaño del proyecto.
- **Compromiso:** Cumplimos los plazos y mantenemos al cliente informado en cada etapa del trabajo.
- **Puntualidad:** Respetamos los tiempos acordados porque sabemos que detrás de cada obra hay una vida esperando.

### 3.3 Nuestros Trabajos (`trabajos.html`)

| Elemento | Descripción |
|----------|-------------|
| **Hero página** | Igual que Nosotros |
| **Filtros** | Pills horizontales: Todos · Residencial · Comercial · Ampliaciones · Refacciones. Activo: fondo `#FF5F00`, texto blanco |
| **Grid filtrable** | 3 col desktop / 2 col tablet / 1 col mobile. Filtrado con JS vanilla puro (`data-category` + `display:none` + transición opacity). Sin librerías de filtrado |
| **Cards** | Foto con aspect-ratio 4/3. Hover: overlay `rgba(13,27,39,0.85)` + categoría en `#6BC28B` + título blanco |
| **Lightbox** | GLightbox — única dependencia JS externa permitida |

**Categorías de fotos:**
- Residencial
- Comercial
- Ampliaciones
- Refacciones

### 3.4 Contacto (`contacto.html`)

| Elemento | Descripción |
|----------|-------------|
| **Hero página** | Igual estructura que las otras páginas internas |
| **Layout** | 60/40: formulario izq · info + mapa der |
| **Formulario** | Nombre · Email · Teléfono · Tipo de obra (select) · Mensaje · Botón "Enviar consulta". Validación manual en cliente (JS vanilla). **En Fase 1 el formulario no envía datos reales** — muestra mensaje de confirmación visual. Cuando se conecte backend (Fase 2), debe implementarse: validación server-side, rate limiting y sanitización DOMPurify según `guia.md` sección Seguridad |
| **Info** | Dirección Montevideo (a completar) · Email · Horario de atención |
| **Mapa** | Iframe Google Maps placeholder hasta tener dirección |

**Campos del select "Tipo de obra":**
- Construcción nueva
- Ampliación
- Refacción
- Consulta general

---

## 4. Animaciones y efectos

| Efecto | Implementación | Prioridad |
|--------|---------------|-----------|
| Scroll reveal secciones | CSS Scroll-driven Animations nativas (`animation-timeline: view()`) | Alta |
| Nav blur al scrollear | `backdrop-filter: blur(12px)` + JS mínimo clase `.scrolled` | Alta |
| Hover galería | CSS puro `transform scale(1.03)` + overlay | Alta |
| Float badge hero | CSS `@keyframes float` con `translateY` suave | Media |
| Contador stats | IntersectionObserver + JS vanilla (< 40 líneas) | Media |
| Filtro galería | CSS `opacity` + `transform` en transición, JS toggle clase | Alta |
| Carrusel servicios | Scroll nativo con `scroll-snap` CSS — sin librería | Alta |

**Principio:** Todo lo que CSS nativo puede hacer, CSS lo hace. JS solo para lo que requiere lógica (contador, filtro, nav clase).

---

## 5. Stack técnico

| Capa | Decisión | Notas |
|------|----------|-------|
| **Tipo proyecto** | Tipo A avanzado — HTML multipágina con build moderno | 4 páginas estáticas. Supera Tipo A simple por el build tooling, pero no necesita framework (sin React, sin Astro, sin Next.js) |
| **HTML** | Semántico puro, multipágina | `index.html`, `nosotros.html`, `trabajos.html`, `contacto.html`. `<header>`, `<main>`, `<nav>`, `<footer>`, `<section>` |
| **Build tool** | Vite | Resuelve `@fontsource`, `zod` y `glightbox` como npm packages sin CDN externo. Output: carpeta `dist/` con assets optimizados y hasheados. Configuración mínima con `vite.config.js` multipágina |
| **CSS** | CSS nativo moderno | Variables, nesting, container queries, scroll-driven animations. Sin Tailwind — el diseño pide sistema visual propio |
| **JavaScript** | Vanilla ES Modules | Sin jQuery, sin frameworks. Módulos con `import/export` nativos, Vite los empaqueta |
| **Fuentes** | `@fontsource/space-grotesk` + `@fontsource/inter` | Instaladas via npm, importadas en `main.js`. Self-hosted automático, sin requests a Google |
| **Galería lightbox** | `glightbox` npm | Importado solo en `trabajos.html` / su JS entry point. No se carga en otras páginas |
| **Validación form** | `zod` cliente (Fase 1 visual) | Importado via npm. En Fase 1: validación visual sin envío real. En Fase 2 (backend): validación isomórfica server-side + rate limit + DOMPurify |
| **Imágenes** | WebP preferido, JPEG fallback | `loading="lazy"` en todas excepto hero. Vite optimiza assets referenciados en HTML |
| **Hosting** | Cloudflare Pages | Deploy manual aprobado — nunca automático por agente. Output de `vite build` → carpeta `dist/` |

---

## 6. Estructura de archivos

```
SOLUTUM/
├── index.html                    ← Entry point Vite (página inicio)
├── nosotros.html                 ← Entry point Vite
├── trabajos.html                 ← Entry point Vite
├── contacto.html                 ← Entry point Vite
├── vite.config.js                ← Config multipágina
├── llms.txt                      ← Archivo público (estándar llmstxt.org)
├── robots.txt
├── sitemap.xml
├── _headers                      ← Headers seguridad para Cloudflare Pages
├── package.json
├── .editorconfig                 ← Ya existe
├── .ai-rules                     ← Ya existe
├── src/
│   ├── css/
│   │   ├── design-system.css     ← Variables globales (colores, tipografía, espaciado)
│   │   ├── global.css            ← Reset, base, utilidades, @font-face
│   │   ├── components.css        ← Nav, botones, cards, badges
│   │   └── sections/
│   │       ├── hero.css
│   │       ├── stats.css
│   │       ├── servicios.css
│   │       ├── galeria.css
│   │       ├── cta.css
│   │       ├── contacto.css
│   │       └── footer.css
│   └── js/
│       ├── main.js               ← Entry JS compartido (nav, stats, fonts import)
│       ├── trabajos.js           ← Entry JS solo para trabajos.html (glightbox + filtro)
│       └── modules/
│           ├── nav.js            ← Sticky + blur
│           ├── contador.js       ← Animación stats con IntersectionObserver
│           ├── galeria-filtro.js ← Filtrado por categoría
│           └── forms.js          ← Validación Zod cliente
├── public/                       ← Assets estáticos que Vite copia sin procesar
│   ├── images/
│   │   ├── logo/
│   │   │   ├── logo.png          ← Ya existe (mover desde datos/)
│   │   │   └── logo1.png         ← Ya existe (mover desde datos/)
│   │   ├── hero/
│   │   ├── trabajos/
│   │   │   ├── residencial/
│   │   │   ├── comercial/
│   │   │   ├── ampliaciones/
│   │   │   └── refacciones/
│   │   └── og-image.webp         ← 1200x630px para redes
│   └── favicon.ico
├── dist/                         ← Output de `vite build` — deployable, en .gitignore
├── datos/                        ← Ya existe, mover logos a public/images/logo/
├── docs/
│   ├── agents.md                 ← Ya existe
│   ├── guia.md                   ← Ya existe
│   └── superpowers/
│       └── specs/
│           └── 2026-06-17-solutum-sitio-web-design.md
└── scripts/
    ├── check-encoding.js         ← Ya existe
    ├── fix-encoding.js           ← Ya existe
    └── README.md                 ← Ya existe
```

### vite.config.js (multipágina)

```js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nosotros: resolve(__dirname, 'nosotros.html'),
        trabajos: resolve(__dirname, 'trabajos.html'),
        contacto: resolve(__dirname, 'contacto.html'),
      },
    },
  },
})
```

**Nota sobre entries JS:** `trabajos.html` referencia `src/js/trabajos.js` (que importa glightbox y el filtro). Las demás páginas referencian `src/js/main.js`. Vite genera bundles separados — glightbox no se carga en páginas que no lo necesitan.

---

## 7. Infraestructura y configuración

### package.json

```json
{
  "name": "solutum-web",
  "version": "1.0.0",
  "type": "module",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "node scripts/check-encoding.js && vite build",
    "preview": "vite preview",
    "check:encoding": "node scripts/check-encoding.js",
    "fix:encoding": "node scripts/fix-encoding.js",
    "fix:encoding:apply": "node scripts/fix-encoding.js --apply"
  },
  "dependencies": {
    "@fontsource/inter": "^5.x",
    "@fontsource/space-grotesk": "^5.x",
    "glightbox": "^3.x",
    "zod": "^3.x"
  },
  "devDependencies": {
    "vite": "^6.x"
  }
}
```

**Nota:** `prebuild` se reemplaza por el check inline en el script `build` (`node scripts/check-encoding.js && vite build`) para que falle explícitamente antes de invocar Vite si hay mojibakes.

### Archivos a crear en setup
- `.claude.md` — guía para Claude Code (ver INSTRUCCIONES.MD)
- `.github/copilot-instructions.md` — guía para Copilot
- `llms.txt` — estándar llmstxt.org con datos de SOLUTUM y creator FrandoWeb
- `robots.txt` — `Allow: /llms.txt` incluido
- `sitemap.xml` — 4 páginas

### Headers de seguridad

Hosting definitivo: **Cloudflare Pages**. Se genera únicamente `_headers`.

**Cloudflare Pages — `_headers`:**
```
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
  Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; frame-src https://www.google.com/maps/;
```

**Nota CSP:** `unsafe-inline` en `style-src` es necesario por los estilos inline de GLightbox. GLightbox se instala vía npm y Vite lo empaqueta — no hay CDN externo, por lo que `script-src` queda como `'self'` únicamente.

---

## 8. SEO y metadatos

### Por página

| Página | Title | Description |
|--------|-------|-------------|
| Inicio | `SOLUTUM — Construcción en Montevideo` | `Empresa de construcción en Montevideo con más de 10 años de experiencia. Obras residenciales, comerciales, ampliaciones y refacciones en Uruguay.` |
| Nosotros | `Quiénes Somos — SOLUTUM` | `Conocé el equipo de SOLUTUM, empresa constructora con más de 10 años de trayectoria en Montevideo, Uruguay.` |
| Trabajos | `Nuestros Trabajos — SOLUTUM` | `Galería de obras realizadas por SOLUTUM en Uruguay: residencial, comercial, ampliaciones y refacciones.` |
| Contacto | `Contacto — SOLUTUM` | `Contactá a SOLUTUM para tu próxima obra en Uruguay. Construcción residencial y comercial en Montevideo.` |

### Open Graph
- `og:image`: `og-image.webp` (1200×630px, < 200KB)
- `lang="es"` en `<html>`

### JSON-LD (index.html)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "SOLUTUM",
  "description": "Empresa de construcción en Montevideo, Uruguay",
  "address": { "@type": "PostalAddress", "addressLocality": "Montevideo", "addressCountry": "UY" }
}
```

---

## 9. llms.txt vs llms.md

**Decisión:** `llms.txt` es el archivo público que va en la raíz y se sirve como `/llms.txt` según el estándar `llmstxt.org`. `llms.md` que ya existe en el repo es el **borrador/plantilla** de FrandoWeb y se deja en su lugar como referencia de estructura — no se elimina ni se renombra. En implementación se crea `llms.txt` con datos reales de SOLUTUM basándose en esa plantilla.

## 9.1 llms.txt (contenido base)

```
SOLUTUM

Empresa de construcción en Montevideo, Uruguay.

# About

SOLUTUM es una empresa constructora uruguaya con más de 10 años de experiencia
en obras residenciales, comerciales, ampliaciones y refacciones en todo Uruguay.
Fundada en 2015 en Montevideo, trabaja con materiales de primera calidad y
equipos comprometidos con cada proyecto.

# Creator

Sitio web desarrollado por FrandoWeb.
- Responsable: Hernán Frandolich
- Especialidad: Diseño web, desarrollo full-stack, SEO y estrategia digital
- Web: https://www.frandoweb.com.ar
- Email: info@frandoweb.com.ar
- WhatsApp: +54 9 11 2807-4000
- Ubicación: Buenos Aires, Argentina

# Contact

- Nombre: SOLUTUM
- Ubicación: Montevideo, Uruguay
- Web: [por definir]
- Email: [por definir]

# Services

- Construcción residencial: casas y apartamentos nuevos
- Construcción comercial: locales, oficinas e industrias
- Ampliaciones: ampliación de espacios existentes
- Refacciones: reforma y renovación de interiores y exteriores

# Key Pages

- /index.html — Inicio
- /nosotros.html — Quiénes somos
- /trabajos.html — Galería de obras
- /contacto.html — Contacto

# Target Audience

Propietarios, empresas y desarrolladores en Uruguay que buscan una constructora
confiable, con trayectoria comprobada y equipo propio.

# Unique Value Proposition

- 10+ años de experiencia en el mercado uruguayo
- Obras propias documentadas en galería real
- Atención personalizada desde el presupuesto hasta la entrega

# Tech Stack

HTML semántico, CSS moderno nativo, JavaScript vanilla, GLightbox, @fontsource.
Hosting: Netlify / Cloudflare Pages.
```

---

## 10. Checklist pre-deploy

### Crítico (bloquea deploy)
- [ ] UTF-8 sin mojibakes (`npm run check:encoding`)
- [ ] Alt textos descriptivos en todas las imágenes de obras
- [ ] Contraste 4.5:1 verificado (naranja sobre oscuro ✓, texto sobre fondo ✓)
- [ ] Navegación por teclado funcional
- [ ] Formulario valida en cliente antes de enviar
- [ ] `lang="es"` en `<html>`
- [ ] Meta viewport en todas las páginas
- [ ] Mobile first — probado en dispositivo real
- [ ] LCP < 2.5s, INP < 200ms, CLS < 0.1
- [ ] Headers de seguridad configurados (HSTS, X-Frame-Options)
- [ ] Lighthouse Accessibility > 95

### Importante
- [ ] `sitemap.xml` generado con las 4 URLs
- [ ] `robots.txt` con `Allow: /llms.txt`
- [ ] `llms.txt` completo con datos reales
- [ ] OG image subida (1200×630px)
- [ ] JSON-LD válido en index.html
- [ ] GLightbox cargado en `trabajos.html` únicamente (no en todas las páginas)
- [ ] Fuentes WOFF2 locales funcionando (sin requests externos a Google)
- [ ] `_headers` con headers de seguridad y CSP (Cloudflare Pages)
- [ ] CSP validada con securityheaders.com antes de deploy

---

## 11. Restricciones del proyecto (Zonas Rojas)

- **No ejecutar deploys** sin aprobación explícita del usuario
- **No conectar formulario** a backend sin confirmación (se conecta en fase posterior)
- **Dependencias aprobadas** (no requieren consulta): `vite`, `@fontsource/inter`, `@fontsource/space-grotesk`, `glightbox`, `zod`. Cualquier otra dependencia requiere aprobación explícita
- **No instalar** React, Vue, Astro, Next.js, Tailwind, jQuery ni ningún framework sin aprobación
- **No modificar** los scripts de encoding existentes
- **UTF-8 estricto** — nunca convertir á/é/í/ó/ú/ñ a entidades HTML

---

*Spec generado en sesión de brainstorming el 2026-06-17.*
*Aprobado por el usuario iterativamente durante el proceso.*
