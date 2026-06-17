# Cómo Usar - Arsenal de Configuraciones

## 📦 Archivos en esta carpeta

```
AGENTES/
├── AGENTS.md           → Template para proyectos (COPIAR)
├── guia.md             → Guía web 2026 (COPIAR)
├── .editorconfig       → Fuerza UTF-8 (COPIAR)
├── scripts/            → Scripts encoding (COPIAR carpeta completa)
│   ├── check-encoding.js
│   ├── fix-encoding.js
│   └── README.md
├── .ai-rules           → Reglas agentes (COPIAR - opcional)
├── INSTRUCCIONES.MD    → El agente lee ESTO
└── claude.md           → Ejemplo (NO copiar, se crea automático)
```

---

## 🚀 Uso en Proyecto Nuevo

### 1. Copiar archivos

```bash
cd tu-proyecto-nuevo

# Crear carpetas
mkdir docs scripts

# Copiar estos 4 items:
cp E:\Aideas\FRANDOWEB\AGENTES\AGENTS.md docs/
cp E:\Aideas\FRANDOWEB\AGENTES\guia.md docs/
cp E:\Aideas\FRANDOWEB\AGENTES\scripts/* scripts/
cp E:\Aideas\FRANDOWEB\AGENTES\.editorconfig .
```

**Opcional:**
```bash
cp E:\Aideas\FRANDOWEB\AGENTES\.ai-rules .
```

### 2. Abrir Claude Code y decir:

```
Lee E:\Aideas\FRANDOWEB\AGENTES\INSTRUCCIONES.MD y seguí los pasos
```

### 3. El agente pregunta, vos respondés

- Tipo de proyecto (A/B/C)
- Stack (Next.js, Astro, etc)
- Database (Supabase, ninguna)
- Hosting (Vercel, Netlify)

### 4. Listo

El agente crea:
- `.claude.md` en la raíz
- `.github/copilot-instructions.md`
- Completa `docs/AGENTS.md`
- Configura `package.json` con scripts

---

## 🔧 Uso en Proyecto Viejo (solo fix encoding)

```bash
cd proyecto-viejo

# Copiar solo scripts
mkdir scripts
cp E:\Aideas\FRANDOWEB\AGENTES\scripts/* scripts/

# Usar
node scripts/check-encoding.js
node scripts/fix-encoding.js --apply
```

---

## ✅ Resultado Final

```
tu-proyecto/
├── docs/
│   ├── AGENTS.md          ← Copiado y completado por agente
│   └── guia.md            ← Copiado
├── scripts/
│   ├── check-encoding.js  ← Copiado
│   ├── fix-encoding.js    ← Copiado
│   └── README.md          ← Copiado
├── .editorconfig          ← Copiado
├── .ai-rules              ← Copiado (opcional)
├── .claude.md             ← Creado por agente
└── .github/
    └── copilot-instructions.md  ← Creado por agente
```

---

## 💡 Scripts Disponibles (si hay package.json)

El agente configura estos comandos:

```bash
npm run check:encoding        # Detectar mojibakes
npm run fix:encoding          # Preview correcciones
npm run fix:encoding:apply    # Aplicar correcciones
npm run build                 # Valida encoding automáticamente
```

---

**Eso es todo. 4 copy-paste + 1 comando al agente.**
