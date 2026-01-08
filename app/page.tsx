import Navigation from '@/components/ui/Navigation'

export default function Home() {
  return (
    <>
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-50 to-white">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-900 mb-4">
              Wycieczki po Warszawie
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Odkryj piękno stolicy z lokalnymi przewodnikami
            </p>
          </div>
        </section>

        {/* O nas Section */}
        <section id="o-nas" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">O nas</h2>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Treść sekcji "O nas"</p>
            </div>
          </div>
        </section>

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
