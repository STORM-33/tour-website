import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1519197924294-4ba991a11128?q=80&w=2069"
        alt="Panorama Warszawy"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
          Warszawa z Przewodnikiem
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Odkryj magię stolicy z lokalnym ekspertem
        </p>
        <a
          href="#kontakt"
          className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          Zarezerwuj wycieczkę
        </a>
      </div>
    </section>
  )
}
