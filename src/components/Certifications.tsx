import { FiAward } from 'react-icons/fi'
import Reveal from './ui/Reveal'
import { certifications } from '../data/resume'

const Certifications = () => {
  return (
    <section className="section-shell pb-24 sm:pb-32">
      <Reveal className="glass-card overflow-hidden p-6 sm:p-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">Certifications</span>
            <h3 className="mt-2 font-display text-2xl font-semibold text-mist-100">Verified cloud &amp; platform expertise</h3>
          </div>
          <span className="font-mono text-xs text-mist-500">{certifications.length} active credentials</span>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-brand-indigo/40"
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-gradient/20 text-brand-cyan">
                <FiAward size={16} />
              </span>
              <div>
                <p className="text-sm font-medium leading-snug text-mist-100">{cert.name}</p>
                <p className="mt-1 text-xs text-mist-500">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

export default Certifications
