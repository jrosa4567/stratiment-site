import { Card, CardContent } from "@/components/ui/card"
import { Linkedin } from "lucide-react"
import Image from "next/image"

export function TeamSection() {
  return (
    <section id="jordan-bio" className="py-16 bg-beige-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-normal text-gray-900 mb-4">Team</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="text-center bg-white border-gray-200 shadow-sm">
              <CardContent className="p-8">
                <div className="w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full">
                  <Image
                    src="/images/jordan-headshot.jpg"
                    alt="Jordan Rosa - Managing Partner"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-serif font-normal text-gray-900 mb-2">Jordan Rosa</h3>
                <p className="text-lg font-sans text-blue-600 font-semibold mb-4">Managing Partner</p>
                <p className="text-lg font-sans text-gray-600 mb-6">jordan@stratimentpartners.com</p>

                <p className="text-lg font-sans text-gray-700 mb-4 leading-relaxed text-left">
                  Jordan has more than a decade of investment banking and private equity experience. Prior to
                  Stratiment, Jordan started his career at Goldman Sachs in their structured products group. After
                  Goldman, Jordan spent time as an investor at several private equity firms; L Squared Capital Partners,
                  Corona Park Investment Partners, and JettyCove Partners.
                </p>

                <p className="text-lg font-sans text-gray-700 mb-6 text-left leading-relaxed">
                  Jordan graduated from University of Michigan with a focus in finance and economics.
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://www.linkedin.com/in/jordan-rosa-9ba8502a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-gray-400 hover:text-blue-600 transition-colors bg-gray-100 rounded-full hover:bg-blue-50"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
