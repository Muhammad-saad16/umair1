'use client'

import { useState } from 'react'
import Layout from '../components/Layout'
import { Play } from 'lucide-react'
const videos = [
  {
    id: 1,
    thumbnail: "/event1.jpg?height=720&width=1280",
    youtubeId: "-b12v8nyhdI",
    category: "Lectures"
  },
  {
    id: 2,
    thumbnail: "/event2.jpg?height=720&width=1280",
    youtubeId: "OGd4VjoPiqU",
    category: "Sermons"
  },
  {
    id: 3,
    thumbnail: "/event3.jpg?height=720&width=1280",
    youtubeId: "zmjZbZhMH8k",
    category: "Events"
  },
  {
    id: 4,
    thumbnail: "/event4.jpg?height=720&width=1280",
    youtubeId: "QbOc5W1qnq0",
    category: "Q&A"
  },
  {
    id: 5,
    thumbnail: "/event5.jpg?height=720&width=1280",
    youtubeId: "PVH6uCXYrLk",
    category: "Lectures"
  },
  {
    id: 6,
    thumbnail: "/event6.jpg?height=720&width=1280",
    youtubeId: "CITWO2ZnnkA",
    category: "Sermons"
  }

];

export default function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Lectures', 'Sermons', 'Q&A', 'Events']

  const filteredVideos = selectedCategory === 'All' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory)

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Categories */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-amber-400 text-gray-900'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="group cursor-pointer"
              onClick={() => window.open(`https://www.youtube.com/watch?v=${video.youtubeId}`, '_blank')}
            >
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-gray-900" />
                    </div>
                  </div>
                </div>
              </div>
         
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

