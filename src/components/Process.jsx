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
    description: 'Structuring system architecture, Intuitive UI component systems before development begins.',
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
    description: ' performance tuning, and edge-case handling.',
  },
  {
    number: '05',
    title: 'Launch & Optimization',
    icon: Rocket,
    description: 'Production deployment with zero downtime, real-time monitoring, and post-launch optimization.',
  },
];

export default function Process() {
  return (
    <section className="py-24 md:py-32 bg-[rgb(248,247,244)] bg-noise relative overflow-hidden border-t border-[rgb(229,227,221)]">
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
            <p className="text-base sm:text-lg text-[rgb(107,107,107)] font-body leading-relaxed border-l-2 border-[#e4e2dc] pl-6 bg-white/60 p-6 rounded-r-xl border-y border-r border-[#e4e2dc]">
              I build digital products with precision, scalability, and intent. Every decision is grounded in user behavior, aligned with business strategy, and executed to the highest visual and functional standards. From early discovery to post-launch optimization, I follow a structured process that transforms complex ideas into elegant, scalable experiences.
            </p>
          </motion.div>

        </div>

        {/* 5-Step Vertical/Grid Timeline */}
        <div className="relative border-l-2 border-[rgb(229,227,221)] ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
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
                <div className="absolute -left-7.75 sm:-left-11.75 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-[rgb(231,111,81)] group-hover:bg-[rgb(231,111,81)] transition-colors duration-300 flex items-center justify-center shadow-2xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-[rgb(231,111,81)] group-hover:bg-white transition-colors" />
                </div>

                {/* Step Card Content */}
                <div className="bg-white rounded-xl p-6 sm:p-8 border border-[rgb(229,227,221)] hover:border-[rgb(23,23,23)] shadow-2xs hover:shadow-md transition-all duration-300 max-w-3xl">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl sm:text-3xl font-bold font-heading text-[rgb(231,111,81)]">
                        {step.number}
                      </span>
                      <h3 className="text-xl font-bold font-heading text-[rgb(23,23,23)]">
                        {step.title}
                      </h3>
                    </div>
                    <div className="p-2 rounded-md bg-[rgb(248,247,244)] text-[rgb(23,23,23)] border border-[rgb(229,227,221)]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[rgb(107,107,107)] font-body leading-relaxed">
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
