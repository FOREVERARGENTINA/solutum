export function initFooterReveal() {
  const isMobile = window.matchMedia('(max-width: 768px)').matches
  if (isMobile) return

  const main   = document.querySelector('main')
  const footer = document.querySelector('.footer')
  if (!main || !footer) return

  document.documentElement.classList.add('footer-reveal')

  function sync() {
    main.style.marginBottom = footer.getBoundingClientRect().height + 'px'
  }

  window.addEventListener('load', sync)
  window.addEventListener('resize', sync)
  if ('ResizeObserver' in window) new ResizeObserver(sync).observe(footer)
  sync()
}
