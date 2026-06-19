export function initFooterReveal() {
  const isMobile = window.matchMedia('(max-width: 768px)').matches
  if (isMobile) return

  const footer = document.querySelector('.footer')
  if (!document.querySelector('main') || !footer) return

  function applyFooterHeight(height) {
    document.documentElement.style.setProperty('--footer-reveal-space', `${Math.ceil(height)}px`)
    document.documentElement.classList.add('footer-reveal')
  }

  if ('ResizeObserver' in window) {
    new ResizeObserver(([entry]) => {
      const borderSize = entry.borderBoxSize?.[0]?.blockSize
      applyFooterHeight(borderSize || entry.contentRect.height)
    }).observe(footer)
  }
}
