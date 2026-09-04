import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    role: 'Lead Blockchain & Fullstack Engineer',
    company: 'Blockfuse Labs',
    duration: '2023 — Present',
    location: 'Remote',
    impact: [
      'Architected EVM smart contract staking pools processing $14M+ in Total Value Locked with zero security incidents.',
      'Led a cross-functional team of 6 engineers building decentralized web3 interfaces using Next.js, Ethers.js, and Solidity.',
      'Implemented automated CI/CD security audit pipelines decreasing vulnerability resolution times by 40%.',
    ],
    tech: ['Solidity', 'Next.js', 'TypeScript', 'PostgreSQL', 'Ethers.js'],
  },
  {
    role: 'Senior Full Stack Engineer',
    company: 'Road Runner Logistics',
    duration: '2021 — 2023',
    location: 'Lagos, Nigeria',
    impact: [
      'Engineered real-time vehicle telematics dashboard processing 10,000+ WebSocket events per second.',
      'Optimized backend PostgreSQL queries and Redis caching, cutting average API response times from 450ms to 85ms.',
      'Mentored junior developers and instituted strict TypeScript type checking standards across core repos.',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'WebSockets', 'Tailwind'],
  },
  {
    role: 'Frontend & Web3 Developer',
    company: 'Setup Nigeria Ecosystem',
    duration: '2019 — 2021',
    location: 'Nigeria',
    impact: [
      'Built developer portal and grant application platforms serving 3,000+ active software engineers.',
      'Integrated Web3 wallet authentication (MetaMask, WalletConnect) and IPFS media archival flows.',
      'Designed responsive design systems using Tailwind CSS and accessible React component libraries.',
    ],
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Web3.js', 'REST APIs'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-[#F8F7F4] bg-noise relative overflow-hidden border-t border-[#E5E3DD]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-xs font-semibold font-heading text-[#E76F51] uppercase tracking-widest">
            Career Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#171717] mt-2">
            Work Experience
          </h2>
          <p className="text-base sm:text-lg text-[#6B6B6B] font-body mt-3">
            Over 5 years of engineering high-scale applications across Web2 enterprise systems and Web3 protocols.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[#E5E3DD] ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={`${exp.company}-${idx}`}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: idx * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative group"
            >
              {/* Neutral Border Connecting Line Marker with Accent Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-[#171717] group-hover:border-[#E76F51] transition-colors duration-300 flex items-center justify-center shadow-2xs">
                <div className="w-2 h-2 rounded-full bg-[#171717] group-hover:bg-[#E76F51] transition-colors" />
              </div>

              {/* Experience Card */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#E5E3DD] hover:border-[#171717] shadow-2xs hover:shadow-lg transition-all duration-300 max-w-4xl">
                
                {/* Top Row: Role & Company */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E5E3DD]">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#171717] group-hover:text-[#E76F51] transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold font-heading text-[#171717] mt-0.5 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#E76F51]" />
                      <span>{exp.company}</span>
                      <span className="text-[#6B6B6B] font-normal">&bull; {exp.location}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8F7F4] text-xs font-mono font-medium text-[#171717] border border-[#E5E3DD]">
                    <Calendar className="w-3.5 h-3.5 text-[#E76F51]" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Impact Bullet Points */}
                <ul className="mt-5 space-y-2.5">
                  {exp.impact.map((item, i) => (
                    <li key={i} className="text-sm text-[#6B6B6B] font-body leading-relaxed flex items-start gap-2.5">
                      <span className="text-[#E76F51] font-bold mt-0.5">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Chips */}
                <div className="mt-6 pt-4 border-t border-[#E5E3DD] flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-[#171717] bg-[#F8F7F4] px-2.5 py-1 rounded-md border border-[#E5E3DD]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
