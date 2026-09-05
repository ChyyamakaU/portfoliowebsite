import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-canvas backdrop-blur-md border-b border-line py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Wordmark Logo */}
        <a
          href="#"
          className="group flex items-center text-xl sm:text-2xl font-bold tracking-tight font-heading text-[rgb(23,23,23)]"
          data-cursor="Home"
        >
          <span className="text-[rgb(231,111,81)] transition-transform duration-300 group-hover:scale-125 inline-block mr-0.5">
            A
          </span>
        maka
        </a>

        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-[rgb(23,23,23)] hover:text-[rgb(23,23,23)] transition-colors py-1 font-body"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-cursor="Go"
            >
              {link.name}
              
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 w-full bg-[rgb(231,111,81)] origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredIndex === idx ? 1 : 0 }}
                transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
              />
            </a>
          ))}

          
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-1.5 px-5 py-2.5 rounded-md text-sm font-medium bg-[#171717] text-white hover:bg-[#E76F51] transition-colors duration-300 font-heading shadow-xs overflow-hidden"
            data-cursor="Contact"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </nav>

        
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-[rgb(23,23,23)] hover:bg-line/40 focus:outline-none transition-colors"
          aria-label="Toggle Menu"
          data-cursor="Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

    
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 top-15 bg-[rgb(248,247,244)] z-30 flex flex-col px-8 py-10 md:hidden border-t border-[#E5E3DD]"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.1 },
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
              className="flex flex-col gap-6 my-auto"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -20 },
                  }}
                  className="text-3xl font-bold font-heading text-[hsl(0,0%,9%)] hover:text-[rgb(231,111,81)] transition-colors flex items-center justify-between border-b border-[#E5E3DD]/60 pb-3"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-6 h-6 text-[rgb(231,111,81)]" />
                </motion.a>
              ))}

              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 20 },
                }}
                className="pt-6"
              >
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-4 text-center rounded-md bg-[rgb(231,111,81)] text-white font-bold font-heading text-lg shadow-md block"
                >
                  Let's Talk
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
