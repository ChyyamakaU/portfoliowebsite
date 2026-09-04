import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Server, Smartphone, Blocks, GitFork, Rocket, ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Full Stack Development',
    icon: Layers,
    description: 'Crafting high-performance end-to-end web applications with React, Next.js, and modern backends.',
    tag: 'Web & Enterprise',
  },
  {
    id: '02',
    title: 'Backend & API Development',
    icon: Server,
    description: 'Engineering resilient, low-latency microservices and RESTful/GraphQL APIs built for high throughput.',
    tag: 'Node.js & Postgres',
  },
  {
    id: '03',
    title: 'Mobile Development',
    icon: Smartphone,
    description: 'Deploying cross-platform native iOS & Android applications with React Native.',
    tag: 'Cross-Platform',
  },
  {
    id: '04',
    title: 'Web3 & Blockchain',
    icon: Blocks,
    description: 'Architecting gas-optimized smart contracts, dApps, and decentralized protocol integrations.',
    tag: 'Solidity & EVM',
  },
  {
    id: '05',
    title: 'Clean Code Architecture',
    icon: GitFork,
    description: 'Structuring maintainable, scalable, and type-safe codebases engineered for long-term growth.',
    tag: 'Refactoring & QA',
  },
  {
    id: '06',
    title: 'End-to-End Delivery',
    icon: Rocket,
    description: 'Managing the entire product lifecycle from technical discovery to production deployment.',
    tag: 'Strategy & Ops',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#F8F7F4] relative overflow-hidden border-t border-[#E5E3DD]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-xs font-semibold font-heading text-[#E76F51] uppercase tracking-widest">
            Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#171717] mt-2">
            What I Can Do
          </h2>
          <p className="text-base sm:text-lg text-[#6B6B6B] font-body mt-3">
            Delivering technical solutions with an emphasis on engineering excellence, speed, and clean user experience.
          </p>
        </motion.div>

        {/* Services 6-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative bg-white rounded-xl p-8 border border-[#E5E3DD] hover:border-[#E76F51] shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 cursor-pointer"
                data-cursor="Service"
              >
                {/* Handcrafted Offset Border on Hover */}
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[#171717] transition-all duration-300 pointer-events-none group-hover:translate-x-1 group-hover:translate-y-1 -z-10 bg-white" />

                <div>
                  {/* Service Top Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#F8F7F4] group-hover:bg-[#E76F51] text-[#171717] group-hover:text-white flex items-center justify-center border border-[#E5E3DD] group-hover:border-[#E76F51] transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#6B6B6B] group-hover:text-[#E76F51] transition-colors">
                      /{service.id}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-heading text-[#171717] group-hover:text-[#E76F51] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#6B6B6B] font-body mt-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Tag */}
                <div className="pt-6 mt-6 border-t border-[#E5E3DD] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#6B6B6B] uppercase tracking-wider">
                    {service.tag}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#6B6B6B] group-hover:text-[#E76F51] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
