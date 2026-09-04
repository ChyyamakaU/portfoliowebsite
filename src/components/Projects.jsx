import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Filter, Sparkles, Layers, ShieldCheck } from 'lucide-react';

const categories = ['All', 'Full Stack', 'Web3', 'Front End'];

const projectsData = [
  {
    id: 1,
    title: 'Blockfuse Liquid Staking Protocol',
    category: 'Web3',
    description: 'Non-custodial smart contract liquidity staking engine built on Ethereum & EVM L2s with automated reward distribution.',
    tech: ['Solidity', 'React', 'Ethers.js', 'Tailwind'],
    stats: 'TVL $14M+',
    codeSnippet: 'contract LiquidVault is ReentrancyGuard',
    github: '#',
    live: '#',
  },
  {
    id: 2,
    title: 'OmniPay Crypto-Fiat Settlement Gateway',
    category: 'Full Stack',
    description: 'Cross-border payment infrastructure enabling instant fiat-to-crypto settlements for African e-commerce businesses.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Solidity'],
    gradient: 'from-[#E76F51] via-[#d45b3d] to-[#171717]',
    stats: '< 2s Settlement',
    codeSnippet: 'async function processCrossBorderSettlement',
    github: '#',
    live: '#',
  },
  {
    id: 3,
    title: 'ZK-Identity Decentralized Verification',
    category: 'Web3',
    description: 'Zero-knowledge proof credential verification app allowing users to verify credentials without exposing personal data.',
    tech: ['Circom', 'SnarkJS', 'React', 'TypeScript'],
    gradient: 'from-[#1E293B] via-[#0F172A] to-[#E76F51]',
    stats: '100% Privacy',
    codeSnippet: 'proof = await snarkjs.groth16.fullProve',
    github: '#',
    live: '#',
  },
  {
    id: 4,
    title: 'Solaris Real-Time Financial Analytics',
    category: 'Front End',
    description: 'High-performance interactive financial telemetry dashboard featuring real-time WebSockets data visualization.',
    tech: ['React', 'Framer Motion', 'Tailwind', 'Chart.js'],
    gradient: 'from-[#171717] via-[#333333] to-[#E76F51]',
    stats: '60 FPS Render',
    codeSnippet: 'useWebSocketData({ stream: "live_orderbook" })',
    github: '#',
    live: '#',
  },
  {
    id: 5,
    title: 'HyperFlow Cross-Chain NFT Marketplace',
    category: 'Web3',
    description: 'Gas-optimized multi-chain NFT marketplace supporting fractional ownership and royalties on Layer-2 networks.',
    tech: ['Solidity', 'Next.js', 'GraphQL', 'Viem'],
    gradient: 'from-[#E76F51] via-[#171717] to-[#2B2B2B]',
    stats: '0.001 ETH Gas',
    codeSnippet: 'function executeFractionalOrder()',
    github: '#',
    live: '#',
  },
  {
    id: 6,
    title: 'Benue Ecosystem Developer Portal',
    category: 'Full Stack',
    description: 'Community platform, event hub, and open-source grant distribution system for Web3 developers in Nigeria.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
    gradient: 'from-[#0F172A] via-[#171717] to-[#E76F51]',
    stats: '3,000+ Devs',
    codeSnippet: 'export const GrantDistributor = () =>',
    github: '#',
    live: '#',
  },
  // Additional projects shown when "View All Projects" is toggled
  {
    id: 7,
    title: 'RoadRunner Fleet Telematics Engine',
    category: 'Full Stack',
    description: 'IoT tracking and route optimization engine processing real-time vehicle telemetry data.',
    tech: ['Node.js', 'PostgreSQL', 'React', 'WebSockets'],
    gradient: 'from-[#171717] via-[#E76F51] to-[#171717]',
    stats: '10k Updates/s',
    github: '#',
    live: '#',
  },
  {
    id: 8,
    title: 'Aura Decentralized Storage Bridge',
    category: 'Web3',
    description: 'Encrypted storage bridge interface integrating IPFS & Arweave for permanent media archival.',
    tech: ['Solidity', 'IPFS', 'React', 'TypeScript'],
    gradient: 'from-[#2A2A2A] via-[#171717] to-[#E76F51]',
    stats: 'Permanent Archival',
    github: '#',
    live: '#',
  },
];

const marqueeStack = [
  'Solidity & EVM',
  'Next.js 15',
  'React 19',
  'PostgreSQL',
  'Zero-Knowledge Proofs',
  'TypeScript',
  'Ethers.js / Viem',
  'Framer Motion',
  'GraphQL',
  'Tailwind CSS',
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  // Filter projects based on selected category
  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.category === activeCategory;
  });

  // Limit default to 6 unless expanded
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#F8F7F4] bg-noise relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E5E3DD]"
        >
          <div>
            <span className="text-xs font-semibold font-heading text-[#E76F51] uppercase tracking-widest flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              Selected Engineering Works
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#171717] mt-2">
              A Glimpse of My Work
            </h2>
          </div>

          {/* Category Filter Buttons */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setShowAll(false);
                }}
                className={`px-4 py-2 rounded-lg text-xs font-semibold font-heading transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#171717] text-white shadow-xs'
                    : 'bg-white text-[#6B6B6B] hover:text-[#171717] border border-[#E5E3DD]'
                }`}
                data-cursor="Filter"
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Horizontal Tech Stack Continuous Marquee Strip */}
        <div className="mb-14 overflow-hidden py-3 bg-white border border-[#E5E3DD] rounded-xl shadow-2xs select-none">
          <motion.div
            className="flex items-center gap-8 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          >
            {[...marqueeStack, ...marqueeStack].map((tech, idx) => (
              <span
                key={`${tech}-${idx}`}
                className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#6B6B6B]"
              >
                <span className="text-[#E76F51]">/</span>
                <span>{tech}</span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* 6 Grid Cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: (index % 3) * 0.12,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="group relative bg-white rounded-xl border border-[#E5E3DD] hover:border-[#E76F51] shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer hover:-translate-y-1.5"
                data-cursor="View"
              >
                {/* Project Image / Visual Mask Container */}
                <div className="relative h-52 overflow-hidden bg-[#171717] p-5 flex flex-col justify-between">
                  
                  {/* Solid Visual Background */}
                  <div
                    className="absolute inset-0 bg-[#171717] transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Mask Overlay Pattern */}
                  <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

                  {/* Card Top Metadata */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider font-heading bg-white/90 text-[#171717] rounded shadow-2xs">
                      {project.category}
                    </span>
                    {project.stats && (
                      <span className="px-2.5 py-1 text-[10px] font-mono font-semibold bg-[#E76F51] text-white rounded">
                        {project.stats}
                      </span>
                    )}
                  </div>

                  {/* Code Snippet Handcrafted Graphic Touch */}
                  <div className="relative z-10 font-mono text-[11px] text-white/80 bg-black/40 backdrop-blur-xs p-2.5 rounded border border-white/10 group-hover:border-white/30 transition-colors">
                    <span className="text-[#E76F51]">&gt; </span>
                    {project.codeSnippet}
                  </div>
                </div>

                {/* Card Content Block */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    {/* Project Title with translate hover effect */}
                    <h3 className="text-xl font-bold font-heading text-[#171717] group-hover:text-[#E76F51] transition-colors duration-300 group-hover:translate-x-1 inline-block">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-[#6B6B6B] font-body leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags & Interactive Floating Arrow */}
                  <div className="pt-6 mt-4 border-t border-[#E5E3DD] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono text-[#171717] bg-[#F8F7F4] px-2 py-0.5 rounded border border-[#E5E3DD]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Bottom-right Corner Arrow Fade/Slide on Hover */}
                    <div className="w-8 h-8 rounded-full bg-[#F8F7F4] group-hover:bg-[#E76F51] text-[#171717] group-hover:text-white flex items-center justify-center transition-all duration-300 transform group-hover:rotate-45">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects Button */}
        {filteredProjects.length > 6 && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-white border border-[#171717] text-[#171717] font-bold font-heading hover:bg-[#171717] hover:text-white transition-all duration-300 shadow-2xs hover:shadow-md"
              data-cursor="More"
            >
              <span>{showAll ? 'Show Less' : 'View All Projects'}</span>
              <ArrowUpRight
                className={`w-4 h-4 transition-transform duration-300 ${
                  showAll ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
