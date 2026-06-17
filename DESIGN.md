---
name: "SOLUTUM"
description: "Sitio corporativo de construcción con estética gris carbón, obra real y acentos naranja/verde."
colors:
  coal-bg: "#171717"
  coal-surface: "#202020"
  coal-deep: "#101010"
  construction-orange: "#FF5F00"
  construction-orange-hover: "#FF8C42"
  trust-green: "#6BC28B"
  trust-green-deep: "#028F46"
  ink-white: "#FFFFFF"
  muted-gray: "#B8B8B8"
  steel-border: "#343434"
typography:
  display:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "0"
  headline:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 5vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "0"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "16px"
  full: "9999px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  section: "5rem"
components:
  button-primary:
    backgroundColor: "{colors.construction-orange}"
    textColor: "{colors.ink-white}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.5rem"
  button-outline:
    backgroundColor: "{colors.coal-bg}"
    textColor: "{colors.ink-white}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.5rem"
  card:
    backgroundColor: "{colors.coal-surface}"
    textColor: "{colors.ink-white}"
    rounded: "{rounded.md}"
    padding: "1.25rem"
  input:
    backgroundColor: "{colors.coal-deep}"
    textColor: "{colors.ink-white}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1rem"
  filter-pill-active:
    backgroundColor: "{colors.construction-orange}"
    textColor: "{colors.ink-white}"
    rounded: "{rounded.full}"
    padding: "0.5rem 1rem"
---

# Design System: SOLUTUM

## 1. Overview

**Creative North Star: "Carbón de Obra"**

SOLUTUM usa una base gris carbón para comunicar estructura, obra y peso material. El sistema no debe leerse azul ni tecnológico por defecto. La personalidad visual nace del contraste entre superficies grises oscuras, fotografías reales de obra, naranja eléctrico para acción y verde para confianza.

El sitio pertenece al registro brand: la impresión visual es parte del producto. La composición debe sentirse premium y sobria, con suficiente tensión gráfica para diferenciarse, pero siempre al servicio de confianza, trayectoria y claridad comercial.

**Key Characteristics:**

- Superficies gris carbón, neutras y sólidas.
- Acentos naranjas escasos pero decididos para CTAs, líneas y números.
- Verde usado como señal de confianza, categoría o validación, nunca como color dominante.
- Fotos reales de obra como evidencia central.
- Layouts limpios, con aire, bordes contenidos y radios discretos.

## 2. Colors

La paleta es gris carbón con acentos de obra: naranja para decisión, verde para confianza y blancos/grises para legibilidad.

### Primary

- **Naranja Obra**: color primario de acción. Usar en botones principales, números destacados, líneas activas y estados hover importantes.
- **Naranja Calor**: variante hover y pequeños gradientes lineales donde se necesite energía controlada.

### Secondary

- **Verde Confianza**: usar en badges, categorías de trabajos, pequeños iconos y señales positivas.
- **Verde Profundo**: usar como detalle gráfico o iconográfico, no como gran superficie.

### Neutral

- **Gris Carbón**: fondo principal del sitio.
- **Gris Superficie**: bandas, cards, stats bar y bloques de CTA.
- **Negro Obra**: hero interno, formularios y zonas profundas.
- **Blanco Tiza**: texto principal.
- **Gris Hormigón Claro**: texto secundario y descripciones.
- **Borde Acero**: separadores, bordes de cards e inputs.

### Named Rules

**The No Blue Base Rule.** Ningún fondo, overlay, borde ni texto secundario debe volver a la familia azulada anterior. Si una superficie parece azul petróleo, está mal.

**The Accent Rarity Rule.** Naranja y verde ganan fuerza porque aparecen poco. No cubrir secciones enteras con acentos.

## 3. Typography

**Display Font:** Space Grotesk, con fallback system-ui.
**Body Font:** Inter, con fallback system-ui.
**Label/Mono Font:** No hay mono. No introducir mono como atajo técnico.

**Character:** La tipografía combina una voz geométrica e industrial en títulos con lectura limpia en cuerpo. Space Grotesk ya forma parte de la identidad actual, pero debe usarse con peso y escala controlados.

### Hierarchy

- **Display** (700, `clamp(2.25rem, 5.5vw, 3.75rem)`, 1.05): H1 de hero y mensajes principales.
- **Headline** (700, `clamp(1.875rem, 5vw, 3rem)`, 1.15): títulos de páginas internas y secciones.
- **Title** (700, `1.125rem` a `1.5rem`, 1.2): cards, valores y encabezados secundarios.
- **Body** (400, `1rem`, 1.6): párrafos, descripciones y contenido informativo. Mantener líneas entre 65 y 75 caracteres cuando sea posible.
- **Label** (700, `0.75rem`, `0.08em`, uppercase breve): badges, categorías y etiquetas cortas.

### Named Rules

**The Construction Clarity Rule.** El texto debe ser legible antes que vistoso. No usar tracking negativo ni tamaños hero dentro de cards o formularios.

## 4. Elevation

El sistema usa profundidad híbrida: superficies planas por defecto, bordes sutiles para estructura y sombras oscuras solo en hover, badges flotantes o elementos destacados. La profundidad debe sentirse física, no como glassmorphism.

### Shadow Vocabulary

- **Sombra Baja** (`0 1px 3px rgba(0,0,0,0.3)`): detalles menores.
- **Sombra Media** (`0 4px 16px rgba(0,0,0,0.4)`): componentes elevados moderados.
- **Sombra Alta** (`0 8px 32px rgba(0,0,0,0.5)`): cards en hover, badges flotantes y capas de alto énfasis.
- **Sombra Naranja** (`0 4px 24px rgba(255,95,0,0.25)`): CTA primario en hover.

### Named Rules

**The Flat At Rest Rule.** Cards, formularios y bandas quedan planas en reposo. La elevación aparece como respuesta a interacción o énfasis.

## 5. Components

### Buttons

- **Shape:** rectángulo firme con radio discreto (4px).
- **Primary:** fondo Naranja Obra, texto blanco, peso 700, padding cómodo.
- **Hover / Focus:** hover con Naranja Calor y sombra naranja. Focus visible con outline naranja.
- **Outline:** fondo transparente, borde blanco sutil y texto blanco. En hover pasa a borde/texto naranja.

### Chips

- **Style:** pills de filtro con borde Borde Acero, texto Gris Hormigón Claro y fondo transparente.
- **State:** activo con fondo Naranja Obra y texto blanco. El estado activo también debe ser claro por contraste y peso, no solo por color.

### Cards / Containers

- **Corner Style:** radio contenido (8px).
- **Background:** Gris Superficie para cards, Negro Obra para formularios y héroes internos.
- **Shadow Strategy:** sin sombra fuerte en reposo; sombra alta solo en hover o énfasis.
- **Border:** Borde Acero como límite principal.
- **Internal Padding:** base de 1.25rem para cards compactas, más en secciones.

### Inputs / Fields

- **Style:** fondo Negro Obra, borde Borde Acero, radio 4px, texto blanco.
- **Focus:** borde naranja y outline visible.
- **Error / Disabled:** errores cerca del campo, texto claro y sin depender solo del color.

### Navigation

La navegación es fija, oscura y sobria. Al hacer scroll usa fondo gris carbón con blur, borde inferior sutil y botón de contacto naranja. El logo tipográfico debe mantener contraste sobre el fondo gris, sin rellenos azules.

### Gallery Cards

Las cards de trabajos priorizan foto real. El overlay debe ser negro/gris carbón translúcido, no azul, con categoría verde y título blanco.

## 6. Do's and Don'ts

### Do:

- **Do** usar `#171717`, `#202020` y `#101010` como base gris carbón.
- **Do** reservar `#FF5F00` para CTAs, números, estados activos y acentos de alta intención.
- **Do** usar fotografías reales de obra como evidencia visual principal.
- **Do** mantener radios de cards en 8px o menos salvo pills.
- **Do** verificar contraste después de cualquier cambio de color.
- **Do** respetar `prefers-reduced-motion` para carrusel, reveals y badges.

### Don't:

- **Don't** usar paletas azuladas como color secundario o base visual.
- **Don't** usar look de startup tecnológica con fondos azul petróleo, violeta o degradados SaaS.
- **Don't** usar beige, crema, arena o estética inmobiliaria genérica.
- **Don't** usar glassmorphism decorativo, brillos excesivos o tarjetas flotantes blandas.
- **Don't** reemplazar obra real por stock genérico, iconos de casco o ilustraciones decorativas.
- **Don't** redondear cards, inputs o secciones por encima de 16px.
- **Don't** introducir fuentes mono, serif editorial o estilos ajenos a la marca sin una razón explícita.
