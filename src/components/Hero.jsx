
import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Cpu, Sparkles } from 'lucide-react';

export default function Hero() {
  // Container variant for staggered sequence
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.15,
      },
    },
  };

  // Item variants for text & buttons
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  // Visual graphic variant (reveals last)
  const graphicVariants = {
    hidden: { opacity: 0, scale: 0.94, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[rgb(248,247,244)] bg-noise flex items-center">

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
         
          <motion.div
            className="lg:col-span-7 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
           
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5">
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider font-heading text-[rgb(23,23,23)] bg-[hsl(0,0%,100%)] border border-[rgb(229,227,221)] rounded-full shadow-2xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[hsl(12,76%,61%)] animate-pulse" />
                Chiamaka Umunnakwe
              </span>
              <span className="text-xs font-medium text-[rgb(107,107,107)] font-body">
                / FrontEnd Developer
              </span>
            </motion.div>

            {/* 2. Hero Heading (Exact Copy) */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-[rgb(23,23,23)] leading-[1.08] tracking-tight"
            >
              Frontend Developer building modern, scalable applications across web, and mobile.
            </motion.h1>

            {/* Subtext (Exact Copy) */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-[rgb(107,107,107)] font-body leading-relaxed max-w-2xl"
            >
              Let's collaborate, and build exciting projects together.
            </motion.p>

            {/* 3. Buttons (Primary & Secondary) */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary Button */}
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-[rgb(231,111,81)] text-white font-medium font-heading hover:bg-[rgb(212,91,61)] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                data-cursor="Contact"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Secondary Button */}
              <a
                href="/cv.pdf"
                download="Olamide_Bashir_CV.pdf"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-white border border-[rgb(23,23,23)] text-[rgb(23,23,23)] font-medium font-heading hover:bg-[rgb(23,23,23)] hover:text-white transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-2xs"
                data-cursor="CV"
              >
                <Download className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                <span>Download CV</span>
              </a>
            </motion.div>

            {/* Stats Block (Inline / Micro-card) */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-[rgb(229,227,221)] grid grid-cols-2 sm:grid-cols-2 max-w-md gap-6"
            >
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-bold font-heading text-[rgb(23,23,23)]">
                  8<span className="text-[rgb(231,111,81)]">+</span>
                </span>
                <span className="text-xs sm:text-sm text-[rgb(107,107,107)] font-body mt-0.5">
                  Months Experience
                </span>
              </div>

              <div className="flex flex-col border-l border-[rgb(229,227,221)] pl-6">
                <span className="text-3xl sm:text-4xl font-bold font-heading text-[rgb(23,23,23)]">
                  30<span className="text-[rgb(231,111,81)]">+</span>
                </span>
                <span className="text-xs sm:text-sm text-[rgb(107,107,107)] font-body mt-0.5">
                  Projects Completed
                </span>
              </div>
            </motion.div>
          </motion.div>

         
          <motion.div
            className="lg:col-span-5 relative"
            variants={graphicVariants}
            initial="hidden"
            animate="visible"
          >
           
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Background Offset Card (Accent Border Touch) */}
              <div className="absolute -inset-3 bg-accent/15 rounded-2xl rotate-2 transform transition-transform group-hover:rotate-1" />

              {/* Main Visual Code Card */}
              <div className="relative bg-white rounded-xl p-6 sm:p-8 border border-[rgb(23,23,23)] shadow-[6px_6px_0px_0px_#171717] space-y-6">
                
                {/* Header Window Controls */}
                <div className="flex items-center justify-between border-b border-[rgb(229,227,221)] pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[rgb(231,111,81)]" />
                    <span className="w-3 h-3 rounded-full bg-ink/20" />
                    <span className="w-3 h-3 rounded-full bg-ink/20" />
                  </div>
                  
                </div>

                
                <div className="space-y-3 font-mono text-xs text-[rgb(23,23,23)] bg-[rgb(248,247,244)] p-4 rounded-lg border border-[rgb(229,227,221)]">
                  <div className="flex items-center justify-between text-[rgb(107,107,107)]">
                    <span>// Contract Deployment</span>
                    <span className="text-[hsl(12,76%,61%)] font-semibold">● MAINNET</span>
                  </div>
                  <div>
                    <span className="text-[rgb(231,111,81)]">const</span> developer = &#123;
                  </div>
                  <div className="pl-4">
                    name: <span className="text-[rgb(23,23,23)] font-semibold">"Chiamaka Umunnakwe"</span>,
                  </div>
                  <div className="pl-4">
                    stack: [<span className="text-[rgb(231,111,81)]">"Tailwind"</span>, <span className="text-[rgb(231,111,81)]">"React"</span>, <span className="text-[rgb(231,111,81)]">"Node.js"</span>],
                  </div>
                  <div className="pl-4">
                    status: <span className="text-emerald-600 font-semibold">"Ready to Build"</span>
                  </div>
                  <div>&#125;;</div>
                </div>

                
                <div className="grid grid-cols-2 gap-3">
                 

                  <div className="p-3 bg-[rgb(248,247,244)] rounded-lg border border-[rgb(229,227,221)] flex items-center gap-2.5">
                    <div className="p-1.5 rounded bg-white text-[rgb(23,23,23)] border border-[rgb(229,227,221)]">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold font-heading text-[rgb(23,23,23)]">Fullstack Apps</h4>
                      <p className="text-[10px] text-[rgb(107,107,107)]">React & Next.js</p>
                    </div>
                  </div>
                </div>

                
                <motion.div
                  className="absolute -bottom-5 -right-3 bg-[rgb(23,23,23)] text-white px-4 py-2 rounded-lg text-xs font-heading font-semibold flex items-center gap-2 shadow-lg -rotate-3"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  data-cursor="Web3"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[rgb(231,111,81)]" />
                  <span>Frontend &amp; Developer</span>
                </motion.div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
