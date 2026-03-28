import { useEffect, useRef } from 'react'

/**
 * Attach to any element to trigger the .reveal → .in animation
 * when it enters the viewport.
 *
 * Usage:
 *   const ref = useReveal()
 *   <div ref={ref} className="reveal">...</div>
 */
export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('in'); observer.unobserve(el) } },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

/**
 * Reveal multiple elements from a parent container.
 * Each child with class "reveal" will animate in.
 */
export function useRevealGroup() {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return
    const els = container.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) { entry.target.classList.add('in'); observer.unobserve(entry.target) }
        })
      },
      { threshold: 0.08 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return ref
}
