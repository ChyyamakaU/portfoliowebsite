import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Layout, Code, CheckCircle, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    icon: Compass,
    description: 'Understanding goals, target users, and technical constraints before writing a single line of code.',
  },
  {
    number: '02',
    title: 'Design & Architecture',
    icon: Layout,
    description: 'Structuring system architecture, database schemas, and intuitive UI component systems before development begins.',
  },
  {
    number: '03',
    title: 'Development & Iteration',
    icon: Code,
    description: 'Building in focused, rapid sprints with continuous integration, type-safety, and feedback loops.',
  },
  {
    number: '04',
    title: 'Testing & Refinement',
    icon: CheckCircle,
    description: 'Rigorous automated QA, smart contract security verification, performance tuning, and edge-case handling.',
  },
  {
    number: '05',
    title: 'Launch & Optimization',
    icon: Rocket,
    description: 'Production deployment with zero downtime, real-time telemetry monitoring, and post-launch optimization.',
  },
];

export default function Process() {
  return (
    <section className="py-24 md:py-32 bg-[#F8F7F4] bg-noise relative overflow-hidden border-t border-[#E5E3DD]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <span className="text-xs font-semibold font-heading text-[#E76F51] uppercase tracking-widest">
              Execution Blueprint
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#171717] mt-2 leading-tight">
              My Way of Getting Things Done
            </h2>
          </motion.div>

          {/* Exact Copy Intro Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <p className="text-base sm:text-lg text-[#6B6B6B] font-body leading-relaxed border-l-2 border-[#171717] pl-6 bg-white/60 p-6 rounded-r-xl border-y border-r border-[#E5E3DD]">
              I build digital products with precision, scalability, and intent. Every decision is grounded in user behavior, aligned with business strategy, and executed to the highest visual and functional standards. From early discovery to post-launch optimization, I follow a structured process that transforms complex ideas into elegant, scalable experiences.
            </p>
          </motion.div>

        </div>

        {/* 5-Step Vertical/Grid Timeline */}
        <div className="relative border-l-2 border-[#E5E3DD] ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative group"
              >
                {/* Timeline Accent Node Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-[#E76F51] group-hover:bg-[#E76F51] transition-colors duration-300 flex items-center justify-center shadow-2xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E76F51] group-hover:bg-white transition-colors" />
                </div>

                {/* Step Card Content */}
                <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#E5E3DD] hover:border-[#171717] shadow-2xs hover:shadow-md transition-all duration-300 max-w-3xl">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl sm:text-3xl font-bold font-heading text-[#E76F51]">
                        {step.number}
                      </span>
                      <h3 className="text-xl font-bold font-heading text-[#171717]">
                        {step.title}
                      </h3>
                    </div>
                    <div className="p-2 rounded-md bg-[#F8F7F4] text-[#171717] border border-[#E5E3DD]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[#6B6B6B] font-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
