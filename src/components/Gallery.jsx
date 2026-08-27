import { useState } from 'react'
import Frame from './Frame'
import { Expand } from './Icons'
import Lightbox from './Lightbox'
import Reveal from './Reveal'

/**
 * Menentukan apakah item ke-`i` mengambil lebar penuh.
 *
 * Polanya 2 kecil + 1 lebar, berulang. Item terakhir juga dibuat lebar
 * kalau ia akan berdiri sendirian di barisnya — supaya tidak pernah ada
 * sisa ruang kosong, berapa pun jumlah gambarnya.
 *
 *   1 gambar  -> [ lebar ]
 *   2 gambar  -> [ kecil ][ kecil ]
 *   3 gambar  -> [ kecil ][ kecil ] / [ lebar ]
 *   4 gambar  -> [ kecil ][ kecil ] / [ lebar ] / [ lebar ]
 *   5 gambar  -> [ kecil ][ kecil ] / [ lebar ] / [ kecil ][ kecil ]
 */
function isWide(i, total) {
  const triad = i % 3 === 2
  const lastAlone = i === total - 1 && i % 3 === 0
  return triad || lastAlone
}

export default function Gallery({ items, fit = 'cover' }) {
  const [active, setActive] = useState(null)

  if (!items?.length) return null

  return (
    <>
      <div className={`grid gap-4 sm:grid-cols-2 sm:gap-5 ${fit === 'contain' ? 'lg:grid-cols-3' : ''}`}>
        {items.map((item, i) => {
          // Screenshot potrait (mobile) ditampilkan utuh, jadi tidak ada yang melebar.
          const contain = fit === 'contain'
          const wide = !contain && isWide(i, items.length)

          return (
            <Reveal
              as="figure"
              key={item.name}
              delay={(i % 3) * 90}
              className={`group border border-noir-700 bg-noir-850 transition-colors duration-300 hover:border-accent-500/60 ${
                wide ? 'sm:col-span-2' : ''
              }`}
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Perbesar ${item.name}`}
                className="block w-full cursor-zoom-in overflow-hidden"
              >
                <Frame
                  src={item.src}
                  alt={item.name}
                  label={item.name}
                  fit={fit}
                  className={`w-full ${contain ? 'aspect-[3/4] p-3' : wide ? 'aspect-[16/7]' : 'aspect-[16/10]'}`}
                  imgClassName="object-top origin-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </button>

              <figcaption className="flex items-center justify-between gap-3 border-t border-noir-700 px-3 py-2.5">
                <span className="truncate font-mono text-[0.62rem] tracking-wide text-ink-400 sm:text-[0.68rem]">
                  {item.name}
                </span>
                <Expand className="h-3.5 w-3.5 shrink-0 text-ink-500 transition-colors duration-300 group-hover:text-accent-500" />
              </figcaption>
            </Reveal>
          )
        })}
      </div>

      <Lightbox
        items={items}
        index={active}
        onClose={() => setActive(null)}
        onNavigate={setActive}
      />
    </>
  )
}
