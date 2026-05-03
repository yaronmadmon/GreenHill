import './index.css'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import About        from './components/About'
import Services     from './components/Services'
import HowItWorks   from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Contact      from './components/Contact'
import Footer       from './components/Footer'

function Fade({ from, to }) {
  return (
    <div
      aria-hidden="true"
      style={{ background: `linear-gradient(to bottom, ${from}, ${to})` }}
      className="h-4 -mt-1 -mb-1"
    />
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Fade from="#1E3A2F" to="#F7F6F3" />
        <About />
        <Fade from="#F7F6F3" to="#ffffff" />
        <Services />
        <Fade from="#ffffff" to="#1E3A2F" />
        <HowItWorks />
        <Fade from="#1E3A2F" to="#F7F6F3" />
        <Testimonials />
        <Fade from="#F7F6F3" to="#1E3A2F" />
        <Contact />
        <Fade from="#1E3A2F" to="#0A0A0A" />
      </main>
      <Footer />
    </>
  )
}
