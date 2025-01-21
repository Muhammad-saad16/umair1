import Image from 'next/image'
import Link from 'next/link'
import banner from '../../../Public/new-banner1.jpg'

export default function BiographySection() {
    return (
        <section className="py-24 bg-gradient-to-br from-[#05445E] via-[#189AB4] to-[#05445E]">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="relative w-full h-[300px] md:h-[500px] lg:h-[500px] mb-12 rounded-lg overflow-hidden">
                        <Image
                            src={banner}
                            alt="Dr. Ahmad Al-Rashid Banner"
                            fill
                            className="bj-cover"
                        />

                    </div>
                    <div className="flex justify-center">
  <Link 
    href="/about" 
    className="inline-block px-8 py-3 bg-amber-500 text-white font-semibold rounded-full hover:bg-amber-600 transition-colors"
  >
   More About Dr. Umair Mehmood Siddiqui
  </Link>
</div>

                </div>
            </div>
        </section>
    )
}

