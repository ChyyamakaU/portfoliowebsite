
import { ArrowUp } from 'lucide-react';

const footerNav = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-[rgb(229,227,221)] py-14 px-6 sm:px-8 lg:px-12 font-body relative text-[#171717]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[rgb(229,227,221)]">
        
        {/* Brand Wordmark */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <a href="#" className="text-2xl font-bold font-heading tracking-tight text-[rgb(23,23,23)]">
            <span className="text-[rgb(231,111,81)]">.</span>Amaka
          </a>
          <p className="text-xs text-[rgb(107,107,107)]">
            Chiamaka Umunnakwe &bull; FrontEnd Software Developer
          </p>
        </div>

       
        <nav className="flex flex-wrap justify-center items-center gap-6 text-xs font-semibold font-heading text-[rgb(107,107,107)]">
          {footerNav.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[rgb(231,111,81)] transition-colors"
              data-cursor="Top"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 px-4 py-2 rounded-full border border-[rgb(229,227,221)] bg-[rgb(248,247,244)] hover:bg-[rgb(23,23,23)] hover:text-white text-xs font-mono font-medium transition-all duration-300 shadow-2xs"
          data-cursor="Top"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[rgb(107,107,107)]">
        <p>&copy; {new Date().getFullYear()} Chiamaka Umunnakwe. Handcrafted with intent.</p>
        <p className="font-mono text-[11px]">
          Designed with Space Grotesk &amp; Inter &bull; React &amp; Framer Motion
        </p>
      </div>
    </footer>
  );
}
