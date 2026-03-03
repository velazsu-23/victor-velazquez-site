import Hero from '@/components/Hero'
import About from '@/components/About'
import Work from '@/components/Work'
import Projects from '@/components/Projects'
import Running from '@/components/Running'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Work />
      <Projects />
      <Running />
      <Contact />
      <Footer />
    </main>
  )
}
