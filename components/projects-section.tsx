"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Modern Office Complex",
    category: "Commercial",
    description: "A state-of-the-art office complex featuring sustainable design and smart building technology.",
    image: "/placeholder.svg?height=600&width=800",
    year: "2023",
  },
  {
    title: "Luxury Residential Tower",
    category: "Residential",
    description: "Premium residential tower with high-end finishes and panoramic city views.",
    image: "/placeholder.svg?height=600&width=800",
    year: "2022",
  },
  {
    title: "Shopping Mall Renovation",
    category: "Commercial",
    description: "Complete renovation and expansion of an existing shopping mall with modern amenities.",
    image: "/placeholder.svg?height=600&width=800",
    year: "2022",
  },
  {
    title: "Industrial Warehouse",
    category: "Industrial",
    description: "Large-scale industrial warehouse with advanced logistics infrastructure.",
    image: "/placeholder.svg?height=600&width=800",
    year: "2021",
  },
  {
    title: "Community Center",
    category: "Public",
    description: "Multi-purpose community center with recreational facilities and event spaces.",
    image: "/placeholder.svg?height=600&width=800",
    year: "2021",
  },
  {
    title: "Eco-Friendly Housing",
    category: "Residential",
    description: "Sustainable housing development with solar power and water conservation systems.",
    image: "/placeholder.svg?height=600&width=800",
    year: "2020",
  },
]

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length)
    scrollToProject()
  }

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
    scrollToProject()
  }

  const scrollToProject = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      })
    }
  }

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
            Explore our portfolio of successful construction projects across various sectors.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image
                src={projects[activeIndex].image || "/placeholder.svg"}
                alt={projects[activeIndex].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <Badge className="mb-2 bg-amber-500">{projects[activeIndex].category}</Badge>
                <h3 className="text-2xl font-bold text-white mb-1">{projects[activeIndex].title}</h3>
                <p className="text-white/80">{projects[activeIndex].year}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              ref={scrollRef}
            >
              <h3 className="text-2xl font-bold mb-4">{projects[activeIndex].title}</h3>
              <p className="text-zinc-600 mb-6">{projects[activeIndex].description}</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mr-3"></div>
                  <span>Completed in {projects[activeIndex].year}</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mr-3"></div>
                  <span>Category: {projects[activeIndex].category}</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mr-3"></div>
                  <span>On-time delivery</span>
                </li>
              </ul>
              <Button className="bg-amber-500 hover:bg-amber-600">
                View Project Details
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <Button variant="outline" size="icon" onClick={prevProject} className="rounded-full">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextProject} className="rounded-full">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[300px] rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <Badge className="mb-2 bg-amber-500">{project.category}</Badge>
                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-white/80">{project.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

