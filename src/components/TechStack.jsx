
import { motion } from 'framer-motion';


const techItems = [
  { name: 'Next.js', category: 'Frontend', desc: 'App Router & SSR' },
  { name: 'React', category: 'Frontend', desc: 'UI & State Mgmt' },
  { name: 'React Native', category: 'Mobile', desc: 'Cross-Platform iOS/Android' },
  { name: 'JavaScript', category: 'Core', desc: 'ESNext Standard' },
  { name: 'TypeScript', category: 'Core', desc: 'Type-Safe Engineering' },
  { name: 'Tailwind CSS', category: 'Styling', desc: 'Utility-First Systems' },
 
  
 
  { name: 'Git', category: 'DevOps', desc: 'Version Control' },
  { name: 'GitHub', category: 'DevOps', desc: 'CI/CD & Open Source' },
 
  { name: 'Linux', category: 'SysAdmin', desc: 'CLI & Server Config' },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-[rgb(248,247,244)] relative overflow-hidden border-t border-[rgb(229,227,221)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 max-w-2xl"
        >
          <span className="text-xs font-semibold font-heading text-[rgb(231,111,81)] uppercase tracking-widest">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[rgb(23,23,23)] mt-2">
            Tools &amp; Technologies
          </h2>
          <p className="text-base sm:text-lg text-[rgb(107,107,107)] font-body mt-3">
            Battle-tested frameworks, languages, and cloud infrastructure I use to build scalable products.
          </p>
        </motion.div>

      
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {techItems.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.4,
                delay: idx * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ scale: 1.04, rotate: (idx % 2 === 0 ? 1.5 : -1.5) }}
              className="group relative bg-white rounded-xl p-5 border border-[rgb(229,227,221)] hover:border-[rgb(231,111,81)] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
              data-cursor={tech.name}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="w-2 h-2 rounded-full bg-ink/20 group-hover:bg-[rgb(231,111,81)] transition-colors" />
                <span className="text-[10px] font-mono uppercase text-[rgb(107,107,107)] bg-[rgb(248,247,244)] px-2 py-0.5 rounded border border-[rgb(229,227,221)]">
                  {tech.category}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold font-heading text-[rgb(23,23,23)] group-hover:text-[rgb(231,111,81)] transition-colors">
                  {tech.name}
                </h3>
                <p className="text-[11px] text-[rgb(107,107,107)] font-body mt-1 line-clamp-1">
                  {tech.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
