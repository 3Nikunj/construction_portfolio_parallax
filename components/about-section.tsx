"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Award, Clock, Users, Briefcase } from "lucide-react"

const stats = [
  { icon: <Clock className="h-8 w-8 text-amber-500" />, value: "25+", label: "Years Experience" },
  { icon: <Briefcase className="h-8 w-8 text-amber-500" />, value: "500+", label: "Projects Completed" },
  { icon: <Users className="h-8 w-8 text-amber-500" />, value: "150+", label: "Team Members" },
  { icon: <Award className="h-8 w-8 text-amber-500" />, value: "30+", label: "Industry Awards" },
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-zinc-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About BuildMaster Construction</h2>
            <div className="w-20 h-1 bg-amber-500 mb-6"></div>
            <p className="text-zinc-300 mb-6">
              For over 25 years, BuildMaster Construction has been at the forefront of the construction industry,
              delivering exceptional building solutions across commercial, residential, and industrial sectors.
            </p>
            <p className="text-zinc-300 mb-6">
              Our team of highly skilled professionals is committed to excellence, innovation, and sustainability in
              every project we undertake. We pride ourselves on our attention to detail, quality craftsmanship, and
              ability to deliver projects on time and within budget.
            </p>
            <p className="text-zinc-300 mb-8">
              At BuildMaster, we believe in building not just structures, but lasting relationships with our clients
              based on trust, transparency, and exceptional service.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold text-amber-500 mb-1">{stat.value}</div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div style={{ y, opacity }} className="relative h-[500px] rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=800&width=600" alt="Construction team" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <blockquote className="italic text-lg">"We don't just build structures; we build futures."</blockquote>
              <div className="mt-2 font-semibold">— John Doe, Founder & CEO</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

