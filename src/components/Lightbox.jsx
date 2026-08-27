import { useCallback, useEffect } from 'react'
import { ArrowLeft, ArrowRight, Close } from './Icons'

/**
 * Overlay sederhana untuk melihat screenshot ukuran penuh.
 * Tutup dengan Escape / klik backdrop, pindah gambar dengan panah kiri-kanan.
 */
export default function Lightbox({ items, index, onClose, onNavigate }) {
  const open = index !== null && index >= 0
  const current = open ? items[index] : null

  const go = useCallback(
    (step) => {
      if (!open || items.length < 2) return
      onNavigate((index + step + items.length) % items.length)
    },
    [index, items.length, onNavigate, open],
  )

  useEffect(() => {
    if (!open) return

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [go, onClose, open])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={current.name}
      onClick={onClose}
      className="fixed inset-0 z-[70] flex flex-col bg-noir-950/96 backdrop-blur-sm"
    >
      {/* Bar atas: nama file + tombol tutup */}
      <div className="flex shrink-0 items-center justify-between gap-4 border-b border-noir-700 px-4 py-3 sm:px-6">
        <p className="truncate font-mono text-[0.68rem] tracking-[0.12em] text-ink-400">
          <span className="text-accent-500">{String(index + 1).padStart(2, '0')}</span>
          <span className="mx-2 text-noir-500">/</span>
          {current.name}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup"
          className="-mr-2 grid h-9 w-9 shrink-0 place-items-center text-ink-300 transition-colors hover:text-accent-500"
        >
          <Close className="h-5 w-5" />
        </button>
      </div>

      {/* Gambar */}
      <div className="flex min-h-0 flex-1 items-center justify-center p-4 sm:p-8">
        <img
          src={current.src}
          alt={current.name}
          onClick={(e) => e.stopPropagation()}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Navigasi */}
      {items.length > 1 && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex shrink-0 items-center justify-center gap-3 border-t border-noir-700 px-4 py-3"
        >
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Gambar sebelumnya"
            className="grid h-10 w-10 place-items-center border border-noir-600 text-ink-300 transition-colors hover:border-accent-500 hover:text-accent-500"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Gambar berikutnya"
            className="grid h-10 w-10 place-items-center border border-noir-600 text-ink-300 transition-colors hover:border-accent-500 hover:text-accent-500"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  )
}
