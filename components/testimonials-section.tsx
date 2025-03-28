"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote:
      "BuildMaster Construction exceeded our expectations in every way. Their attention to detail and commitment to quality is unmatched in the industry.",
    author: "Sarah Johnson",
    position: "CEO, Johnson Enterprises",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    quote:
      "Working with BuildMaster on our office complex was a seamless experience. They delivered on time and within budget, with exceptional craftsmanship.",
    author: "Michael Chen",
    position: "Director, Chen Properties",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    quote:
      "The team at BuildMaster brought our vision to life with their innovative approach and technical expertise. We couldn't be happier with the results.",
    author: "Emily Rodriguez",
    position: "Architect, Rodriguez & Associates",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <section id="testimonials" className="py-20 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear what our satisfied clients have to say about working with BuildMaster
            Construction.
          </p>
        </div>

        <div
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full bg-white shadow-md hover:bg-zinc-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>

          <div className="absolute -right-8 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full bg-white shadow-md hover:bg-zinc-50"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 overflow-hidden">
            <Quote className="h-12 w-12 text-amber-500/20 mb-6" />

            <div className="relative h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <blockquote className="text-xl md:text-2xl text-zinc-700 italic mb-8">
                    "{testimonials[current].quote}"
                  </blockquote>

                  <div className="flex items-center">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonials[current].image || "/placeholder.svg"}
                        alt={testimonials[current].author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-lg">{testimonials[current].author}</div>
                      <div className="text-zinc-500">{testimonials[current].position}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  current === index ? "bg-amber-500" : "bg-zinc-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

