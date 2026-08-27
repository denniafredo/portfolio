import { profile, socials } from '../data/portfolio'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-noir-800 bg-noir-900 py-24 sm:py-28 lg:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="grid-noise absolute inset-0 opacity-50" />
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-600/12 blur-[110px] sm:h-96 sm:w-96" />
      </div>

      <div className="shell relative text-center">
        <Reveal>
          <h2 className="flex items-baseline justify-center gap-2 font-mono text-xl font-bold tracking-[0.02em] text-accent-500 sm:gap-3 sm:text-2xl md:text-[1.75rem]">
            <span>03.</span>
            <span>Initiate Connection</span>
          </h2>
        </Reveal>

        <Reveal delay={90}>
          <p className="mx-auto mt-6 max-w-xl text-[0.9rem] leading-relaxed text-ink-400 sm:text-base">
            Whether you have a project in mind or just want to discuss the latest in
            tech, my inbox is always open. Let&apos;s build something exceptional.
          </p>
        </Reveal>

        <Reveal delay={170}>
          <a
            href={`mailto:${profile.email}`}
            className="mt-10 inline-flex max-w-full items-center gap-1 border border-accent-500 px-5 py-3.5 font-mono text-[0.72rem] text-accent-500 transition-all duration-300 hover:bg-accent-500 hover:text-white hover:shadow-[0_0_32px_-6px] hover:shadow-accent-500/70 sm:px-8 sm:text-sm"
          >
            <span className="truncate">Send Email</span>
          </a>
        </Reveal>

        <Reveal delay={250}>
          <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 sm:gap-x-9">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-mono text-[0.68rem] tracking-[0.14em] text-ink-400 transition-colors duration-300 hover:text-accent-500 sm:text-xs"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
