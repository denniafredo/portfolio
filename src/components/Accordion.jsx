import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Plus } from './Icons'
import Reveal from './Reveal'

function Row({ project, index, open, onToggle }) {
  const panelId = `${useId()}-panel`

  return (
    <Reveal
      as="li"
      delay={index * 80}
      className={`border-b border-noir-700 transition-colors duration-300 ${
        open ? 'bg-noir-850' : 'hover:bg-noir-850/50'
      }`}
    >
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="group flex w-full items-center gap-4 py-5 text-left sm:gap-6 sm:py-6"
        >
          <span
            aria-hidden="true"
            className={`shrink-0 font-mono text-[0.68rem] tracking-[0.12em] transition-colors duration-300 sm:text-xs ${
              open ? 'text-accent-500' : 'text-ink-500'
            }`}
          >
            {String(index + 1).padStart(2, '0')}
          </span>

          <span className="min-w-0 flex-1">
            <span
              className={`block truncate text-base font-bold tracking-tight transition-colors duration-300 sm:text-lg ${
                open ? 'text-accent-400' : 'text-ink-100 group-hover:text-accent-400'
              }`}
            >
              {project.title}
            </span>
            <span className="mt-0.5 block truncate font-mono text-[0.68rem] text-ink-400 sm:text-[0.75rem]">
              {project.subtitle}
            </span>
          </span>

          <span
            aria-hidden="true"
            className={`grid h-8 w-8 shrink-0 place-items-center border transition-all duration-300 sm:h-9 sm:w-9 ${
              open
                ? 'rotate-45 border-accent-500 text-accent-500'
                : 'border-noir-600 text-ink-400 group-hover:border-accent-500/60 group-hover:text-accent-500'
            }`}
          >
            <Plus className="h-3.5 w-3.5" />
          </span>
        </button>
      </h3>

      {/*
        Animasi buka-tutup pakai grid-template-rows 0fr -> 1fr. Ini bekerja
        untuk konten setinggi apa pun tanpa perlu mengukur tinggi manual
        seperti trik max-height.
      */}
      <div
        id={panelId}
        role="region"
        className={`grid transition-[grid-template-rows] duration-500 ease-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-6 pl-8 pr-0 sm:pb-7 sm:pl-14">
            <p className="max-w-2xl text-[0.875rem] leading-relaxed text-ink-400 sm:text-[0.925rem]">
              {project.description}
            </p>

            {project.details?.length > 0 && (
              <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                {project.details.map((detail) => (
                  <div key={detail.key}>
                    <dt className="font-mono text-[0.58rem] tracking-[0.2em] text-ink-500 sm:text-[0.62rem]">
                      {detail.key}
                    </dt>
                    <dd className="mt-1 text-[0.82rem] text-ink-100 sm:text-sm">
                      {detail.value}
                      {detail.note && (
                        <span className="ml-1.5 font-mono text-[0.68rem] text-ink-500">
                          ({detail.note})
                        </span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            )}

            {project.tags?.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="border border-noir-600 bg-noir-800 px-2.5 py-1 font-mono text-[0.6rem] tracking-wide text-ink-400 sm:text-[0.68rem]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}

            <Link
              to={`/project/${project.id}`}
              tabIndex={open ? undefined : -1}
              className="group/link mt-6 inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.12em] text-accent-500 transition-colors hover:text-accent-400 sm:text-xs"
            >
              VIEW_DETAIL
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

/** Accordion satu-terbuka untuk project pendukung. */
export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(null)

  if (!items?.length) return null

  return (
    <ul className="border-t border-noir-700">
      {items.map((project, i) => (
        <Row
          key={project.id}
          project={project}
          index={i}
          open={openId === project.id}
          onToggle={() => setOpenId((prev) => (prev === project.id ? null : project.id))}
        />
      ))}
    </ul>
  )
}
