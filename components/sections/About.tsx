import Image from 'next/image'

export default function About() {
  return (
    <section id="o-nas" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
          O nas
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987"
              alt="Przewodnik po Warszawie"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Twój przewodnik po stolicy
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Witaj! Jestem Warszawiakiem z krwi i kości, a moją pasją jest dzielenie się
              historią i tajemnicami tego niezwykłego miasta. Od ponad 10 lat oprowadzam
              turystów po uliczkach Starówki, pokazuję ukryte dziedzińce Śródmieścia
              i opowiadam historie, których nie znajdziesz w żadnym przewodniku.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Każda wycieczka to nie tylko zwiedzanie — to podróż w czasie, pełna anegdot,
              legend i fascynujących faktów. Dostosowuję tempo i trasę do potrzeb grupy,
              bo wierzę, że najlepsze wspomnienia powstają, gdy czujesz się komfortowo.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Niezależnie czy szukasz romantycznego spaceru dla dwojga, czy wycieczki
              dla całej rodziny — zapraszam do wspólnego odkrywania Warszawy!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
