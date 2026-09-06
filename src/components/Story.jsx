import picture from "../assets/picture.jpeg"
import { motion } from 'framer-motion';
import { User, Code2, Database, Cpu, Terminal} from 'lucide-react';

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
    <section id="about" className="py-24 md:py-32 bg-[rgb(248,247,244)] relative overflow-hidden border-t border-[rgb(229,227,221)]">
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
              <div className="absolute -inset-4 bg-accent/20 rounded-2xl -rotate-2 transform transition-transform group-hover:rotate-0" />
              
              {/* Main Card Frame */}
              <div className="relative rounded-2xl bg-white p-4 border border-[rgb(23,23,23)] shadow-[8px_8px_0px_0px_#171717] overflow-hidden">
                
             
                <div className="relative h-96 sm:h-105 rounded-xl overflow-hidden bg-[rgb(23,23,23)] flex flex-col justify-end p-6 group">
                  <img src={picture} alt="" />
                  <div className="absolute inset-0 bg-ink/40 z-10" />
                  
                 
                  <div className="relative z-20 space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[rgb(231,111,81)] text-white text-xs font-bold font-heading">
                      <Terminal className="w-3.5 h-3.5" />
                      Chiamaka Umunnakwe
                    </div>
                    <p className="text-xs text-white/80 font-mono">
                      Jos / Remote &bull; FrontEnd Dev
                    </p>
                  </div>
                </div>

                {/* Handcrafted Bottom Tag */}
                <div className="mt-4 pt-3 border-t border-[rgb(229,227,221)] flex items-center justify-between px-2 text-xs font-mono text-[rgb(107,107,107)]">
                  <span>EXP: 8 MONTHS</span>
                  <span className="text-[rgb(231,111,81)] font-semibold">● ACTIVE CONTRIBUTOR</span>
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
           
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2">
              <span className="text-xs font-semibold font-heading text-[rgb(231,111,81)] uppercase tracking-widest">
                About Me
              </span>
            </motion.div>

           
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[rgb(23,23,23)] tracking-tight leading-tight"
            >
              Developer's Story
            </motion.h2>

            {/* Exact Copy Paragraphs */}
            <motion.div variants={itemVariants} className="space-y-5 text-base sm:text-lg text-[rgb(107,107,107)] font-body leading-relaxed">
              
              <p className="text-[rgb(23,23,23)] font-medium border-l-2 border-[rgb(231,111,81)] pl-4">
                I'm a Software &amp; Developer and an active open-source contributor with over 8 Months of experience creating high-performance, responsive cross-platform applications.
              </p>

              <p>
                I specialize in designing seamless user interfaces using Next.js and React.
              </p>

              <p>
                My passion lies in writing clean, maintainable code and delivering exceptional user experiences. When I'm not coding, I travel, read and write.
              </p>

            </motion.div>

            {/* Core Competency Chips */}
            <motion.div variants={itemVariants} className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-white border border-[rgb(229,227,221)] shadow-2xs">
                <Code2 className="w-5 h-5 text-[rgb(231,111,81)] mb-2" />
                <h4 className="text-sm font-bold font-heading text-[rgb(23,23,23)]">Frontend Development</h4>
                <p className="text-xs text-[hsl(0,0%,42%)] mt-1 font-body">React, Next.js, Tailwind, JavaScript</p>
              </div>

            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
