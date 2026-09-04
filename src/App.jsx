import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Story from './components/Story';
import Services from './components/Services';
import Process from './components/Process';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#171717] font-body relative selection:bg-[#E76F51] selection:text-white">
      {/* Sticky Blur Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Brands & Collaborators Marquee */}
        <Brands />

        {/* Developer's Story */}
        <Story />

        {/* Services Section ("What I Can Do") */}
        <Services />

        {/* Process Section ("My Way of Getting Things Done") */}
        <Process />

        {/* Projects Section ("A Glimpse of My Work") */}
        <Projects />

        {/* Tech Stack ("Tools & Technologies") */}
        <TechStack />

        {/* Work Experience Timeline */}
        <Experience />

        {/* FAQ Section */}
        <FAQ />

        {/* Testimonials */}
        <Testimonials />

        {/* Contact Section ("Let's Build Something Great") */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
