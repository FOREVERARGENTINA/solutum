# GitHub Copilot Instructions — SOLUTUM

Lee `docs/agents.md` para decisiones específicas de este proyecto.
Lee `docs/guia.md` para principios generales de desarrollo web.

**Jerarquía:** agents.md > guia.md > sugerencias por defecto

## Stack del proyecto

- HTML multipágina + Vite (build multipágina con rollupOptions.input)
- CSS nativo moderno — sin Tailwind
- Vanilla ES Modules — sin frameworks
- @fontsource/inter + @fontsource/space-grotesk (self-hosted)
- glightbox solo en trabajos.js
- zod para validación de formulario cliente
- Cloudflare Pages como hosting

## Reglas principales

- Siempre mobile-first
- Accesibilidad obligatoria (alt descriptivos, contraste 4.5:1)
- Self-hosted fonts — NO Google Fonts CDN
- CSS moderno nativo (nesting, container queries, :has())
- INP < 200ms (event delegation, debouncing)
- UTF-8 estricto — no usar entidades HTML para caracteres españoles

## No sugerir

- React, Vue, Astro, Next.js, Tailwind, jQuery
- CDN para fuentes o librerías
- Deploy automático
- Backend para el formulario (Fase 1 es solo visual)
