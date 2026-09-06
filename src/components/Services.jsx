
import { motion } from 'framer-motion';
import { Layers, GitFork, Rocket, ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'FrontEnd Development',
    icon: Layers,
    description: 'Crafting high-performance end-to-end web applications with React and Next.JS.',
    tag: 'Web & Enterprise',
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
    <section id="services" className="py-24 md:py-32 bg-[rgb(248,247,244)] relative overflow-hidden border-t border-[rgb(229,227,221)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-xs font-semibold font-heading text-[rgb(231,111,81)] uppercase tracking-widest">
            Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[hsl(0,0%,9%)] mt-2">
            What I Can Do
          </h2>
          <p className="text-base sm:text-lg text-[rgb(107,107,107)] font-body mt-3">
            Delivering technical solutions prioritising excellence, speed, and clean user experience.
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
                className="group relative bg-white rounded-xl p-8 border border-[rgb(229,227,221)] hover:border-[rgb(231,111,81)] shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 cursor-pointer"
                data-cursor="Service"
              >
                {/* Handcrafted Offset Border on Hover */}
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[rgb(23,23,23)] transition-all duration-300 pointer-events-none group-hover:translate-x-1 group-hover:translate-y-1 -z-10 bg-white" />

                <div>
                  {/* Service Top Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[rgb(248,247,244)] group-hover:bg-[rgb(231,111,81)] text-[rgb(23,23,23)] group-hover:text-white flex items-center justify-center border border-[rgb(229,227,221)] group-hover:border-[rgb(231,111,81)] transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[rgb(107,107,107)] group-hover:text-[rgb(231,111,81)] transition-colors">
                      /{service.id}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-heading text-[rgb(23,23,23)] group-hover:text-[rgb(231,111,81)] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[rgb(107,107,107)] font-body mt-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[rgb(229,227,221)] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[rgb(107,107,107)] uppercase tracking-wider">
                    {service.tag}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[rgb(107,107,107)] group-hover:text-[rgb(231,111,81)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
