'use client'

import { useState } from 'react'

const navLinks = [
  { href: '#o-nas', label: 'O nas' },
  { href: '#wycieczki', label: 'Wycieczki' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showDisclaimer, setShowDisclaimer] = useState(true)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      {/* Disclaimer Banner */}
      {showDisclaimer && (
        <div className="bg-amber-50 border-b-2 border-amber-200 py-2 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex-1"></div>
            <p className="text-xs sm:text-sm text-amber-900 text-center flex-shrink">
              <strong>PL:</strong> To jest przykładowa wersja strony. Wszystkie treści zostały wygenerowane przez sztuczną inteligencję.
              <span className="mx-2 sm:mx-3">•</span>
              <strong>RU:</strong> Это демонстрационная версия сайта. Все тексты сгенерированы искусственным интеллектом.
            </p>
            <button
              onClick={() => setShowDisclaimer(false)}
              className="flex-shrink-0 ml-4 p-2 rounded-md bg-amber-200 hover:bg-amber-300 text-amber-900 transition-all hover:scale-110"
              aria-label="Close disclaimer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold text-primary-700">
            Warszawa Tours
          </a>

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-primary-600"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100">
            <ul className="py-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
