import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  hoverEffect?: boolean
}

export function GlassCard({ children, className, hoverEffect = false, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card p-6 md:p-8",
        hoverEffect && "hover:scale-[1.02] hover:glow-shadow hover:-translate-y-1",
        className
      )}
      {...props}
    >
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  )
}
