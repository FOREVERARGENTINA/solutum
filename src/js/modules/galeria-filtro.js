export function initGaleriaFiltro() {
  const pills = document.querySelectorAll('.filtro-pill')
  const items = document.querySelectorAll('.galeria-item')
  if (!pills.length || !items.length) return

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('activo'))
      pill.classList.add('activo')

      const filtro = pill.dataset.filtro

      items.forEach(item => {
        const match = filtro === 'todos' || item.dataset.category === filtro

        if (match) {
          // Mostrar: primero display:block, luego fade in en siguiente frame
          item.style.display = ''
          item.removeAttribute('inert')
          requestAnimationFrame(() => { item.style.opacity = '1' })
        } else {
          // Ocultar: fade out, luego display:none al terminar transición
          item.style.opacity = '0'
          item.setAttribute('inert', '')
          item.addEventListener('transitionend', () => {
            if (item.style.opacity === '0') item.style.display = 'none'
          }, { once: true })
        }
      })
    })
  })
}
