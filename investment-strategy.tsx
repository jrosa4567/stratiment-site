import { Clock, Settings, Target, Focus, Users } from "lucide-react"

export function InvestmentStrategy() {
  return (
    <section id="our-difference" className="py-16 bg-blue-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-serif font-normal text-white mb-4">Our Difference</h3>
            <div className="w-16 h-1 bg-white mx-auto mb-8"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <Clock className="h-10 w-10 text-blue-300 mt-1" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-normal text-white mb-3">1. Permanent Capital</h4>
                  <p className="text-lg font-sans text-blue-100 leading-relaxed">
                    Our capital has no fixed time horizon. We have the ability to create very long-term investment
                    horizons unlike typical private equity with finite fund lives.
                  </p>
                </div>
              </div>

              <div className="border-t border-blue-700 pt-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <Settings className="h-10 w-10 text-blue-300 mt-1" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-normal text-white mb-3">2. Flexible Structure</h4>
                    <p className="text-lg font-sans text-blue-100 leading-relaxed">
                      Our flexible capital base enables us to invest across different company stages and structures.
                      While we aim to invest up to $25 million of equity, we are positioned to bring substantially more
                      capital should circumstances warrant.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-blue-700 pt-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <Target className="h-10 w-10 text-blue-300 mt-1" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-normal text-white mb-3">3. Alignment</h4>
                    <p className="text-lg font-sans text-blue-100 leading-relaxed">
                      We are large investors in each of our deals. We succeed only if our businesses do too.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-blue-700 pt-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <Focus className="h-10 w-10 text-blue-300 mt-1" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-normal text-white mb-3">4. Focus</h4>
                    <p className="text-lg font-sans text-blue-100 leading-relaxed">
                      We intentionally limit the number of investments we make to be able to concentrate our focus on a
                      very limited number of companies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-blue-700 pt-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <Users className="h-10 w-10 text-blue-300 mt-1" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-normal text-white mb-3">5. Broad Personal Networks</h4>
                    <p className="text-lg font-sans text-blue-100 leading-relaxed">
                      We are able to leverage our deep networks to bring additional expertise where needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
