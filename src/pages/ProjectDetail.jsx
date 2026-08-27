import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import Frame from '../components/Frame'
import Gallery from '../components/Gallery'
import { ArrowLeft, ArrowRight, Code, ExternalLink } from '../components/Icons'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { allProjects, galleryBase } from '../data/portfolio'
import NotFound from './NotFound'

export default function ProjectDetail() {
  const { id } = useParams()

  const index = allProjects.findIndex((p) => p.id === id)
  const project = allProjects[index]

  // Nama file di data diubah jadi path lengkap: /images/projects/<id>/<file>
  const gallery = useMemo(
    () =>
      (project?.gallery ?? []).map((name) => ({
        name,
        src: `${galleryBase}/${project.id}/${name}`,
      })),
    [project],
  )

  if (!project) return <NotFound />

  const next = allProjects[(index + 1) % allProjects.length]

  return (
    <article className="pt-24 pb-20 sm:pt-28 md:pt-32 md:pb-24">
      <div className="shell">
        {/* ---------- Back ---------- */}
        <Link
          to="/#projects"
          className="group inline-flex items-center gap-2 font-mono text-[0.68rem] tracking-[0.16em] text-ink-400 transition-colors hover:text-accent-500 sm:text-xs"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
          ../projects
        </Link>

        {/* ---------- Cover ---------- */}
        <div className="reveal is-visible mt-6 border border-noir-700 bg-noir-850 p-1.5 sm:mt-8 sm:p-2">
          <Frame
            src={project.cover ?? project.image}
            alt={`Cover ${project.title}`}
            label={(project.cover ?? project.image)?.split('/').pop()}
            fit="contain"
            className="aspect-[16/10] w-full p-8 sm:aspect-[16/8] sm:p-10 md:aspect-[16/7] md:p-12"
          />
        </div>

        {/* ---------- Detail + meta ---------- */}
        <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 lg:grid-cols-[1.7fr_0.85fr]">
          <Reveal className="border border-noir-700 bg-noir-850 p-6 sm:p-8">
            <p className="font-mono text-[0.62rem] tracking-[0.22em] text-ink-500 sm:text-[0.68rem]">
              <span className="text-accent-500">/</span> PROJECT DETAILS
            </p>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-100 sm:text-4xl md:text-[2.75rem]">
              {project.title}
            </h1>

            {project.subtitle && (
              <p className="mt-2 font-mono text-sm text-accent-500 sm:text-base">
                {project.subtitle}
              </p>
            )}

            <p className="mt-5 max-w-2xl text-[0.9rem] leading-relaxed text-ink-400 sm:text-[0.95rem]">
              {project.overview ?? project.description}
            </p>

            {project.tags?.length > 0 && (
              <ul className="mt-7 flex flex-wrap gap-2">
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

            {(project.liveUrl || project.repoUrl) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group inline-flex items-center gap-2.5 bg-accent-500 px-5 py-3 font-mono text-[0.8rem] font-medium text-white transition-all duration-300 hover:bg-accent-600 hover:shadow-[0_0_28px_-4px] hover:shadow-accent-500/60"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Site
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2.5 border border-noir-500 px-5 py-3 font-mono text-[0.8rem] text-ink-300 transition-colors duration-300 hover:border-accent-500 hover:text-accent-400"
                  >
                    <Code className="h-4 w-4" />
                    Source
                  </a>
                )}
              </div>
            )}
          </Reveal>

          {/* Kartu meta — jumlahnya mengikuti isi `details` di data */}
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-1 lg:content-start">
            {project.details?.map((detail, i) => (
              <Reveal
                key={detail.key}
                delay={80 + i * 90}
                className="border border-noir-700 bg-noir-850 p-5 sm:p-6"
              >
                <p className="flex items-center gap-2 font-mono text-[0.6rem] tracking-[0.2em] text-ink-500 sm:text-[0.66rem]">
                  <span aria-hidden="true" className="h-1.5 w-1.5 bg-accent-500" />
                  {detail.key}
                </p>
                <p className="mt-3 text-base font-bold text-ink-100 sm:text-lg">
                  {detail.value}
                </p>
                {detail.note && (
                  <p className="mt-1 font-mono text-[0.68rem] text-ink-500 sm:text-xs">
                    ({detail.note})
                  </p>
                )}
              </Reveal>
            ))}
          </div>
        </div>

        {/* ---------- Gallery ---------- */}
        {gallery.length > 0 && (
          <section className="mt-16 sm:mt-20">
            <SectionHeading title="System Views" />
            <div className="mt-8 sm:mt-10">
              <Gallery items={gallery} fit={project.galleryFit} />
            </div>
          </section>
        )}

        {/* ---------- Next project ---------- */}
        {next && next.id !== project.id && (
          <Reveal className="mt-16 border-t border-noir-700 pt-8 sm:mt-20 sm:pt-10">
            <p className="font-mono text-[0.6rem] tracking-[0.22em] text-ink-500 sm:text-[0.66rem]">
              NEXT_PROJECT
            </p>
            <Link
              to={`/project/${next.id}`}
              className="group mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1"
            >
              <span className="text-2xl font-extrabold tracking-tight text-ink-100 transition-colors duration-300 group-hover:text-accent-400 sm:text-3xl">
                {next.title}
              </span>
              <span className="font-mono text-[0.8rem] text-accent-500">
                {next.subtitle}
              </span>
              <ArrowRight className="h-5 w-5 self-center text-ink-400 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-accent-500" />
            </Link>
          </Reveal>
        )}
      </div>
    </article>
  )
}
