import { about, profile, stack, stats } from '../data/portfolio'
import Frame from './Frame'
import { ArrowRight, Download, Sparkle } from './Icons'
import Reveal from './Reveal'

/** Baris meta kecil bergaya terminal di bagian bawah hero. */
const meta = [
  { key: 'STATUS', value: profile.availability, live: true },
  { key: 'ROLE', value: profile.role },
  { key: 'LOCATION', value: profile.location },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 md:pt-36 md:pb-20 lg:pb-24"
    >
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="grid-noise absolute inset-0 opacity-60" />
        <div className="absolute -left-40 top-0 h-[32rem] w-[32rem] rounded-full bg-accent-600/10 blur-[130px]" />
        <div className="absolute right-0 top-20 h-[26rem] w-[26rem] rounded-full bg-accent-500/[0.06] blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-noir-950 to-transparent" />
      </div>

      <div className="shell relative">
        {/* ---------- Intro ---------- */}
        <div className="reveal is-visible">
          <span className="inline-flex items-center border border-accent-500/40 bg-accent-500/10 px-3 py-1.5 font-mono text-[0.62rem] tracking-[0.16em] text-accent-400 sm:text-[0.7rem]">
            {profile.badge}
          </span>

          <h1 className="mt-6 max-w-5xl text-[2.5rem] font-extrabold leading-[1.03] tracking-[-0.035em] text-ink-100 sm:text-6xl md:text-7xl lg:text-[5.25rem]">
            Hello, I&apos;m{' '}
            {/* nowrap: caret wajib menempel di baris yang sama dengan nama */}
            <span className="whitespace-nowrap text-accent-500 text-glow">
              {profile.firstName} {profile.lastName}
              <span aria-hidden="true" className="caret ml-2" />
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-[0.95rem] leading-relaxed text-ink-400 sm:text-lg">
            {profile.bio}
          </p>
        </div>

        {/* ---------- Stat cards ---------- */}
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {stats.map((stat, i) => (
            <Reveal
              as="li"
              key={stat.label}
              delay={i * 70}
              className="group border border-noir-700 bg-noir-850 px-4 py-5 transition-colors duration-300 hover:border-accent-500/60 sm:px-5 sm:py-6"
            >
              <p className="text-2xl font-bold leading-none tracking-tight text-ink-100 transition-colors duration-300 group-hover:text-accent-400 sm:text-[1.75rem]">
                {stat.value}
              </p>
              <p className="mt-2.5 text-[0.72rem] leading-snug text-ink-400 sm:text-[0.8rem]">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </ul>

        {/* ---------- Cover bertakik + badge + scroll hint ---------- */}
        <Reveal delay={120} className="relative mt-10 sm:mt-12">
          <Frame
            src={about.cover}
            alt={`${profile.name} at work`}
            label="about-cover.jpg"
            className="notched-frame aspect-[4/3] w-full sm:aspect-[16/9] md:aspect-[13/5]"
          />

          {/*
            `md:contents` melarutkan wrapper flex ini di desktop, sehingga kedua
            anaknya bisa di-absolute-kan tepat ke dalam takik kiri & kanan.
            Di mobile mereka tetap jadi baris normal di bawah gambar.
          */}
          <div className="mt-6 flex items-center justify-between gap-4 md:contents">
            <a
              href={`#${about.scrollTarget}`}
              aria-label="Scroll ke bagian pengalaman"
              className="group grid h-16 w-16 shrink-0 place-items-center rounded-full border border-noir-600 text-ink-400 transition-colors duration-300 hover:border-accent-500 hover:text-accent-500 md:absolute md:left-0 md:top-[81%] md:aspect-square md:h-auto md:w-[10%] md:-translate-y-1/2"
            >
              <Sparkle className="h-6 w-6 transition-transform duration-500 group-hover:rotate-90 md:h-[38%] md:w-[38%]" />
            </a>

            <p className="font-mono text-[0.8rem] leading-relaxed tracking-[0.12em] text-ink-400 md:absolute md:right-0 md:top-[81%] md:w-[21%] md:-translate-y-1/2 lg:text-[1rem]">
              {about.scrollHint.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        </Reveal>

        {/* ---------- Meta strip ---------- */}
        <dl className="mt-14 grid gap-px border-t border-noir-700/70 bg-noir-700/70 sm:mt-16 sm:grid-cols-3">
          {meta.map((item) => (
            <div key={item.key} className="bg-noir-950 px-0 py-4 sm:px-6 sm:first:pl-0">
              <dt className="font-mono text-[0.58rem] tracking-[0.22em] text-ink-500 sm:text-[0.62rem]">
                {item.key}
              </dt>
              <dd className="mt-1.5 flex items-center gap-2 text-[0.82rem] text-ink-100 sm:text-sm">
                {item.live && (
                  <span aria-hidden="true" className="relative grid h-2 w-2 place-items-center">
                    <span className="absolute h-2 w-2 animate-ping rounded-full bg-accent-500/70" />
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                  </span>
                )}
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* ---------- Marquee stack ---------- */}
        <div className="relative overflow-hidden border-y border-noir-700/70 py-3.5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-noir-950 to-transparent sm:w-24"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-noir-950 to-transparent sm:w-24"
          />
          <ul className="marquee-track flex w-max items-center">
            {[...stack, ...stack].map((item, i) => (
              <li
                key={`${item}-${i}`}
                aria-hidden={i >= stack.length}
                className="flex shrink-0 items-center gap-8 pr-8 font-mono text-[0.7rem] tracking-[0.22em] text-ink-500 sm:gap-12 sm:pr-12 sm:text-xs"
              >
                {item}
                <span className="text-accent-500/60">/</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- CTA (penutup section) ---------- */}
        <Reveal className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:items-center sm:gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2.5 bg-accent-500 px-6 py-3.5 font-mono text-sm font-medium text-white transition-all duration-300 hover:bg-accent-600 hover:shadow-[0_0_28px_-4px] hover:shadow-accent-500/60"
          >
            View Records
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2.5 border border-noir-500 px-6 py-3.5 font-mono text-sm text-ink-300 transition-colors duration-300 hover:border-accent-500 hover:text-accent-400"
          >
            Get In Touch
          </a>

          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              download={profile.resumeFileName}
              className="group inline-flex items-center justify-center gap-2.5 border border-noir-500 px-6 py-3.5 font-mono text-sm text-ink-300 transition-colors duration-300 hover:border-accent-500 hover:text-accent-400"
            >
              <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              My Resume
            </a>
          )}
        </Reveal>
      </div>
    </section>
  )
}
