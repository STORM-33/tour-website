import Navigation from '@/components/ui/Navigation'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Tours from '@/components/sections/Tours'
import Gallery from '@/components/sections/Gallery'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Navigation />

      <main>
        <Hero />

        <About />

        <Tours />

        <Gallery />

        <Contact />
      </main>
    </>
  )
}
