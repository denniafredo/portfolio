import { Link } from 'react-router-dom'
import { ArrowRight } from '../components/Icons'

export default function NotFound() {
  return (
    <section className="shell flex min-h-[70vh] flex-col justify-center py-24">
      <p className="font-mono text-[0.7rem] tracking-[0.24em] text-accent-500">
        ERROR_404
      </p>
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-100 sm:text-5xl">
        Record not found
      </h1>
      <p className="mt-4 max-w-md text-ink-400">
        Halaman yang kamu tuju tidak ada atau sudah dipindahkan.
      </p>
      <Link
        to="/"
        className="group mt-8 inline-flex w-fit items-center gap-2.5 border border-noir-500 px-6 py-3.5 font-mono text-sm text-ink-300 transition-colors duration-300 hover:border-accent-500 hover:text-accent-400"
      >
        Back to home
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </section>
  )
}
