import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Mengatur posisi scroll setiap kali route berubah:
 * - ada hash (`/#experience`) -> scroll halus ke section tersebut
 * - tidak ada hash            -> lompat ke atas seketika
 *
 * `behavior: 'instant'` perlu ditulis eksplisit karena <html> memakai
 * `scroll-behavior: smooth`; tanpa itu pindah halaman akan ikut beranimasi
 * menyusuri seluruh halaman.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}
