import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'What kind of projects do you take on?',
    a: "I specialize in frontEnd web applications.",
  },
  {
    q: 'Do you work with startups or only established companies?',
    a: "I work with both! I love helping early-stage founders turn sketches into production-grade MVPs, as well as collaborating with established teams.",
  },
  {
    q: "What's your typical project timeline?",
    a: 'Scope dictates speed. A focused MVP usually takes 2–4 weeks, while larger enterprise software suites range from 6–12 weeks. I operate in transparent sprints with weekly milestone demos.',
  },
  
  {
    q: 'How do we get started working together?',
    a: "Drop me a message through the contact form or email me directly at amakaumunna90@gmail.com. We'll schedule a quick 20-minute discovery call to discuss your goals, scope, and technical roadmap.",
  },
  {
    q: "What's your tech stack preference for new projects?",
    a: 'React and Next.js paired with Tailwind CSS and Framer Motion.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0); // Default first question open

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#F8F7F4] relative overflow-hidden border-t border-[#E5E3DD]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold font-heading text-[#E76F51] uppercase tracking-widest inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            Common Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#171717] mt-2">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#6B6B6B] font-body mt-3">
            Clear answers regarding technical scope, process, and working agreements.
          </p>
        </motion.div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white rounded-xl border border-[#E5E3DD] overflow-hidden shadow-2xs transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-lg sm:text-xl text-[#171717] hover:text-[#E76F51] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E76F51]"
                  aria-expanded={isOpen}
                  data-cursor="Toggle"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#E76F51]">0{idx + 1}.</span>
                    <span>{faq.q}</span>
                  </span>

                  <div className={`p-1.5 rounded-full border border-[#E5E3DD] transition-all duration-300 ${isOpen ? 'bg-[#E76F51] text-white rotate-180' : 'bg-[#F8F7F4] text-[#171717]'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#6B6B6B] font-body leading-relaxed border-t border-[#E5E3DD]/50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
