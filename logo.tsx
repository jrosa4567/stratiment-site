import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  variant?: "default" | "white" | "dark"
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl"
  className?: string
}

export function Logo({ variant = "default", size = "md", className }: LogoProps) {
  const sizeClasses = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16",
    xl: "h-20",
    "2xl": "h-32",
    "3xl": "h-48",
    "4xl": "h-64",
    "5xl": "h-96",
    "6xl": "h-[48rem]",
  }

  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src="/images/stratiment-logo.png"
        alt="Stratiment Partners - Private Equity"
        width={1600}
        height={640}
        className={cn(sizeClasses[size], "w-auto")}
        priority
      />
    </div>
  )
}
