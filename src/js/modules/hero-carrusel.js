const INTERVALO = 5000
const DURACION_SALIDA = 1600

const SERVICIOS = [
  'Sanitaria',
  'Electricidad',
  'Albañilería',
  'Pintura',
  'Construcción',
]

export function initHeroCarrusel() {
  const slides  = document.querySelectorAll('.hero__slide')
  const barras  = document.querySelectorAll('.hero__barra')
  const textoEl = document.querySelector('.hero__rotativa-texto')
  const columna = document.querySelector('.hero__imagen')

  if (!slides.length) return

  let actual       = 0
  let svcActual    = 0
  let timer        = null
  let pausado      = false
  let enTransicion = false

  // ── Rotativa de servicios ──────────────────────────────────────────────
  function rotarServicio() {
    if (!textoEl) return
    textoEl.classList.add('saliendo')
    setTimeout(() => {
      svcActual = (svcActual + 1) % SERVICIOS.length
      textoEl.textContent = SERVICIOS[svcActual]
      textoEl.classList.remove('saliendo')
      textoEl.classList.add('entrando')
      requestAnimationFrame(() => requestAnimationFrame(() => textoEl.classList.remove('entrando')))
    }, 200)
  }

  // ── Progreso (barras) ──────────────────────────────────────────────────
  function actualizarBarras(idx) {
    barras.forEach((b, i) => {
      b.classList.toggle('activo', i === idx)
      b.setAttribute('aria-selected', i === idx ? 'true' : 'false')
    })
  }

  // ── Transición: clon fixed que viaja por toda la pantalla ─────────────
  function mostrar(idx) {
    if (idx === actual || enTransicion) return
    enTransicion = true

    const saliente = slides[actual]
    const entrante = slides[idx]

    // Posición exacta de la columna imagen en viewport
    const rect = columna.getBoundingClientRect()

    // Clon fixed que replica visualmente el slide saliente
    const clon = document.createElement('div')
    clon.style.cssText = `
      position: fixed;
      top: ${rect.top}px;
      left: ${rect.left}px;
      width: ${rect.width}px;
      height: ${rect.height}px;
      z-index: 9999;
      pointer-events: none;
      overflow: hidden;
      transition: transform ${DURACION_SALIDA}ms cubic-bezier(0.4,0,0.6,1),
                  opacity   ${DURACION_SALIDA * 0.7}ms ease;
    `
    // Copiar imagen activa al clon
    const imgOriginal = saliente.querySelector('img')
    if (imgOriginal) {
      const img = imgOriginal.cloneNode()
      img.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;'
      clon.appendChild(img)
    }

    // Replicar el gradiente izquierda del ::before para evitar salto visual
    const gradiente = document.createElement('div')
    gradiente.style.cssText = `
      position: absolute;
      inset: 0 auto 0 0;
      width: 80px;
      background: linear-gradient(to right, #101010, transparent);
      pointer-events: none;
    `
    clon.appendChild(gradiente)

    document.body.appendChild(clon)

    // Ocultar slide original — el clon lo reemplaza visualmente
    saliente.classList.remove('activo')

    // Mostrar el siguiente inmediatamente debajo del clon
    entrante.classList.add('activo')
    actual = idx
    actualizarBarras(actual)
    rotarServicio()

    // Trigger animación: desplazar clon hacia la izquierda hasta salir de pantalla
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // Desplazamiento = posición left + ancho del clon (sale por la izquierda)
        clon.style.transform = `translateX(-${rect.left + rect.width + 40}px)`
        clon.style.opacity = '0.08'
      })
    })

    setTimeout(() => {
      clon.remove()
      enTransicion = false
    }, DURACION_SALIDA + 60)
  }

  function siguiente() {
    mostrar((actual + 1) % slides.length)
  }

  // ── Arranque ───────────────────────────────────────────────────────────
  function arrancar() {
    if (pausado) return
    timer = setInterval(siguiente, INTERVALO)
  }

  function pausar() {
    pausado = true
    clearInterval(timer)
  }

  function reanudar() {
    pausado = false
    arrancar()
  }

  document.documentElement.style.setProperty('--hero-intervalo', `${INTERVALO}ms`)

  actualizarBarras(0)
  arrancar()

  if (columna) {
    columna.addEventListener('mouseenter', pausar)
    columna.addEventListener('mouseleave', reanudar)
  }

  barras.forEach((barra, i) => {
    barra.addEventListener('click', () => {
      pausar()
      mostrar(i)
      reanudar()
    })
  })
}
