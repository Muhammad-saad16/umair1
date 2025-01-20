'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    image: "/p1.jpg?height=1080&width=1920",
    // title: "Journey of Knowledge",
    // description: "Discover the depths of Islamic wisdom"
  },
  {
    id: 2,
    image: "/p10.jpg?height=1080&width=1920",
    // title: "Spiritual Growth",
    // description: "Embark on a path of enlightenment"
  },
  {
    id: 3,
    image: "/p8.jpg?height=1080&width=1920",
    // title: "Islamic Heritage",
    // description: "Preserving and sharing our rich traditions"
  },
  {
    id: 4,
    image: "/p3.jpg?height=1080&width=1920",
    // title: "Islamic Heritage",
    // description: "Preserving and sharing our rich traditions"
  },
  {
    id: 5,
    image: "/p2.jpg?height=1080&width=1920",
    // title: "Islamic Heritage",
    // description: "Preserving and sharing our rich traditions"
  },
  {
    id: 6,
    image: "/p5.jpg?height=1080&width=1920",
    // title: "Islamic Heritage",
    // description: "Preserving and sharing our rich traditions"
  }
]

const eventImages = [
  { id: 1, src: "/event1.jpg?height=300&width=400", alt: "" },
  { id: 2, src: "/event7.jpg?height=300&width=400", alt: "" },
  { id: 3, src: "/event8.jpg?height=300&width=400", alt: "" },
  { id: 4, src: "/event2.jpg?height=300&width=400", alt: "" },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-screen w-full overflow-hidden flex">
      {/* Main Slider */}
      <div className="flex-grow relative">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt="Islamic Event"
              fill
              className="bg-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#05445E]/20 to-transparent" />
            
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl space-y-6">
                
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <div className="absolute inset-y-0 left-0 flex items-center justify-between p-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center justify-between p-4">
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-8 left-0 right-0">
          <div className="flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-8 bg-amber-400' 
                    : 'bg-white/50 hover:bg-white'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Event Images Sidebar */}
      <div className="hidden lg:block w-80 bg-[#05445E]/90 overflow-y-auto">
        <h3 className="text-2xl font-semibold text-white p-6">Latest Events</h3>
        <div className="space-y-4 p-4">
          {eventImages.map((event) => (
            <div key={event.id} className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={event.src}
                alt={event.alt}
                fill
                className="bg-cover"
              />
              <div className="absolute inset-0 flex items-end">
                <p className="text-white p-2 text-sm">{event.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

