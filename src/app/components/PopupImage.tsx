'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const posts = [
  {
    id: 1,
    title: "Welcome to our Islamic Learning Center",
    content: "Explore our vast collection of Islamic knowledge and join our upcoming events.",
    image: "/event1.jpg?height=600&width=800"
  },
  {
    id: 2,
    title: "New Course: Understanding Tafsir",
    content: "Join our upcoming course on Quranic exegesis, starting next month.",
    image: "/event2.jpg?height=600&width=800"
  },
  {
    id: 3,
    title: "Ramadan Preparations",
    content: "Get ready for the blessed month with our special Ramadan lecture series.",
    image: "/event3.jpg?height=600&width=800"
  }
]

export default function PopupImage() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentPostIndex, setCurrentPostIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 3000) // Show popup after 3 seconds

    return () => clearTimeout(timer)
  }, [])

  const nextPost = () => {
    setCurrentPostIndex((prevIndex) => (prevIndex + 1) % posts.length)
  }

  const prevPost = () => {
    setCurrentPostIndex((prevIndex) => (prevIndex - 1 + posts.length) % posts.length)
  }

  if (!isOpen) return null

  const currentPost = posts[currentPostIndex]

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="relative bg-white rounded-lg overflow-hidden max-w-4xl w-full">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-10"
          aria-label="Close popup"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 relative">
            <Image
              src={currentPost.image || "/placeholder.svg"}
              alt={currentPost.title}
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{currentPost.title}</h2>
              <p className="text-gray-600">{currentPost.content}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={prevPost}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                aria-label="Previous post"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <span className="text-gray-500">
                {currentPostIndex + 1} / {posts.length}
              </span>
              <button
                onClick={nextPost}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                aria-label="Next post"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

