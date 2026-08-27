import Reveal from './Reveal'

/** Judul section: "01. Experience Record" + garis horizontal. */
export default function SectionHeading({ number, title, align = 'left' }) {
  const centered = align === 'center'

  return (
    <Reveal
      className={`flex items-center gap-4 sm:gap-6 ${centered ? 'justify-center' : ''}`}
    >
      <h2 className="flex shrink-0 items-baseline gap-2 font-mono text-xl font-bold tracking-tight text-ink-100 sm:gap-3 sm:text-2xl md:text-[1.75rem]">
        {number && <span className="text-accent-500">{number}.</span>}
        <span>{title}</span>
      </h2>
      {!centered && (
        <span
          aria-hidden="true"
          className="hidden h-px flex-1 bg-gradient-to-r from-noir-500 to-transparent sm:block"
        />
      )}
    </Reveal>
  )
}
