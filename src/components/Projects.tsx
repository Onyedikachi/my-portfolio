import { FiArrowUpRight } from 'react-icons/fi'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import BrowserFrame from './ui/BrowserFrame'
import PhoneFrame from './ui/PhoneFrame'
import { projects } from '../data/resume'

const images = import.meta.glob<{ default: string }>('../assets/*.{png,jpg,jpeg}', { eager: true })

const resolveImage = (name: string) => images[`../assets/${name}`]?.default

const Projects = () => {
  return (
    <section id="projects" className="section-shell py-24 sm:py-32">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects that shipped to real users"
        description="Product and platform work spanning healthcare, fintech-adjacent payments, and paperless enterprise workflows."
      />

      <div className="mt-16 grid items-start gap-8 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08} className="group">
            <a href={project.demo} target="_blank" rel="noreferrer" className="block">
              {project.platform === 'mobile' ? (
                <PhoneFrame>
                  <img
                    src={resolveImage(project.image)}
                    alt={project.title}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </PhoneFrame>
              ) : (
                <BrowserFrame>
                  <img
                    src={resolveImage(project.image)}
                    alt={project.title}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </BrowserFrame>
              )}

              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="flex items-center gap-1.5 font-display text-lg font-semibold text-mist-100">
                    {project.title}
                    <FiArrowUpRight className="text-mist-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-cyan" />
                  </h3>
                  <p className="mt-2 text-sm text-mist-400">{project.description}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-mist-400">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Projects
