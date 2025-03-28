"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white text-zinc-900 shadow-md py-2" : "bg-transparent text-white py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            BuildMaster
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="font-medium hover:text-amber-500 transition-colors">
              Services
            </Link>
            <Link href="#projects" className="font-medium hover:text-amber-500 transition-colors">
              Projects
            </Link>
            <Link href="#about" className="font-medium hover:text-amber-500 transition-colors">
              About
            </Link>
            <Link href="#testimonials" className="font-medium hover:text-amber-500 transition-colors">
              Testimonials
            </Link>
            <Button
              asChild
              className={`${isScrolled ? "bg-amber-500 text-white" : "bg-white text-zinc-900"} hover:bg-amber-600`}
            >
              <Link href="#contact">Contact Us</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white text-zinc-900 py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#services"
              className="font-medium hover:text-amber-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#projects"
              className="font-medium hover:text-amber-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#about"
              className="font-medium hover:text-amber-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#testimonials"
              className="font-medium hover:text-amber-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Button asChild className="bg-amber-500 text-white hover:bg-amber-600 w-full">
              <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

