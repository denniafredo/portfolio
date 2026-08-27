import { footer } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-noir-800 py-8 sm:py-10">
      <div className="shell">
        <p className="text-center font-mono text-[0.6rem] tracking-[0.16em] text-ink-500 sm:text-[0.68rem]">
          {footer.text} <span className="text-accent-500/70">//</span> {footer.year}
        </p>
      </div>
    </footer>
  )
}
