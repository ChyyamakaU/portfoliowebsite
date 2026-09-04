import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Cloud, Terminal, Shield, GitBranch } from 'lucide-react';

const techItems = [
  { name: 'Next.js', category: 'Frontend', desc: 'App Router & SSR' },
  { name: 'React', category: 'Frontend', desc: 'UI & State Mgmt' },
  { name: 'React Native', category: 'Mobile', desc: 'Cross-Platform iOS/Android' },
  { name: 'JavaScript', category: 'Core', desc: 'ESNext Standard' },
  { name: 'TypeScript', category: 'Core', desc: 'Type-Safe Engineering' },
  { name: 'Tailwind CSS', category: 'Styling', desc: 'Utility-First Systems' },
  { name: 'Solidity', category: 'Web3', desc: 'EVM Smart Contracts' },
  { name: 'Node.js', category: 'Backend', desc: 'Microservices & APIs' },
  { name: 'PostgreSQL', category: 'Database', desc: 'Relational Schemas' },
  { name: 'Git', category: 'DevOps', desc: 'Version Control' },
  { name: 'GitHub', category: 'DevOps', desc: 'CI/CD & Open Source' },
  { name: 'AWS', category: 'Cloud', desc: 'EC2, S3, Serverless' },
  { name: 'Linux', category: 'SysAdmin', desc: 'CLI & Server Config' },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-[#F8F7F4] relative overflow-hidden border-t border-[#E5E3DD]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 max-w-2xl"
        >
          <span className="text-xs font-semibold font-heading text-[#E76F51] uppercase tracking-widest">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#171717] mt-2">
            Tools &amp; Technologies
          </h2>
          <p className="text-base sm:text-lg text-[#6B6B6B] font-body mt-3">
            Battle-tested frameworks, languages, and cloud infrastructure I use to build scalable products.
          </p>
        </motion.div>

        {/* Tech Badges Grid */}
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
              className="group relative bg-white rounded-xl p-5 border border-[#E5E3DD] hover:border-[#E76F51] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
              data-cursor={tech.name}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="w-2 h-2 rounded-full bg-[#171717]/20 group-hover:bg-[#E76F51] transition-colors" />
                <span className="text-[10px] font-mono uppercase text-[#6B6B6B] bg-[#F8F7F4] px-2 py-0.5 rounded border border-[#E5E3DD]">
                  {tech.category}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold font-heading text-[#171717] group-hover:text-[#E76F51] transition-colors">
                  {tech.name}
                </h3>
                <p className="text-[11px] text-[#6B6B6B] font-body mt-1 line-clamp-1">
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
