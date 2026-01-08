'use client'

import { useState } from 'react'
import Image from 'next/image'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=600&h=400&fit=crop',
    alt: 'Stare Miasto w Warszawie',
  },
  {
    src: 'https://images.unsplash.com/photo-1607427293702-036707e22197?w=600&h=400&fit=crop',
    alt: 'Pałac Kultury i Nauki',
  },
  {
    src: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=400&fit=crop',
    alt: 'Park Łazienkowski',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    alt: 'Bulwary Wiślane',
  },
  {
    src: 'https://images.unsplash.com/photo-1573158926991-3ab8d3cfc4f2?w=600&h=400&fit=crop',
    alt: 'Murale Pragi',
  },
  {
    src: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=600&h=400&fit=crop',
    alt: 'Zamek Królewski',
  },
  {
    src: 'https://images.unsplash.com/photo-1571942676516-bcab84649e44?w=600&h=400&fit=crop',
    alt: 'Krakowskie Przedmieście',
  },
  {
    src: 'https://images.unsplash.com/photo-1548345680-f5475ea5df84?w=600&h=400&fit=crop',
    alt: 'Nowe Miasto',
  },
]

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    } else {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }
  }

  return (
    <section id="galeria" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
          Galeria
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Chwile uchwycone podczas naszych wycieczek. Warszawa jest piękna —
          przekonaj się sam!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={image.src}
              onClick={() => openLightbox(index)}
              className="relative aspect-[3/2] overflow-hidden rounded-lg group cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              closeLightbox()
            }}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors cursor-pointer"
            aria-label="Zamknij"
          >
            ×
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateLightbox('prev')
            }}
            className="absolute left-4 text-white text-4xl hover:text-gray-300 transition-colors cursor-pointer p-2"
            aria-label="Poprzednie zdjęcie"
          >
            ‹
          </button>

          <div
            className="relative max-w-4xl max-h-[80vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[currentImage].src.replace('w=600&h=400', 'w=1200&h=800')}
              alt={images[currentImage].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
            <p className="absolute bottom-0 left-0 right-0 text-center text-white bg-black/50 py-2">
              {images[currentImage].alt}
            </p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateLightbox('next')
            }}
            className="absolute right-4 text-white text-4xl hover:text-gray-300 transition-colors cursor-pointer p-2"
            aria-label="Następne zdjęcie"
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}
