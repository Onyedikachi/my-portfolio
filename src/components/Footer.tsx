import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '../data/resume'

const links = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const socials = [
  { href: profile.linkedin, icon: FiLinkedin, label: 'LinkedIn' },
  { href: profile.github, icon: FiGithub, label: 'GitHub' },
  { href: `mailto:${profile.email}`, icon: FiMail, label: 'Email' },
]

const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="section-shell flex flex-col items-center gap-6 py-10 text-center">
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-mist-400 transition-colors hover:text-mist-100">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-3">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-mist-400 transition-colors hover:border-brand-indigo/50 hover:text-mist-100"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>

        <p className="text-xs text-mist-500">
          &copy; {new Date().getFullYear()} {profile.name}. Designed &amp; built with React, TypeScript and Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}

export default Footer
