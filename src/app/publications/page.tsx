'use client'

import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import book1 from '../../../public/book1.jpeg'
import book2 from '../../../public/book2.jpeg'
import book3 from '../../../public/book3.jpeg'
import book4 from '../../../public/book4.jpeg'
import book5 from '../../../public/book5.jpeg'
import book6 from '../../../public/book6.jpeg'
import book7 from '../../../public/book7.jpeg'
import book8 from '../../../public/book8.jpeg'
import book9 from '../../../public/book9.jpeg'
import book10 from '../../../public/book10.jpeg'
import book11 from '../../../public/book11.jpeg'
import book12 from '../../../public/book12.jpeg'
import book13 from '../../../public/book13.jpeg'
import book14 from '../../../public/book14.jpeg'

const books = [
  {
    id: 1,
    title: "40 Ahadith for Kids",
    author: "Dr. Umair Mahmood Siddiqui",
    description: "A simplified collection of 40 Ahadith for children.",
    image: book1.src,
    category: "Islamic Studies"
  },
  {
    id: 2,
    title: "The Beacon Light",
    author: "Compiled by Dr. Umair Mahmood Siddiqui",
    description: "A collection of writings of Dr. Umair Mahmood Siddiqui.",
    image: book2.src,
    category: "Islamic Studies"
  },
  {
    id: 3,
    title: "Tazkira",
    author: "Dr. Umair Mahmood Siddiqui",
    description: "An insightful account of spiritual and moral values.",
    image: book3.src,
    category: "Islamic Studies"
  },
  {
    id: 4,
    title: "Sheikh Ibn Arabi",
    author: "Dr. Umair Mahmood Siddiqui",
    description: "An analysis of the life and teachings of Sheikh Ibn Arabi.",
    image: book4.src,
    category: "Biography"
  },
  {
    id: 5,
    title: "Pakistan Ka Matlab Kya?",
    author: "Dr. Umair Mahmood Siddiqui",
    description: "A discourse on the meaning and significance of Pakistan.",
    image: book5.src,
    category: "History"
  },
  {
    id: 6,
    title: "Ghazwa-e-Hind",
    author: "Dr. Umair Mahmood Siddiqui",
    description: "A discussion on the concept and implications of Ghazwa-e-Hind.",
    image: book6.src,
    category: "History"
  },
  {
    id: 7,
    title: "Muhammad: The Glory of the Ages",
    author: "Dr. Umair Mahmood Siddiqui",
    description: "A tribute to the Prophet Muhammad's (PBUH) life and legacy.",
    image: book7.src,
    category: "Biography"
  },
  {
    id: 8,
    title: "Chalees Ahadith",
    author: "Dr. Umair Mahmood Siddiqui",
    description: "A curated selection of 40 Ahadith with commentary.",
    image: book8.src,
    category: "Islamic Studies"
  },
  {
    id: 9,
    title: "Communist Challenge to Islam",
    author: "Dr. Umair Mahmood Siddiqui",
    description: "An exposition on the conflict between communism and Islam.",
    image: book9.src,
    category: "Political Islam"
  },
  {
    id: 10,
    title: "Dr. Umair Mahmood Siddiqui: The Ghazali of his Age",
    author: "Dr. Umair Mahmood Siddiqui",
    description: "A biography highlighting Dr. Umair Mahmood Siddiqui's scholarly contributions.",
    image: book10.src,
    category: "Biography"
  },
  {
    id: 11,
    title: "Islamic Jurisprudence",
    author: "Scholar Name",
    description: "A comprehensive guide to Islamic law and its principles.",
    image: book11.src,
    category: "Fiqh"
  },
  {
    id: 12,
    title: "Introduction to Islamic Economics",
    author: "Dr. Umair Mahmood Siddiqui",
    description: "An exploration of Islamic economic principles and practices.",
    image: book12.src,
    category: "Economics"
  },
  {
    id: 13,
    title: "Islamic Theology and Philosophy",
    author: "Dr. Umair Mahmood Siddiqui",
    description: "A study on the theological and philosophical traditions of Islam.",
    image: book13.src,
    category: "Philosophy"
  },
  {
    id: 14,
    title: "Revival of Muslim Thought",
    author: "Dr. Umair Mahmood Siddiqui",
    description: "A discussion on the revival of Islamic thought in the modern age.",
    image: book14.src,
    category: "Islamic Studies"
  }
]

const categories = ['All', 'Islamic Studies', 'Biography', 'History', 'Political Islam', 'Fiqh', 'Economics', 'Philosophy']

export default function BooksPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filteredBooks, setFilteredBooks] = useState(books)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const filtered = books.filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          book.description.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory

      return matchesSearch && matchesCategory
    })
    setFilteredBooks(filtered)
  }, [searchTerm, selectedCategory])

  return (
    <Layout>
      {/* Banner Section */}
      {/* <div className="relative h-[400px] overflow-hidden">
        <Image
          src="/book-banner.jpg"
          alt="Books Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transform transition-all duration-700 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                Explore Our Collection
              </h1>
              <p className={`text-xl text-gray-200 transform transition-all duration-700 delay-200 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                Discover a wealth of Islamic knowledge through our comprehensive library of books
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter Section */}
        <div className={`mb-12 transform transition-all duration-700 delay-300 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="max-w-4xl mx-auto space-y-6">
            <input
              type="search"
              placeholder="Search books..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300"
            />
            
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-amber-400 text-gray-900'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredBooks.map((book, index) => (
            <div
              key={book.id}
              className={`group relative bg-white/5 rounded-lg overflow-hidden backdrop-blur-sm transition-all duration-500 hover:scale-105 transform ${
                isLoaded 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[3/4] relative">
                <Image
                  src={book.image || "/placeholder.svg"}
                  alt={book.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm line-clamp-3">{book.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-gradient-to-b from-transparent to-black/20">
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-amber-400 transition-colors duration-300">
                  {book.title}
                </h3>
                <p className="text-white/80 text-sm">{book.author}</p>
                <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs bg-amber-400 text-gray-900 transform group-hover:scale-105 transition-transform duration-300">
                  {book.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center text-white py-12">
            <p className="text-xl">No books found matching your search criteria.</p>
          </div>
        )}
      </div>
    </Layout>
  )
}

