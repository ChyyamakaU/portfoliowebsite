import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Olamide is an exceptionally rare engineer who bridges complex smart contract architecture with beautiful, seamless user interfaces. His work on our liquid staking protocol was pivotal to our launch.",
    name: "Dr. Kelvin Audu",
    role: "Founder & Technical Director",
    company: "Blockfuse Labs",
    avatar: "KA",
  },
  {
    quote: "Working with Olamide on our real-time logistics telemetry engine saved us months of development. He writes incredibly clean TypeScript and delivers high-performance backend systems.",
    name: "Sarah Chen",
    role: "VP of Product",
    company: "Road Runner Technologies",
    avatar: "SC",
  },
  {
    quote: "His dedication to open-source and developer education in West Africa is unmatched. Olamide built our event and grant management infrastructure with remarkable speed and precision.",
    name: "Terna Benjamin",
    role: "Ecosystem Lead",
    company: "Benue Blockchain Festival",
    avatar: "TB",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const active = testimonials[current];

  return (
    <section className="py-24 md:py-32 bg-[#F8F7F4] bg-noise relative overflow-hidden border-t border-[#E5E3DD]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold font-heading text-[#E76F51] uppercase tracking-widest">
            Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#171717] mt-2">
            Collaborator Voices
          </h2>
        </motion.div>

        {/* Featured Large Single Quote Card */}
        <div className="relative mx-auto">
          {/* Offset Background Accent Card */}
          <div className="absolute -inset-3 bg-[#171717] rounded-2xl rotate-1 transform pointer-events-none" />

          {/* Main Card */}
          <div className="relative bg-white rounded-2xl p-8 sm:p-12 border border-[#171717] shadow-xl overflow-hidden min-h-[320px] flex flex-col justify-between">
            
            <Quote className="w-12 h-12 text-[#E76F51]/20 absolute top-6 right-6 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-[#E76F51]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-lg sm:text-2xl font-body font-normal text-[#171717] leading-relaxed italic">
                  "{active.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-[#E5E3DD]">
                  <div className="w-12 h-12 rounded-full bg-[#171717] text-white font-bold font-heading flex items-center justify-center text-sm border border-[#E76F51]">
                    {active.avatar}
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-heading text-[#171717]">
                      {active.name}
                    </h4>
                    <p className="text-xs text-[#6B6B6B] font-body">
                      {active.role} &bull; <span className="text-[#E76F51]">{active.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Controls */}
            <div className="mt-8 pt-4 flex items-center justify-between border-t border-[#E5E3DD]/60">
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === current ? 'w-8 bg-[#E76F51]' : 'w-2 bg-[#E5E3DD]'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2.5 rounded-md border border-[#E5E3DD] bg-[#F8F7F4] text-[#171717] hover:bg-[#171717] hover:text-white transition-colors"
                  aria-label="Previous quote"
                  data-cursor="Prev"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2.5 rounded-md border border-[#E5E3DD] bg-[#F8F7F4] text-[#171717] hover:bg-[#171717] hover:text-white transition-colors"
                  aria-label="Next quote"
                  data-cursor="Next"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
