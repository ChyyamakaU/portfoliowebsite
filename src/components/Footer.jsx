import React from 'react';
import { ArrowUp, Mail, Globe, Code2 } from 'lucide-react';

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
    <footer className="bg-white border-t border-[#E5E3DD] py-14 px-6 sm:px-8 lg:px-12 font-body relative text-[#171717]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#E5E3DD]">
        
        {/* Brand Wordmark */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <a href="#" className="text-2xl font-bold font-heading tracking-tight text-[#171717]">
            <span className="text-[#E76F51]">.</span>OXbash
          </a>
          <p className="text-xs text-[#6B6B6B]">
            Olamide Bashir &bull; Software &amp; Blockchain Developer
          </p>
        </div>

        {/* Quick Nav Links */}
        <nav className="flex flex-wrap justify-center items-center gap-6 text-xs font-semibold font-heading text-[#6B6B6B]">
          {footerNav.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#E76F51] transition-colors"
              data-cursor="Top"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 px-4 py-2 rounded-full border border-[#E5E3DD] bg-[#F8F7F4] hover:bg-[#171717] hover:text-white text-xs font-mono font-medium transition-all duration-300 shadow-2xs"
          data-cursor="Top"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B6B6B]">
        <p>&copy; {new Date().getFullYear()} Olamide Bashir. Handcrafted with intent.</p>
        <p className="font-mono text-[11px]">
          Designed with Space Grotesk &amp; Inter &bull; React &amp; Framer Motion
        </p>
      </div>
    </footer>
  );
}
