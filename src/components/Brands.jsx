import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: 'Blockfuse', tag: 'Web3 Infrastructure' },
  { name: 'Road Runner', tag: 'Logistics Tech' },
  { name: 'Setup Nigeria', tag: 'Developer Ecosystem' },
  { name: 'Gyda', tag: 'Fintech Platform' },
  { name: 'Seven Hills', tag: 'Venture Studio' },
  { name: 'Benue Blockchain Festival', tag: 'Web3 Conference' },
];

export default function Brands() {
  // Duplicated list for seamless infinite loop marquee animation
  const marqueeItems = [...brands, ...brands, ...brands];

  return (
    <section className="py-16 md:py-20 bg-[#F8F7F4] border-y border-[#E5E3DD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div>
            <span className="text-xs font-semibold font-heading text-[#E76F51] uppercase tracking-widest">
              Collaborations
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#171717] mt-1">
              Brands I've Worked With
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#6B6B6B] font-body max-w-xs">
            Trusted by forward-thinking web3 protocols, fintech startups, and tech communities.
          </p>
        </motion.div>
      </div>

      {/* Auto-scrolling Infinite Marquee */}
      <div className="relative w-full flex overflow-hidden py-4 select-none">
        <motion.div
          className="flex items-center gap-8 md:gap-12 whitespace-nowrap"
          animate={{ x: ['0%', '-33.333%'] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: 'linear',
          }}
        >
          {marqueeItems.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white border border-[#E5E3DD] shadow-2xs hover:border-[#E76F51] hover:shadow-md transition-all duration-300 cursor-pointer"
              data-cursor={brand.name}
            >
              {/* Brand Indicator Dot */}
              <span className="w-2 h-2 rounded-full bg-[#6B6B6B]/40 group-hover:bg-[#E76F51] transition-colors" />

              <span className="text-base sm:text-lg font-bold font-heading text-[#6B6B6B] group-hover:text-[#171717] transition-colors">
                {brand.name}
              </span>

              <span className="text-[10px] font-medium font-body uppercase tracking-wider text-[#6B6B6B]/60 group-hover:text-[#E76F51] transition-colors bg-[#F8F7F4] px-2 py-0.5 rounded border border-[#E5E3DD]">
                {brand.tag}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
