import TourCard from '@/components/ui/TourCard'

const tours = [
  {
    title: 'Stare Miasto',
    description:
      'Klasyczny spacer po sercu Warszawy. Odkryj Rynek Starego Miasta, Zamek Królewski, Kolumnę Zygmunta i ukryte zaułki pełne historii.',
    duration: '2-3 godziny',
    price: 'od 150 zł/os.',
  },
  {
    title: 'Warszawa Nocą',
    description:
      'Magiczna wycieczka po zmroku. Oświetlone zabytki, klimatyczne uliczki i opowieści o nocnym życiu stolicy dawniej i dziś.',
    duration: '2 godziny',
    price: 'od 180 zł/os.',
  },
  {
    title: 'Praga i Street Art',
    description:
      'Prawobrzeżna Warszawa pełna autentyczności. Historyczne kamienice, artystyczne murale i miejsca, które znają tylko lokalni.',
    duration: '2-3 godziny',
    price: 'od 140 zł/os.',
  },
  {
    title: 'Śladami Historii',
    description:
      'Wędrówka przez burzliwe dzieje Warszawy — od czasów królewskich, przez powstania, po odbudowę. Dla miłośników historii.',
    duration: '3-4 godziny',
    price: 'od 200 zł/os.',
  },
]

export default function Tours() {
  return (
    <section id="wycieczki" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
          Wycieczki
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Wybierz trasę, która Cię interesuje. Każda wycieczka może być dostosowana
          do Twoich potrzeb — dla par, rodzin lub większych grup.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((tour) => (
            <TourCard
              key={tour.title}
              title={tour.title}
              description={tour.description}
              duration={tour.duration}
              price={tour.price}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
