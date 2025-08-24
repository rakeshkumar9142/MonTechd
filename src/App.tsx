import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import CaseStudies from './components/CaseStudies'
import Testimonials from './components/Testimonials'
import CallToAction from './components/CallToAction'
import Contact from './components/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <CaseStudies />
        <Testimonials />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
