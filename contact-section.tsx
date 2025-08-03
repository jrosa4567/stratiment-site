import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-beige-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Contact</h2>
          </div>

          <Card className="bg-beige-50 border-beige-300">
            <CardHeader>
              <CardTitle className="text-center">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="text-center">
                <p className="text-gray-600 mb-6">
                  If you're considering a partnership for your software business or are interested in learning more
                  about our investment approach, we'd like to hear from you.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="border-t pt-8 border-beige-300">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center space-y-2">
                    <Mail className="h-8 w-8 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">jordan@stratimentpartners.com</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <Phone className="h-8 w-8 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+1 (512) 905-6170</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <MapPin className="h-8 w-8 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-600">Austin, Texas</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
