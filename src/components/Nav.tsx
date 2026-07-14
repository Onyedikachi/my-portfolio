import { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import cv from '../assets/cv.pdf'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const Nav = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-ink-950/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between sm:h-20">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-mist-100">
          Onyedikachi<span className="text-gradient">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-mist-400 transition-colors hover:text-mist-100"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href={cv} download className="btn-ghost !px-5 !py-2.5 text-sm">
            Resume
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-mist-100 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiX size={20} /> : <HiMenu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink-950/95 backdrop-blur-md md:hidden">
          <div className="section-shell flex flex-col gap-1 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-mist-300 hover:bg-white/5 hover:text-mist-100"
              >
                {link.label}
              </a>
            ))}
            <a href={cv} download className="btn-primary mt-2 justify-center">
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Nav
