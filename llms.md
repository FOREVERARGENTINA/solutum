# Prompt: Crear `llms.txt` profesional para un sitio web

Crea un archivo `llms.txt` en la **raíz del proyecto** siguiendo el estándar de `https://llmstxt.org/`.

El archivo debe estar escrito para que LLMs modernos como ChatGPT, Claude y Perplexity entiendan con precisión:

- qué es el sitio o negocio
- qué ofrece
- a quién está dirigido
- cómo contactarlo
- quién creó o desarrolló el sitio

## Objetivo

Generar un `llms.txt` **claro, completo, actualizado, breve y útil para IA**, usando únicamente información real y existente dentro del proyecto o en el sitio actual.

## Instrucciones clave

1. El protagonista del archivo debe ser **el negocio, marca o institución dueña del sitio**.
2. Si corresponde, agrega una sección `# Creator` para indicar **el estudio, agencia o profesional que diseñó/desarrolló el sitio**.
3. No inventes páginas, servicios, precios, redes, ubicaciones ni datos de contacto.
4. Incluye **solo URLs públicas que existan actualmente**.
5. Si el proyecto sirve archivos públicos desde una carpeta como `public/`, crea también una copia en esa ubicación para que el archivo quede accesible como `/llms.txt`.
6. Revisa `robots.txt` y asegúrate de que incluya:
   - `User-agent: *`
   - `Allow: /llms.txt`
7. Mantén el archivo entre **2 KB y 5 KB** aproximadamente.
8. Usa lenguaje profesional, natural y fácil de interpretar por humanos y modelos.
9. Usa Markdown simple: títulos con `#`, listas con `-`, texto claro y escaneable.
10. Si falta información sensible o no verificable, omítela en lugar de inventarla.

## Estructura requerida

```txt
[NOMBRE DEL NEGOCIO / INSTITUCIÓN / PROYECTO]

[Descripción breve de una línea]

# About

[Qué es, qué hace, para quién y cuál es su diferencial principal]

# Creator

[Quién creó el sitio: persona, estudio o agencia]
- Nombre
- Rol
- Empresa o marca
- Web
- Email
- WhatsApp o teléfono
- Ubicación

# Contact

[Datos reales del negocio o institución]
- Nombre
- Teléfono / WhatsApp
- Email
- Ubicación
- Web
- Redes sociales
- Horarios de atención

# Services / Products

[Lista real de servicios, productos o funciones del sitio]
- Nombre
- Descripción
- Duración o modalidad, si aplica
- URL, si existe

# Key Pages

[Solo páginas públicas que existen actualmente]
- URL completa de cada página relevante

# Target Audience

[Perfil claro del público ideal]

# Unique Value Proposition

[Máximo 3 diferenciales concretos]

# SEO Keywords

[Palabras clave principales]

# Pricing

[Precios reales si están publicados; si no, indicar que se consultan por contacto]

# Tech Stack

[Tecnologías reales usadas en el sitio, si aplica]
Reglas obligatorias
Sí hacer
Usar datos reales, actuales y verificables
Verificar URLs antes de incluirlas
Diferenciar claramente entre:
el negocio dueño del sitio
el creador o desarrollador del sitio
Mantener foco en claridad, precisión y utilidad para LLMs
Redactar el archivo final listo para producción
No hacer
No incluir información futura
No agregar páginas inexistentes
No inventar precios ni servicios
No escribir texto de relleno
No usar lenguaje promocional exagerado
No convertir el archivo en un folleto de ventas
Entrega esperada
Crear llms.txt en la raíz del proyecto
Si corresponde, crear también la versión pública para servirlo como /llms.txt
Ajustar robots.txt si hace falta
Dejar el contenido final listo, limpio y consistente con el sitio actual
Contexto del proyecto
Completa estos datos con la información real del proyecto actual:

Negocio / institución principal: [NOMBRE]
Descripción breve: [DESCRIPCIÓN]
Dominio principal: [URL]
Contacto principal: [EMAIL / TELÉFONO / UBICACIÓN]
Servicios o productos principales: [LISTA]
Creador del sitio: FrandoWeb
- Responsable: Hernan Frandolich
- Especialidad: Diseno web, desarrollo full-stack, SEO y estrategia digital
- Web: https://frandoweb.com
- Email: info@frandoweb.com.ar
- WhatsApp: +54 9 11 2807-4000
- Ubicacion: Buenos Aires, Argentina
