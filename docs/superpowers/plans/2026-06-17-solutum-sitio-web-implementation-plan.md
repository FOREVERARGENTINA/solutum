# SOLUTUM — Plan de Implementación del Sitio Web

**Fecha:** 2026-06-17
**Base:** `docs/superpowers/specs/2026-06-17-solutum-sitio-web-design.md`
**Estado:** Listo para ejecutar con aprobación
**Tipo de proyecto:** Tipo A avanzado
**Stack:** HTML multipágina + Vite + CSS nativo moderno + Vanilla ES Modules
**Hosting objetivo:** Cloudflare Pages

---

## 1. Objetivo

Construir el sitio corporativo estático de SOLUTUM con 4 páginas:

- `index.html`
- `nosotros.html`
- `trabajos.html`
- `contacto.html`

El resultado debe ser un sitio responsive, accesible, rápido, sin framework frontend, con fuentes self-hosted, galería filtrable, lightbox en trabajos, formulario visualmente validado en cliente y preparación SEO básica.

---

## 2. Decisiones Técnicas Cerradas

| Área | Decisión |
|------|----------|
| Tipo | Tipo A avanzado |
| Build | Vite multipágina |
| HTML | Semántico puro |
| CSS | CSS nativo moderno |
| JS | Vanilla ES Modules |
| Fuentes | `@fontsource/inter` + `@fontsource/space-grotesk` |
| Lightbox | `glightbox`, solo en `trabajos.html` |
| Formulario | Validación visual cliente en Fase 1, sin envío real |
| Hosting | Cloudflare Pages |
| Seguridad | `_headers` con headers y CSP básica |
| Deploy | No ejecutar sin aprobación explícita |

---

## 3. Orden de Ejecución

### Fase 0 — Preflight del Repo

1. Verificar archivos guía existentes:
   - `.editorconfig`
   - `.ai-rules`
   - `docs/agents.md`
   - `docs/guia.md`
   - `scripts/check-encoding.js`
   - `scripts/fix-encoding.js`

2. Confirmar que no exista implementación previa que pueda pisarse:
   - `package.json`
   - `index.html`
   - `src/`
   - `public/`
   - `vite.config.js`

3. Ejecutar chequeo inicial:

```bash
node scripts/check-encoding.js
```

4. No corregir encoding automáticamente salvo que el usuario lo apruebe si aparecen mojibakes.

---

### Fase 1 — Setup Técnico

Crear configuración base:

- `package.json`
- `vite.config.js`
- `.gitignore`
- `.claude.md`
- `.github/copilot-instructions.md`

Instalar solo dependencias aprobadas:

```bash
npm install @fontsource/inter @fontsource/space-grotesk glightbox zod
npm install -D vite
```

Scripts esperados:

```json
{
  "dev": "vite",
  "build": "node scripts/check-encoding.js && vite build",
  "preview": "vite preview",
  "check:encoding": "node scripts/check-encoding.js",
  "fix:encoding": "node scripts/fix-encoding.js",
  "fix:encoding:apply": "node scripts/fix-encoding.js --apply"
}
```

Validación de fase:

```bash
npm run check:encoding
npm run build
```

---

### Fase 2 — Estructura de Assets y Código

Crear estructura:

```txt
src/
├── css/
│   ├── design-system.css
│   ├── global.css
│   ├── components.css
│   └── sections/
│       ├── hero.css
│       ├── stats.css
│       ├── servicios.css
│       ├── galeria.css
│       ├── cta.css
│       ├── contacto.css
│       └── footer.css
└── js/
    ├── main.js
    ├── trabajos.js
    └── modules/
        ├── nav.js
        ├── contador.js
        ├── galeria-filtro.js
        └── forms.js
```

Crear assets públicos:

```txt
public/
├── images/
│   ├── logo/
│   ├── hero/
│   ├── trabajos/
│   │   ├── residencial/
│   │   ├── comercial/
│   │   ├── ampliaciones/
│   │   └── refacciones/
│   └── og-image.webp
└── favicon.ico
```

Inventariar y copiar logos existentes:

1. Verificar primero el contenido real de `datos/`.
2. Copiar los archivos de logo encontrados a `public/images/logo/`.
3. Mantener los nombres originales salvo que haya una razón clara para normalizarlos.

Estado verificado al escribir este plan:

- `datos/logo.png`
- `datos/logo1.png`

Regla crítica: copiar no es mover. No borrar, renombrar ni modificar los assets originales en `datos/` salvo aprobación explícita posterior.

---

### Fase 3 — Sistema Visual Base

Implementar primero el sistema compartido:

1. Variables en `design-system.css`:
   - paleta Tech Premium Dark
   - tipografías
   - spacing
   - radios
   - sombras
   - contenedores
   - breakpoints documentados

2. Base en `global.css`:
   - reset moderno
   - `box-sizing`
   - `html { scroll-behavior: smooth; }`
   - body dark
   - tipografía Inter
   - títulos Space Grotesk
   - focus visible
   - utilidades mínimas

3. Componentes en `components.css`:
   - nav
   - botones
   - cards
   - badges
   - pills de filtro
   - formularios

Validar contraste antes de avanzar con todas las páginas.

---

### Fase 4 — Layout Compartido

Implementar en las 4 páginas:

- `<html lang="es">`
- charset UTF-8
- viewport
- title y description por página
- Open Graph básico
- nav sticky
- footer
- CTA compartida donde aplique

La navegación debe marcar estado activo por página.

Validación:

- Tab navega correctamente.
- El foco es visible.
- No hay texto roto en mobile.
- No hay requests a Google Fonts.

---

### Fase 5 — Página Inicio

Construir `index.html` con:

1. Hero split:
   - texto izquierda
   - foto de obra derecha
   - badge flotante
   - CTAs "Ver trabajos" y "Nosotros"

2. Stats bar:
   - `10+ años`
   - `200+ obras`
   - `Montevideo`

3. Servicios:
   - Construcción Residencial
   - Comercial
   - Ampliaciones
   - Refacciones

4. Preview trabajos:
   - 6 fotos
   - overlays accesibles
   - link a trabajos

5. CTA contacto.

Validación:

- Hero no debe ocupar todo el viewport sin dejar pista de la siguiente sección.
- Imagen principal sin `loading="lazy"`.
- Resto de imágenes con `loading="lazy"`.

---

### Fase 6 — Página Nosotros

Construir `nosotros.html` con:

- hero interno
- breadcrumb
- historia
- foto lateral
- valores:
  - Calidad
  - Compromiso
  - Puntualidad
- CTA contacto

Validación:

- H1 único.
- Jerarquía H2/H3 correcta.
- Texto legible en mobile.

---

### Fase 7 — Página Trabajos

Construir `trabajos.html` con:

- hero interno
- filtros:
  - Todos
  - Residencial
  - Comercial
  - Ampliaciones
  - Refacciones
- grid responsive
- cards 4/3
- overlays
- GLightbox

Implementar:

- `src/js/trabajos.js`
- `src/js/modules/galeria-filtro.js`

Regla crítica:

- `glightbox` solo se importa desde `trabajos.js`.
- Las otras páginas no deben cargar ese bundle.

Validación:

- Filtrado funciona por `data-category`.
- Las cards ocultas no quedan enfocables.
- Lightbox abre y cierra con teclado.

---

### Fase 8 — Página Contacto

Construir `contacto.html` con:

- hero interno
- formulario
- info de contacto
- mapa placeholder

Campos:

- nombre
- email
- teléfono
- tipo de obra
- mensaje

Implementar validación visual cliente en `src/js/modules/forms.js`.

Regla crítica:

- En Fase 1 el formulario no envía datos reales.
- Debe prevenir submit real.
- Debe mostrar confirmación visual clara.

Texto técnico a respetar:

> Backend a conectar en Fase 2. Cuando exista backend, agregar validación server-side, rate limiting y sanitización.

---

### Fase 9 — SEO, IA y Seguridad

Crear:

- `llms.txt`
- `robots.txt`
- `sitemap.xml`
- `_headers`

`robots.txt` debe incluir:

```txt
Allow: /llms.txt
```

`llms.txt` debe incluir:

- SOLUTUM
- rubro
- servicios
- páginas clave
- creator FrandoWeb / Hernán Frandolich

`_headers` debe incluir:

- HSTS
- X-Content-Type-Options
- X-Frame-Options
- Referrer-Policy
- Permissions-Policy
- CSP básica compatible con assets locales y Google Maps placeholder

Validación:

- `llms.txt` accesible en `/llms.txt`.
- `robots.txt` no bloquea páginas principales.
- `sitemap.xml` usa dominio real si ya está definido; si no, dejar placeholder claro.

---

### Fase 10 — Sincronización de Documentación

Actualizar `docs/agents.md` para cerrar las secciones pendientes que el spec ya definió:

- Tipo de proyecto: Tipo A avanzado
- Frontend: HTML multipágina + Vite
- Estilos: CSS nativo moderno
- Backend/API: ninguno en Fase 1
- Database: ninguna
- Auth: ninguno
- Hosting: Cloudflare Pages
- Dependencias aprobadas
- Zonas rojas específicas del proyecto

No duplicar todo el spec; solo fijar decisiones que cambian comportamiento de agentes.

---

### Fase 11 — Verificación Final

Comandos:

```bash
npm run check:encoding
npm run build
npm run preview
```

Verificar manualmente:

- navegación desktop
- navegación mobile
- menú si aplica
- teclado solamente
- formulario
- filtros de trabajos
- lightbox
- contraste
- responsive
- ausencia de Google Fonts CDN
- GLightbox solo en trabajos

Checklist mínimo:

- [ ] Build exitoso.
- [ ] Encoding limpio.
- [ ] 4 páginas generadas en `dist/`.
- [ ] Sin mojibakes.
- [ ] Sin dependencias no aprobadas.
- [ ] Sin deploy ejecutado.
- [ ] Formulario no envía datos reales.
- [ ] `llms.txt`, `robots.txt`, `sitemap.xml` presentes.
- [ ] `_headers` presente.
- [ ] Lighthouse Accessibility > 95.
- [ ] LCP < 2.5s, INP < 200ms, CLS < 0.1.

---

## 4. Datos Pendientes Antes de Cierre Final

Estos datos pueden quedar como placeholder durante implementación, pero bloquean un deploy final prolijo:

- Dominio definitivo.
- Email real de SOLUTUM.
- Dirección real o zona exacta para mapa.
- Teléfono o WhatsApp comercial.
- Fotos reales de obras por categoría.
- Imagen OG final `1200x630`.
- Favicon final.

---

## 5. Zonas Rojas Durante la Implementación

Frenar y consultar antes de:

- ejecutar deploy
- conectar formulario a backend
- instalar dependencias fuera de la lista aprobada
- cambiar stack
- borrar assets originales en `datos/`
- modificar scripts de encoding existentes
- usar CDN para Google Fonts
- agregar framework frontend

---

## 6. Resultado Esperado

Al finalizar, el repo debe quedar con:

- sitio estático multipágina funcional
- Vite configurado
- diseño Tech Premium Dark aplicado
- CSS y JS modularizados
- fuentes locales self-hosted
- galería filtrable con lightbox
- formulario visual sin envío real
- SEO base completo
- `llms.txt` público
- headers Cloudflare preparados
- documentación de agentes sincronizada
- build verificado

No debe quedar deploy ejecutado desde el agente.
