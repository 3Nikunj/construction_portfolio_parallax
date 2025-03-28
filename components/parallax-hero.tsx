"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ParallaxHero() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={heroRef} className="relative h-screen w-full overflow-hidden">
      {/* Background Layer - Moves slower */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Construction site background"
          fill
          priority
          className="object-cover brightness-50"
        />
      </div>

      {/* Middle Layer - Buildings/Skyline - Moves at medium speed */}
      <div
        className="absolute inset-0 z-10"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Construction equipment silhouette"
          fill
          className="object-cover object-bottom opacity-60"
        />
      </div>

      {/* Foreground Layer - Construction Equipment - Moves faster */}
      <div
        className="absolute inset-0 z-20"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Construction crane"
          fill
          className="object-cover object-bottom opacity-80"
        />
      </div>

      {/* Content Layer - Fixed position */}
      <div className="absolute inset-0 z-30 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6"
            style={{
              textShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
            }}
          >
            Building The Future
          </h1>
          <p
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
            style={{
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Innovative construction solutions for commercial and residential projects
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8">
              Our Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-zinc-900 font-bold px-8"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

