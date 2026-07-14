import { useState, type FormEvent } from 'react'
import { FiCheckCircle, FiLoader, FiMail, FiXCircle } from 'react-icons/fi'
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import { profile } from '../data/resume'

const CONTACT_API = 'https://hpy6mpceo8.execute-api.eu-west-2.amazonaws.com/v1/router'

type Status = 'idle' | 'loading' | 'success' | 'error'

const contactOptions = [
  { icon: FiMail, label: 'Email', value: 'Send a message', href: `mailto:${profile.email}` },
  { icon: BsLinkedin, label: 'LinkedIn', value: 'Connect with me', href: profile.linkedin },
  { icon: BsWhatsapp, label: 'WhatsApp', value: 'Chat directly', href: profile.whatsapp },
]

const Contact = () => {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch(CONTACT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          function: 'email-service',
          type: 'contact_mail',
          from: 'contactus@onyedikachinwosu.com.ng',
          emailSubject: 'Enquiries',
          ...form,
        }),
      })

      if (!response.ok) throw new Error('Request failed')

      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-shell py-24 sm:py-32">
      <SectionHeading
        eyebrow="Get in touch"
        title="Let's build something reliable together"
        description="Open to senior/staff engineering roles, cloud modernization projects, and consulting engagements."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="space-y-4">
          {contactOptions.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="glass-card flex items-center gap-4 px-5 py-4 transition-colors hover:border-brand-indigo/40"
            >
              <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-white/5 text-brand-cyan">
                <Icon size={19} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wide text-mist-500">{label}</span>
                <span className="text-sm font-medium text-mist-100">{value}</span>
              </span>
            </a>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="glass-card space-y-4 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange('name')}
                className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-mist-100 placeholder:text-mist-500 focus:border-brand-indigo/60 focus:outline-none"
              />
              <input
                required
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange('email')}
                className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-mist-100 placeholder:text-mist-500 focus:border-brand-indigo/60 focus:outline-none"
              />
            </div>
            <input
              type="tel"
              placeholder="Your phone number (optional)"
              value={form.phone}
              onChange={handleChange('phone')}
              className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-mist-100 placeholder:text-mist-500 focus:border-brand-indigo/60 focus:outline-none"
            />
            <textarea
              required
              rows={5}
              placeholder="Your message"
              value={form.message}
              onChange={handleChange('message')}
              className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-mist-100 placeholder:text-mist-500 focus:border-brand-indigo/60 focus:outline-none"
            />

            <div className="flex items-center gap-4">
              <button type="submit" disabled={status === 'loading'} className="btn-primary disabled:opacity-60">
                {status === 'loading' ? <FiLoader className="animate-spin" /> : null}
                {status === 'loading' ? 'Sending…' : 'Send message'}
              </button>

              {status === 'success' && (
                <span className="flex items-center gap-1.5 text-sm text-emerald-400">
                  <FiCheckCircle /> Message sent — thank you!
                </span>
              )}
              {status === 'error' && (
                <span className="flex items-center gap-1.5 text-sm text-red-400">
                  <FiXCircle /> Something went wrong. Please try again.
                </span>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
