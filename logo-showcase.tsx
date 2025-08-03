import { Logo } from "./logo"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function LogoShowcase() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Brand Identity</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Logo Variations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="bg-white p-6 rounded-lg border">
                  <p className="text-sm text-gray-600 mb-4">Standard Logo</p>
                  <Logo size="lg" />
                </div>

                <div className="bg-blue-600 p-6 rounded-lg">
                  <p className="text-sm text-white mb-4">On Dark Background</p>
                  <Logo size="lg" variant="white" />
                </div>

                <div className="bg-gray-100 p-6 rounded-lg">
                  <p className="text-sm text-gray-600 mb-4">On Light Background</p>
                  <Logo size="lg" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Size Variations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-white p-4 rounded-lg border">
                  <p className="text-sm text-gray-600 mb-3">Extra Large</p>
                  <Logo size="xl" />
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <p className="text-sm text-gray-600 mb-3">Large</p>
                  <Logo size="lg" />
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <p className="text-sm text-gray-600 mb-3">Medium</p>
                  <Logo size="md" />
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <p className="text-sm text-gray-600 mb-3">Small</p>
                  <Logo size="sm" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
