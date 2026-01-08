import Navigation from '@/components/ui/Navigation'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'

export default function Home() {
  return (
    <>
      <Navigation />

      <main>
        <Hero />

        <About />

        {/* Wycieczki Section */}
        <section id="wycieczki" className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Wycieczki</h2>
            <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Treść sekcji "Wycieczki"</p>
            </div>
          </div>
        </section>

        {/* Galeria Section */}
        <section id="galeria" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Galeria</h2>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Treść sekcji "Galeria"</p>
            </div>
          </div>
        </section>

        {/* Kontakt Section */}
        <section id="kontakt" className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Kontakt</h2>
            <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Treść sekcji "Kontakt"</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
