'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const interactions = [
  {
    id: 1,
    leader: "King Salman bin Abdul Aziz Al Saud",
    description: "Dr. Umair Mahmood Siddiqui being welcomed by the Custodian of the Two Holy Mosques, King Salman bin Abdul Aziz Al Saud of Saudi Arabia",
    image: "/meet1.jpg",
    country: "Saudi Arabia"
  },
  {
    id: 2,
    leader: "Dato Seri Anwar Ibrahim",
    description: "Dr. Umair Mahmood Siddiqui in discussion with Dato Seri Anwar Ibrahim the Prime Minister of Malaysia at Seri Perdana the official Residence of the Prime Minister of Malaysia, Putrajaya, in 2024.",
    image: "/meet2.jpg",
    country: "Malaysia"
  },
  {
    id: 3,
    leader: "Mufti Sher Muhammad Khan",
    description: "Dr. Umair Mahmood Siddiqui in conversation with Shaikh Tamim Bin Hamad Al Thani, Ameer of Qatar",
    image: "/mee3.jpg",
    country: "Qatar"
  }
]

export default function InteractionsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('interactions-section')
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  return (
    <section id="interactions-section" className="py-24 bg-gradient-to-br from-[#05445E] via-[#189AB4] to-[#05445E]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-4 transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Interactions with Personalities
          </h2>
          <div className={`w-24 h-1 bg-amber-400 mx-auto transform transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`} />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interactions.map((interaction, index) => (
            <div
              key={interaction.id}
              className={`group bg-white/5 rounded-lg overflow-hidden backdrop-blur-sm transform transition-all duration-1000 hover:scale-105 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={interaction.image || "/placeholder.svg"}
                  alt={`Meeting with ${interaction.leader}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                  {interaction.leader}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {interaction.description}
                </p>
                <span className="inline-block mt-4 px-3 py-1 bg-amber-400 text-gray-900 text-sm rounded-full transform group-hover:scale-105 transition-transform duration-300">
                  {interaction.country}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

