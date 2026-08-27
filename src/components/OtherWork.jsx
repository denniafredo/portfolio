import { otherWork } from '../data/portfolio'
import { ExternalLink } from './Icons'
import Reveal from './Reveal'

/**
 * Kartu ringkas untuk project tanpa halaman detail.
 * Sengaja tanpa thumbnail & tanpa route — hanya ringkasan satu-dua baris,
 * plus link live kalau ada. Datanya dari `otherWork` di data/portfolio.js.
 */
function Card({ item, index }) {
  const hasLink = Boolean(item.liveUrl)

  return (
    <Reveal
      as="article"
      delay={index * 100}
      className="group relative flex h-full flex-col border border-noir-700 bg-noir-850/60 p-5 transition-colors duration-300 hover:border-accent-500/60 sm:p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <span
          aria-hidden="true"
          className="font-mono text-[0.62rem] tracking-[0.18em] text-ink-500 transition-colors duration-300 group-hover:text-accent-500 sm:text-[0.68rem]"
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        {hasLink && (
          <a
            href={item.liveUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Buka ${item.title}`}
            className="-mr-1.5 -mt-1.5 grid h-8 w-8 place-items-center text-ink-500 transition-colors hover:text-accent-500"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>

      <h3 className="mt-3 text-base font-bold tracking-tight text-ink-100 transition-colors duration-300 group-hover:text-accent-400 sm:text-lg">
        {item.title}
      </h3>
      {item.subtitle && (
        <p className="mt-1 font-mono text-[0.68rem] text-accent-500 sm:text-[0.72rem]">
          {item.subtitle}
        </p>
      )}

      <p className="mt-3 text-[0.85rem] leading-relaxed text-ink-400 sm:text-[0.875rem]">
        {item.description}
      </p>

      {item.tags?.length > 0 && (
        <ul className="mt-auto flex flex-wrap gap-2 pt-5">
          {item.tags.map((tag) => (
            <li
              key={tag}
              className="border border-noir-600 bg-noir-800 px-2.5 py-1 font-mono text-[0.6rem] tracking-wide text-ink-400 sm:text-[0.65rem]"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </Reveal>
  )
}

export default function OtherWork() {
  if (!otherWork.length) return null

  return (
    <div className="mt-16 sm:mt-20">
      <Reveal className="flex items-center gap-4 sm:gap-6">
        <p className="shrink-0 font-mono text-[0.62rem] tracking-[0.22em] text-ink-500 sm:text-[0.68rem]">
          <span className="text-accent-500">//</span> ALSO WORKED ON
        </p>
        <span
          aria-hidden="true"
          className="h-px flex-1 bg-gradient-to-r from-noir-600 to-transparent"
        />
      </Reveal>

      <div className="mt-6 grid gap-5 sm:mt-8 sm:gap-6 md:grid-cols-3">
        {otherWork.map((item, i) => (
          <Card key={item.id} item={item} index={i} />
        ))}
      </div>
    </div>
  )
}
