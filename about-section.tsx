import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-12 bg-beige-50 -mt-6">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-serif font-normal text-gray-900 mb-4">About Stratiment Partners</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl font-sans text-gray-700 mb-8 leading-relaxed text-center">
              Stratiment Partners is an entrepreneurial, technology focused independent sponsor based in Austin, Texas.
              We have deep experience in developing effective working partnerships with entrepreneurs and management
              teams. We understand the unique role a founder plays in building a business, and we can be helpful in
              bringing tools and resources to empower them to realize the full potential of their business.
            </p>

            <section id="investment-focus">
              <Card className="bg-white border-gray-200 shadow-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-normal text-gray-900 mb-6 text-center">Investment Focus</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-lg font-sans text-gray-700 leading-relaxed">
                          Focus on partnering with leaders looking to diversify financially and retain a meaningful
                          equity position as an opportunity for value creation
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-lg font-sans text-gray-700 leading-relaxed">
                          We work with companies that are profitable or have a clear path to profitability, while
                          bootstrapped or using limited resources, and are looking for a step-function in their growth
                          cycle
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-lg font-sans text-gray-700 leading-relaxed">
                          Equity check size of $5-$25 million
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-lg font-sans text-gray-700 leading-relaxed">
                          Revenue up to $20 million; EBITDA up to $10 million
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-lg font-sans text-gray-700 leading-relaxed">
                          Majority and minority control investments
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-lg font-sans text-gray-700 leading-relaxed">
                          Technology-enabled business services, SaaS, and Data focused companies, with a specialization
                          in niche verticals
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}
