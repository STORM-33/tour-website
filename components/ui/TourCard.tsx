interface TourCardProps {
  title: string
  description: string
  duration: string
  price?: string
}

export default function TourCard({ title, description, duration, price }: TourCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>

        <p className="text-gray-600 leading-relaxed mb-4">{description}</p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {duration}
          </span>
          {price && <span className="font-medium text-gray-700">{price}</span>}
        </div>

        <a
          href="#kontakt"
          className="block w-full text-center py-3 px-4 bg-emerald-600 text-white rounded-lg font-medium transition-colors duration-200 hover:bg-emerald-700"
        >
          Zarezerwuj
        </a>
      </div>
    </div>
  )
}
