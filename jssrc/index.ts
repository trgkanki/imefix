document.addEventListener('compositionend', (_e) => {
  const e = _e as CompositionEvent
  const target = e.target as (HTMLElement | null)
  if (target) {
    target.dataset.lastCompositionEndString = e.data
  }
}, { capture: true })

document.addEventListener('keydown', (e) => {
  const target = e.target as (HTMLElement | null)
  if (
    target &&
    !e.isComposing &&
    e.key === target.dataset.lastCompositionEndString
  ) {
    e.preventDefault()
  }
}, { capture: true })
