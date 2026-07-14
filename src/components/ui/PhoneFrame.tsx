import type { ReactNode } from 'react'

const PhoneFrame = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto w-full max-w-[220px] overflow-hidden rounded-[2rem] border-4 border-white/10 bg-ink-900 shadow-glow">
      <div className="relative aspect-[9/19.5] overflow-hidden bg-ink-950">
        <div className="absolute left-1/2 top-0 z-10 h-4 w-20 -translate-x-1/2 rounded-b-xl bg-ink-950" />
        {children}
      </div>
    </div>
  )
}

export default PhoneFrame
