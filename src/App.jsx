import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Resume from './components/Resume'
import Services from './components/Services'
import Projects from './components/Projects'
import ServiceCards from './components/ServiceCards'
import CaseStudy from './components/CaseStudy'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Resume />
        <Services />
        <Projects />
        <ServiceCards />
        <CaseStudy />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
