"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b bg-beige-100 sticky top-0 z-50 border-beige-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-8">
          <div></div> {/* Empty div to maintain spacing */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-lg font-sans text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              About
            </a>
            <a
              href="#investment-focus"
              className="text-lg font-sans text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Investment Focus
            </a>
            <a
              href="#jordan-bio"
              className="text-lg font-sans text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Team
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button className="md:hidden" variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-beige-100 py-2 border-beige-300">
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-lg font-sans text-gray-700 hover:text-blue-600 font-medium">
                About
              </a>
              <a href="#investment-focus" className="text-lg font-sans text-gray-700 hover:text-blue-600 font-medium">
                Investment Focus
              </a>
              <a href="#jordan-bio" className="text-lg font-sans text-gray-700 hover:text-blue-600 font-medium">
                Team
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
