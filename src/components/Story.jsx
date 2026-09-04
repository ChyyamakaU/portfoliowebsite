import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Database, Cpu, Terminal, CheckCircle2 } from 'lucide-react';

export default function Story() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-[#F8F7F4] relative overflow-hidden border-t border-[#E5E3DD]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Developer Photo / Visual Card with Mask Reveal */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Handcrafted Accent Offset Border */}
              <div className="absolute -inset-4 bg-[#E76F51]/20 rounded-2xl -rotate-2 transform transition-transform group-hover:rotate-0" />
              
              {/* Main Card Frame */}
              <div className="relative rounded-2xl bg-white p-4 border border-[#171717] shadow-[8px_8px_0px_0px_#171717] overflow-hidden">
                
                {/* Visual Avatar / Photo Graphic */}
                <div className="relative h-96 sm:h-[420px] rounded-xl overflow-hidden bg-[#171717] flex flex-col justify-end p-6 group">
                  {/* Solid Overlay */}
                  <div className="absolute inset-0 bg-[#171717]/40 z-10" />
                  
                  {/* Custom Graphic Placeholder / Photo Visual */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-44 h-44 rounded-full bg-[#E76F51]/20 border-2 border-[#E76F51] flex items-center justify-center relative">
                      <User className="w-24 h-24 text-white/90" />
                      <div className="absolute inset-0 rounded-full border border-white/20 animate-ping" />
                    </div>
                  </div>

                  {/* Photo Foreground Content */}
                  <div className="relative z-20 space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E76F51] text-white text-xs font-bold font-heading">
                      <Terminal className="w-3.5 h-3.5" />
                      Olamide Bashir (.OXbash)
                    </div>
                    <p className="text-xs text-white/80 font-mono">
                      Lagos / Remote &bull; Fullstack &amp; Smart Contract Dev
                    </p>
                  </div>
                </div>

                {/* Handcrafted Bottom Tag */}
                <div className="mt-4 pt-3 border-t border-[#E5E3DD] flex items-center justify-between px-2 text-xs font-mono text-[#6B6B6B]">
                  <span>EXP: 5+ YEARS</span>
                  <span className="text-[#E76F51] font-semibold">● ACTIVE CONTRIBUTOR</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Developer Story Text Block */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Header Tag */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2">
              <span className="text-xs font-semibold font-heading text-[#E76F51] uppercase tracking-widest">
                About Me
              </span>
            </motion.div>

            {/* Section Title */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#171717] tracking-tight leading-tight"
            >
              Developer's Story
            </motion.h2>

            {/* Exact Copy Paragraphs */}
            <motion.div variants={itemVariants} className="space-y-5 text-base sm:text-lg text-[#6B6B6B] font-body leading-relaxed">
              
              <p className="text-[#171717] font-medium border-l-2 border-[#E76F51] pl-4">
                I'm a Software &amp; Blockchain Developer and an active open-source contributor with over 5 years of experience creating high-performance, responsive cross-platform applications.
              </p>

              <p>
                I specialize in designing seamless user interfaces using Next.js and React, building robust backend systems with Node.js and PostgreSQL, and engineering scalable blockchain-integrated dApps.
              </p>

              <p>
                My passion lies in writing clean, maintainable code and delivering exceptional user experiences. When I'm not coding, I explore new technologies, contribute to open-source projects, and share knowledge with the developer community.
              </p>

            </motion.div>

            {/* Core Competency Chips */}
            <motion.div variants={itemVariants} className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-white border border-[#E5E3DD] shadow-2xs">
                <Code2 className="w-5 h-5 text-[#E76F51] mb-2" />
                <h4 className="text-sm font-bold font-heading text-[#171717]">Frontend Excellence</h4>
                <p className="text-xs text-[#6B6B6B] mt-1 font-body">React, Next.js, Tailwind, Framer</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E5E3DD] shadow-2xs">
                <Database className="w-5 h-5 text-[#171717] mb-2" />
                <h4 className="text-sm font-bold font-heading text-[#171717]">Backend &amp; Cloud</h4>
                <p className="text-xs text-[#6B6B6B] mt-1 font-body">Node.js, PostgreSQL, REST APIs</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E5E3DD] shadow-2xs">
                <Cpu className="w-5 h-5 text-[#E76F51] mb-2" />
                <h4 className="text-sm font-bold font-heading text-[#171717]">Web3 &amp; Smart Contracts</h4>
                <p className="text-xs text-[#6B6B6B] mt-1 font-body">Solidity, EVM, Ethers, Viem</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
