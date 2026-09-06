import  "./App.css"
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import Brands from './components/Brands';
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
    <div className="min-h-screen bg-[rgb(248,247,244)] text-[rgb(23,23,23)] font-body relative selection:bg-[rgb(231,111,81)] selection:text-white">
     
      <Navbar />

    
      <main>
       
        <Hero />

      
        {/* <Brands /> */}

       
        <Story />

       
        <Services />

        <Process />

     
        <Projects />

      
        <TechStack />

     
        <Experience />

       
        <FAQ />

        
        <Testimonials />

      
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
