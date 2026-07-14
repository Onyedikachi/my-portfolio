import { FiMapPin, FiBriefcase, FiAward } from 'react-icons/fi'
import photo from '../assets/kach2.jpeg'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import { education, profile } from '../data/resume'

const facts = [
  { icon: FiMapPin, label: 'Based in', value: profile.location },
  { icon: FiBriefcase, label: 'Currently', value: 'Senior Software Engineer at KPMG' },
  { icon: FiAward, label: 'Latest credential', value: 'Azure Solutions Architect Expert (AZ-305)' },
]

const About = () => {
  return (
    <section id="about" className="section-shell py-24 sm:py-32">
      <SectionHeading eyebrow="About" title="Engineering reliable software for eight years and counting" />

      <div className="mt-16 grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="mx-auto w-full max-w-xs lg:mx-0">
          <div className="group relative">
            <div className="absolute -inset-1 rounded-3xl bg-brand-gradient opacity-60 blur-lg transition-opacity duration-500 group-hover:opacity-90" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <img src={photo} alt="Onyedikachi Nwosu" className="aspect-[4/5] w-full object-cover" />
            </div>
          </div>
        </Reveal>

        <div className="space-y-8">
          <Reveal delay={0.1} className="space-y-5 text-mist-400">
            <p>
              I'm a Senior Software Engineer based in Lagos, Nigeria, specializing in full-stack development and
              DevOps. Over the past 8+ years I've worked across the stack — from architecting Node.js and C# services
              to shipping polished React and Next.js interfaces — with a strong focus on scalability, maintainability,
              and developer experience.
            </p>
            <p>
              At KPMG, I lead a team of 8 engineers, driving cloud migrations to Microsoft Azure, setting engineering
              standards across the SDLC, and translating complex technical trade-offs for non-technical stakeholders.
              Earlier at SignTech Paperless Solutions, I built automation that cut manual processing by 90% and
              redesigned customer-facing apps that lifted retention by 20%.
            </p>
            <p>
              I hold an M.Sc. in Biomedical Engineering from the University of Lagos and a B.Sc. in Electrical &amp;
              Electronics Engineering from the University of Ibadan, and I keep my cloud expertise current through
              Microsoft, Google Cloud, and AWS certifications.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="grid gap-4 sm:grid-cols-1">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="glass-card flex items-center gap-4 px-5 py-4">
                <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-white/5 text-brand-cyan">
                  <Icon size={18} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-mist-500">{label}</span>
                  <span className="text-sm font-medium text-mist-100">{value}</span>
                </span>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.3}>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-mist-500">Education</h3>
            <div className="mt-4 space-y-4">
              {education.map((item) => (
                <div key={item.school} className="flex flex-col gap-1 border-l-2 border-white/10 pl-4 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <p className="font-medium text-mist-100">{item.credential}</p>
                    <p className="text-sm text-mist-500">
                      {item.school} · {item.detail}
                    </p>
                  </div>
                  <span className="whitespace-nowrap font-mono text-xs text-mist-500">{item.period}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About
