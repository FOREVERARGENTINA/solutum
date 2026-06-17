export function initHeroCarrusel() {
  const slides = document.querySelectorAll('.hero__slide')
  if (slides.length < 2) return

  let actual = 0
  let intervalo

  function mostrar(idx) {
    slides[actual].classList.remove('activo')
    actual = idx
    slides[actual].classList.add('activo')
  }

  function siguiente() {
    mostrar((actual + 1) % slides.length)
  }

  function arrancar() {
    intervalo = setInterval(siguiente, 2000)
  }

  function pausar() {
    clearInterval(intervalo)
  }

  arrancar()

  // Pausa al hover para que el usuario pueda ver la imagen
  const contenedor = document.querySelector('.hero__imagen')
  if (contenedor) {
    contenedor.addEventListener('mouseenter', pausar)
    contenedor.addEventListener('mouseleave', arrancar)
  }
}
