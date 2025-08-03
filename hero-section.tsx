import { Logo } from "./logo"

export function HeroSection() {
  return (
    <section className="bg-beige-100 -mt-2">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center -mb-4">
            <Logo size="5xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
