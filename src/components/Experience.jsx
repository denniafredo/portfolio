import { experiences } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

/** Badge periode di kanan (atau di bawah judul saat layar sempit). */
function PeriodBadge({ children }) {
  return (
    <span className="w-fit shrink-0 rounded-full border border-noir-600 bg-noir-800 px-3 py-1 font-mono text-[0.6rem] tracking-[0.12em] text-ink-400 sm:text-[0.68rem]">
      {children}
    </span>
  )
}

/** Bullet pencapaian + chip skill untuk satu jabatan. */
function RoleBody({ points, skills }) {
  return (
    <>
      <ul className="mt-4 space-y-2.5">
        {points.map((point) => (
          <li
            key={point}
            className="flex gap-2.5 text-[0.875rem] leading-relaxed text-ink-400 sm:text-[0.925rem]"
          >
            <span aria-hidden="true" className="mt-[0.35rem] shrink-0 font-mono text-[0.6rem] text-accent-500">
              &#9656;
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {skills?.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded border border-noir-700 bg-noir-800/60 px-2 py-1 font-mono text-[0.6rem] tracking-[0.08em] text-ink-400 sm:text-[0.65rem]"
            >
              {skill}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative border-t border-noir-800 bg-noir-900 py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <SectionHeading number="01" title="Experiences" />

        <ol className="relative mt-12 sm:mt-14">
          {/* Garis timeline */}
          <span
            aria-hidden="true"
            className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-noir-500 via-noir-600 to-transparent sm:left-[7px]"
          />

          {experiences.map((exp, i) => {
            // Satu jabatan -> judul = role. Lebih dari satu -> judul = perusahaan,
            // jabatannya dirender sebagai sub-timeline di bawahnya.
            const single = exp.roles.length === 1
            const meta = [exp.type, exp.location].filter(Boolean).join(' · ')

            return (
              <Reveal
                as="li"
                key={exp.id}
                delay={i * 110}
                className="relative pl-7 pb-11 last:pb-0 sm:pl-10"
              >
                {/* Node timeline */}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-1.5 grid h-3 w-3 place-items-center rounded-full border-2 sm:h-4 sm:w-4 ${
                    exp.current
                      ? 'border-accent-500 bg-noir-900 shadow-[0_0_12px] shadow-accent-500/60'
                      : 'border-noir-500 bg-noir-900'
                  }`}
                >
                  {exp.current && (
                    <span className="h-1 w-1 rounded-full bg-accent-500 sm:h-1.5 sm:w-1.5" />
                  )}
                </span>

                {/* Header baris: judul + periode */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div>
                    <h3 className="text-base font-bold leading-snug text-ink-100 sm:text-lg">
                      {single ? exp.roles[0].role : exp.company}
                    </h3>
                    <p className="mt-0.5 font-mono text-[0.8rem] text-accent-500 sm:text-sm">
                      {single ? exp.company : meta}
                    </p>
                    {single && meta && (
                      <p className="mt-0.5 font-mono text-[0.7rem] text-ink-500 sm:text-[0.75rem]">
                        {meta}
                      </p>
                    )}
                  </div>

                  <PeriodBadge>{exp.period}</PeriodBadge>
                </div>

                {single ? (
                  <RoleBody points={exp.roles[0].points} skills={exp.roles[0].skills} />
                ) : (
                  <ol className="relative mt-5 space-y-7">
                    {/* Garis sub-timeline */}
                    <span
                      aria-hidden="true"
                      className="absolute left-[3px] top-2 bottom-2 w-px bg-noir-700"
                    />

                    {exp.roles.map((role) => (
                      <li key={role.id} className="relative pl-6 sm:pl-7">
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-[0.4rem] h-[7px] w-[7px] rounded-full border border-noir-500 bg-noir-800"
                        />

                        <div className="flex flex-col gap-1.5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                          <h4 className="text-[0.95rem] font-semibold leading-snug text-ink-100 sm:text-base">
                            {role.role}
                          </h4>
                          <PeriodBadge>{role.period}</PeriodBadge>
                        </div>

                        <RoleBody points={role.points} skills={role.skills} />
                      </li>
                    ))}
                  </ol>
                )}
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
