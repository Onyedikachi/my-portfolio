import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import { skillGroups } from '../data/resume'

const Skills = () => {
  return (
    <section id="skills" className="section-shell py-24 sm:py-32">
      <SectionHeading
        eyebrow="Toolbox"
        title="Skills & competencies"
        description="A full-stack toolkit spanning frontend craft, backend systems, and the cloud infrastructure that ships them."
      />

      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.08} className="glass-card p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-mist-100">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-sm text-mist-300 transition-colors hover:border-brand-indigo/40 hover:text-mist-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Skills
