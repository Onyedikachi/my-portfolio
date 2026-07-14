import Reveal from './Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

const SectionHeading = ({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) => {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="font-display text-3xl font-semibold text-mist-100 sm:text-4xl">{title}</h2>
      {description && <p className="text-balance text-mist-400">{description}</p>}
    </Reveal>
  )
}

export default SectionHeading
