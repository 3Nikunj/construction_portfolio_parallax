"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Building2, Hammer, HardHat, Ruler, Truck, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Building2 className="h-12 w-12 text-amber-500" />,
    title: "Commercial Construction",
    description: "Full-service commercial construction for offices, retail spaces, and industrial facilities.",
  },
  {
    icon: <Hammer className="h-12 w-12 text-amber-500" />,
    title: "Residential Building",
    description: "Custom home building and renovations tailored to your specific needs and preferences.",
  },
  {
    icon: <Ruler className="h-12 w-12 text-amber-500" />,
    title: "Architecture & Design",
    description: "Comprehensive architectural services from concept development to detailed construction plans.",
  },
  {
    icon: <HardHat className="h-12 w-12 text-amber-500" />,
    title: "Project Management",
    description: "Expert oversight of your construction project from start to finish, ensuring quality and timeliness.",
  },
  {
    icon: <Truck className="h-12 w-12 text-amber-500" />,
    title: "Heavy Equipment",
    description: "Specialized heavy equipment services for excavation, demolition, and site preparation.",
  },
  {
    icon: <Users className="h-12 w-12 text-amber-500" />,
    title: "Consultation",
    description: "Professional consultation services to help you plan and execute your construction project.",
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section id="services" className="py-20 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
            We offer a comprehensive range of construction services to meet all your building needs.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center text-center pt-8">
                  {service.icon}
                  <CardTitle className="mt-4 text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-zinc-600">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

