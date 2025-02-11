import HeroSlider from './HeroSlider'

import BiographySection from './BiographySection'

import BooksSection from './BooksSection'
import VideoSection from './VideoSection'

import TestimonialsSection from './TestimonialsSection'
import InteractionsSection from './InteractionsSection'
// import EventSection from './EventSection'
import EventPosters from './EventPosters'
import PosterSection from './PosterSection'

export default function HomePage() {
  return (
    <main>
      {/* <PopupImage /> */}
      <HeroSlider />

      <BiographySection />
      <InteractionsSection />
      <PosterSection />
      <EventPosters />
      <BooksSection />
      <VideoSection />
      {/* <GallerySection /> */}
      <TestimonialsSection />
    </main>
  )
}

