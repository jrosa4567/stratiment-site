import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Logo variant="white" size="md" className="mb-3" />
              <p className="text-lg text-gray-400 mb-3 max-w-md">
                Entrepreneurial, technology focused independent sponsor partnering with exceptional management teams to
                build market-leading companies.
              </p>
              <p className="text-lg text-gray-400">© 2024 Stratiment Partners. All rights reserved.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="text-lg">jordan@stratimentpartners.com</li>
                <li className="text-lg">+1 (512) 905-6170</li>
                <li className="text-lg">Austin, Texas</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 pt-6 text-center">
            <p className="text-lg text-gray-400">
              This website is for informational purposes only and does not constitute an offer to sell or solicitation
              of an offer to buy any securities.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
