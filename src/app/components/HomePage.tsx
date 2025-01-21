import HeroSlider from './HeroSlider'

import BiographySection from './BiographySection'

import BooksSection from './BooksSection'
import VideoSection from './VideoSection'

import TestimonialsSection from './TestimonialsSection'
import InteractionsSection from './InteractionsSection'

export default function HomePage() {
  return (
    <main>
      {/* <PopupImage /> */}
      <HeroSlider />
      {/* <AboutSection /> */}
      <BiographySection />
      <InteractionsSection />
      <BooksSection />
      <VideoSection />
      {/* <GallerySection /> */}
      <TestimonialsSection />
    </main>
  )
}

