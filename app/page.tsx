import { ChevronDown } from "lucide-react"
import ParallaxHero from "@/components/parallax-hero"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import AboutSection from "@/components/about-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      <Navbar />

      {/* Hero Section with Parallax */}
      <ParallaxHero />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white text-sm font-medium mb-2">Scroll Down</span>
        <ChevronDown className="h-6 w-6 text-white" />
      </div>

      {/* Main Content Sections */}
      <div className="relative z-10 bg-white">
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />

        {/* Footer */}
        <footer className="bg-zinc-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold">BuildMaster Construction</h3>
                <p className="text-zinc-400 mt-2">Building tomorrow, today.</p>
              </div>
              <div className="text-zinc-400">
                © {new Date().getFullYear()} BuildMaster Construction. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}

