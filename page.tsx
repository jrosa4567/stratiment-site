import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { InvestmentStrategy } from "@/components/investment-strategy"
import { TeamSection } from "@/components/team-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <InvestmentStrategy />
      <TeamSection />
    </div>
  )
}
