import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, FileText, Handshake, TrendingUp } from "lucide-react"

export function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to identifying, evaluating, and executing software acquisitions with the right
              capital partners and management teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center relative">
              <CardHeader>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">1. Sourcing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Identify exceptional software businesses through our proprietary network and systematic market
                  analysis.
                </p>
              </CardContent>
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <div className="w-8 h-0.5 bg-blue-200"></div>
              </div>
            </Card>

            <Card className="text-center relative">
              <CardHeader>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">2. Evaluation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprehensive due diligence focusing on business model, technology, market position, and growth
                  potential.
                </p>
              </CardContent>
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <div className="w-8 h-0.5 bg-blue-200"></div>
              </div>
            </Card>

            <Card className="text-center relative">
              <CardHeader>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">3. Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Partner with institutional capital and align with management teams to structure optimal transactions.
                </p>
              </CardContent>
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <div className="w-8 h-0.5 bg-blue-200"></div>
              </div>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">4. Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Drive operational improvements and strategic initiatives to accelerate growth and create value.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 bg-blue-50 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Capital Partnership Network</h3>
              <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                We maintain strong relationships with institutional investors, family offices, and strategic partners
                who provide the capital needed to execute transactions and support portfolio company growth.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Institutional Investors</h4>
                  <p className="text-gray-600">Private equity funds and institutional capital partners</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Family Offices</h4>
                  <p className="text-gray-600">High-net-worth families and investment offices</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Strategic Partners</h4>
                  <p className="text-gray-600">Industry leaders and strategic acquirers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
