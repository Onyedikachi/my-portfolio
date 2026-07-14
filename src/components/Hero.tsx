import { motion } from 'framer-motion'
import { FiArrowDown, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import cv from '../assets/cv.pdf'
import { profile } from '../data/resume'

const socials = [
  { href: profile.linkedin, icon: FiLinkedin, label: 'LinkedIn' },
  { href: profile.github, icon: FiGithub, label: 'GitHub' },
  { href: `mailto:${profile.email}`, icon: FiMail, label: 'Email' },
]

const codeLines = [
  { indent: 0, content: [{ t: 'const', c: 'text-brand-violet' }, { t: ' engineer', c: 'text-mist-100' }, { t: ' = {', c: 'text-mist-400' }] },
  { indent: 1, content: [{ t: 'name', c: 'text-brand-cyan' }, { t: ": '" + profile.name + "',", c: 'text-mist-300' }] },
  { indent: 1, content: [{ t: 'role', c: 'text-brand-cyan' }, { t: ": '" + profile.role + "',", c: 'text-mist-300' }] },
  { indent: 1, content: [{ t: 'experience', c: 'text-brand-cyan' }, { t: ": '8+ years',", c: 'text-mist-300' }] },
  { indent: 1, content: [{ t: 'stack', c: 'text-brand-cyan' }, { t: ": ['React', 'Node.js', 'C#', 'Azure'],", c: 'text-mist-300' }] },
  { indent: 1, content: [{ t: 'basedIn', c: 'text-brand-cyan' }, { t: ": '" + profile.location.split(',')[0] + ", Nigeria',", c: 'text-mist-300' }] },
  { indent: 1, content: [{ t: 'available', c: 'text-brand-cyan' }, { t: ': true,', c: 'text-mist-300' }] },
  { indent: 0, content: [{ t: '}', c: 'text-mist-400' }] },
]

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-32 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-aurora" />
      <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-brand-indigo/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-16 top-10 h-72 w-72 rounded-full bg-brand-cyan/10 blur-[100px] animate-float" />

      <div className="section-shell relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-mist-100 sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gradient mt-3 font-display text-xl font-semibold sm:text-2xl"
          >
            {profile.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-balance text-base text-mist-400 sm:text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="btn-primary">
              View my work <FiArrowDown className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a href={cv} download className="btn-ghost">
              <FiDownload /> Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex items-center gap-4"
          >
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-mist-400 transition-all hover:border-brand-indigo/50 hover:text-mist-100"
              >
                <Icon size={17} />
              </a>
            ))}
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-14 grid max-w-lg grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {profile.highlights.map((item) => (
              <div key={item.label}>
                <dt className="sr-only">{item.label}</dt>
                <dd className="font-display text-2xl font-semibold text-mist-100">{item.value}</dd>
                <dd className="mt-1 text-xs text-mist-500">{item.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="glass-card overflow-hidden">
            <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-mist-500">profile.ts</span>
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-sm leading-relaxed">
              {codeLines.map((line, i) => (
                <div key={i} style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
                  {line.content.map((chunk, j) => (
                    <span key={j} className={chunk.c}>
                      {chunk.t}
                    </span>
                  ))}
                </div>
              ))}
            </pre>
          </div>
          <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-2xl border border-white/5 bg-brand-gradient/10" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
