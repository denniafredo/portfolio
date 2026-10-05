import { useEffect, useMemo, useRef, useState } from 'react'
import { animatedLogos } from '../logos'

// Reveal cukup diputar sekali per page load. Balik ke home dari halaman
// detail -> logo langsung di frame akhir, idle loop-nya tetap jalan.
const played = new Set()

/**
 * Logo SVG beranimasi hasil pixel2motion (lihat src/logos/).
 * SVG di-inline supaya motion CSS-nya bisa menarget id tiap bagian logo.
 * Jam animasi ditahan di t=0 (class `is-playing` belum ada) sampai logonya
 * masuk viewport, lalu mulai bareng fade-in kartu (`delay`).
 */
export default function AnimatedLogo({ id, label, delay = 0, className = '' }) {
  const logo = animatedLogos[id]
  const ref = useRef(null)
  const [playing, setPlaying] = useState(false)
  // Objeknya harus stabil: React 19 menulis ulang innerHTML tiap kali objek
  // `dangerouslySetInnerHTML` berganti, dan itu me-restart semua animasi.
  const html = useMemo(() => ({ __html: logo?.svg ?? '' }), [logo])

  useEffect(() => {
    const node = ref.current
    if (!node || !logo) return

    if (played.has(id)) {
      node.getAnimations?.({ subtree: true }).forEach((animation) => {
        animation.currentTime = logo.revealMs
      })
      setPlaying(true)
      return
    }

    let timer
    const start = () => {
      timer = setTimeout(() => {
        played.add(id)
        setPlaying(true)
      }, delay)
    }

    if (typeof IntersectionObserver === 'undefined') {
      start()
      return () => clearTimeout(timer)
    }

    // Threshold & margin disamakan dengan <Reveal> supaya start-nya kompak.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        start()
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )
    observer.observe(node)

    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [id, delay, logo])

  if (!logo) return null

  return (
    <div
      ref={ref}
      role="img"
      aria-label={label}
      className={`p2m-stage ${playing ? 'is-playing' : ''} ${className}`}
      dangerouslySetInnerHTML={html}
    />
  )
}
