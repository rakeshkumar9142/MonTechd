import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { useTranslation } from 'react-i18next';


function App() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <CaseStudies />
        <Testimonials />
        <CallToAction />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>{t('footer.copyright')}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
