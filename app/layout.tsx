import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wycieczki po Warszawie | Zwiedzaj z Lokalnym Przewodnikiem',
  description: 'Odkryj magię Warszawy z lokalnym ekspertem. Wycieczki piesze po Starym Mieście, Pradze i ukrytych zakątkach stolicy. Rezerwuj online!',
  keywords: ['wycieczki Warszawa', 'przewodnik Warszawa', 'zwiedzanie Warszawy', 'Stare Miasto', 'wycieczki piesze'],
  authors: [{ name: 'Warszawa z Przewodnikiem' }],
  openGraph: {
    title: 'Wycieczki po Warszawie | Zwiedzaj z Lokalnym Przewodnikiem',
    description: 'Odkryj magię Warszawy z lokalnym ekspertem. Wycieczki piesze po Starym Mieście, Pradze i ukrytych zakątkach stolicy.',
    url: 'https://tour-website-seven.vercel.app',
    siteName: 'Warszawa z Przewodnikiem',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1519197924294-4ba991a11128?q=80&w=1200',
        width: 1200,
        height: 630,
        alt: 'Panorama Warszawy',
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wycieczki po Warszawie | Zwiedzaj z Lokalnym Przewodnikiem',
    description: 'Odkryj magię Warszawy z lokalnym ekspertem. Wycieczki piesze po Starym Mieście, Pradze i ukrytych zakątkach stolicy.',
    images: ['https://images.unsplash.com/photo-1519197924294-4ba991a11128?q=80&w=1200'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
