import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import { experience } from '../data/resume'

const Experience = () => {
  return (
    <section id="experience" className="section-shell py-24 sm:py-32">
      <SectionHeading
        eyebrow="Career"
        title="Where I've made an impact"
        description="A track record of leading teams, modernizing platforms, and shipping software that holds up in production."
      />

      <div className="relative mt-16">
        <div className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-brand-indigo via-white/10 to-transparent sm:block" />

        <div className="space-y-12">
          {experience.map((job, index) => (
            <Reveal key={job.company} delay={index * 0.1} className="relative sm:pl-10">
              <span className="absolute left-0 top-2 hidden h-4 w-4 rounded-full border-2 border-brand-cyan bg-ink-950 sm:block" />

              <div className="glass-card p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-mist-100">{job.role}</h3>
                    <p className="text-gradient font-medium">{job.company}</p>
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-mist-400">
                    {job.period}
                  </span>
                </div>

                <p className="mt-4 text-mist-400">{job.summary}</p>

                <ul className="mt-5 space-y-2.5">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm text-mist-300">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-indigo" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
