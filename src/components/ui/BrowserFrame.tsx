import type { ReactNode } from 'react'

const BrowserFrame = ({ children }: { children: ReactNode }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-ink-900 shadow-glow">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      </div>
      <div className="aspect-[16/10] overflow-hidden bg-ink-950">{children}</div>
    </div>
  )
}

export default BrowserFrame
