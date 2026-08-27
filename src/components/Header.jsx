import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks, profile } from '../data/portfolio'
import { Close, Menu } from './Icons'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const { pathname } = useLocation()

  /* Header berubah solid setelah di-scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Scroll-spy: highlight menu sesuai section yang sedang terlihat */
  useEffect(() => {
    setActive('')
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean)
    if (!sections.length || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [pathname])

  /* Kunci scroll body saat menu mobile terbuka + tutup dengan Escape */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-accent-500 focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || open
            ? 'border-b border-noir-700 bg-noir-950/85 backdrop-blur-md'
            : 'border-b border-transparent'
        }`}
      >
        <div className="shell flex h-16 items-center justify-between md:h-[4.5rem]">
          <Link
            to="/"
            className="font-mono text-sm font-bold tracking-[0.14em] text-accent-500 transition-opacity hover:opacity-80 sm:text-base"
            onClick={() => setOpen(false)}
          >
            {profile.logo}
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-7 lg:gap-9">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={`/#${link.id}`}
                    aria-current={active === link.id ? 'true' : undefined}
                    className={`relative font-mono text-[0.8rem] tracking-wide transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-accent-500 after:transition-all after:duration-300 hover:text-ink-100 ${
                      active === link.id
                        ? 'text-ink-100 after:w-full'
                        : 'text-ink-400 after:w-0 hover:after:w-full'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="-mr-2 grid h-10 w-10 place-items-center text-ink-300 transition-colors hover:text-accent-500 md:hidden"
          >
            {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile / tablet overlay nav */}
      <div
        id="mobile-nav"
        inert={!open || undefined}
        className={`fixed inset-0 z-40 bg-noir-950/97 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <nav aria-label="Mobile" className="shell flex h-full flex-col justify-center">
          <ul className="space-y-1">
            {navLinks.map((link, i) => (
              <li key={link.id}>
                <Link
                  to={`/#${link.id}`}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${90 + i * 60}ms` : '0ms' }}
                  className={`flex items-baseline gap-4 border-b border-noir-700/70 py-5 font-mono text-2xl text-ink-100 transition-all duration-500 hover:text-accent-500 sm:text-3xl ${
                    open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                  }`}
                >
                  <span className="text-sm text-accent-500">
                    0{i + 1}
                  </span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10 font-mono text-xs tracking-[0.18em] text-ink-500">
            {profile.email}
          </p>
        </nav>
      </div>
    </>
  )
}
