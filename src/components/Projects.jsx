import { Link } from 'react-router-dom'
import { moreProjects, projects } from '../data/portfolio'
import Accordion from './Accordion'
import Frame from './Frame'
import OtherWork from './OtherWork'
import { Code, ExternalLink } from './Icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function ProjectCard({ project, index }) {
  return (
    <Reveal
      as="article"
      delay={index * 120}
      className="group relative flex h-full flex-col border border-noir-700 bg-noir-850 transition-colors duration-300 hover:border-accent-500/60"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden border-b border-noir-700">
        <Frame
          src={project.image}
          alt={`Preview ${project.title}`}
          label={project.image?.split('/').pop()}
          fit="contain"
          className="aspect-[16/10] w-full p-8 sm:p-10"
          imgClassName={`transition-all duration-700 group-hover:scale-[1.04] ${
            project.logoMotion ? `logo-${project.logoMotion}` : ''
          }`}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-accent-500/0 transition-colors duration-500 group-hover:bg-accent-500/10"
        />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold tracking-tight text-ink-100 transition-colors duration-300 group-hover:text-accent-400 sm:text-xl">
              <Link to={`/project/${project.id}`} className="after:absolute after:inset-0">
                {project.title}
              </Link>
            </h3>
            {project.subtitle && (
              <p className="mt-1 font-mono text-[0.72rem] text-accent-500 sm:text-[0.78rem]">
                {project.subtitle}
              </p>
            )}
          </div>

          <div className="relative z-10 flex shrink-0 items-center gap-1">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Buka live demo ${project.title}`}
                className="grid h-9 w-9 place-items-center text-ink-400 transition-colors hover:text-accent-500"
              >
                <ExternalLink className="h-[1.05rem] w-[1.05rem]" />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Lihat source code ${project.title}`}
                className="grid h-9 w-9 place-items-center text-ink-400 transition-colors hover:text-accent-500"
              >
                <Code className="h-[1.05rem] w-[1.05rem]" />
              </a>
            )}
          </div>
        </div>

        <p className="mt-2.5 text-[0.875rem] leading-relaxed text-ink-400 sm:text-[0.9rem]">
          {project.description}
        </p>

        {project.tags?.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2 pt-1">
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
      </div>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative border-t border-noir-800 py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <SectionHeading number="02" title="Selected Projects" />

        <div className="mt-12 grid gap-6 sm:mt-14 sm:gap-7 md:grid-cols-2 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {moreProjects.length > 0 && (
          <div className="mt-16 sm:mt-20">
            <Reveal className="flex items-center gap-4 sm:gap-6">
              <p className="shrink-0 font-mono text-[0.62rem] tracking-[0.22em] text-ink-500 sm:text-[0.68rem]">
                <span className="text-accent-500">//</span> OTHER PROJECTS
              </p>
              <span
                aria-hidden="true"
                className="h-px flex-1 bg-gradient-to-r from-noir-600 to-transparent"
              />
            </Reveal>

            <div className="mt-6 sm:mt-8">
              <Accordion items={moreProjects} />
            </div>
          </div>
        )}

        <OtherWork />
      </div>
    </section>
  )
}
