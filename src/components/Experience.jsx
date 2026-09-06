
import { motion } from 'framer-motion';
import { Briefcase, Calendar} from 'lucide-react';

const experiences = [
  {
    role: 'Front End Developer (Training)',
    company: 'Blockfuse Labs',
    duration: '2026 — Present',
    location: 'Remote',
    impact: [
      'Designed responsive design systems using Tailwind CSS and accessible React component libraries.',
      
    ],
    tech: ['Next.js', 'JavaScript', 'Tailwind', 'React']
  },
  

];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-[rgb(248,247,244)] bg-noise relative overflow-hidden border-t border-[rgb(229,227,221)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-xs font-semibold font-heading text-[rgb(231,111,81)] uppercase tracking-widest">
            Career Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[rgb(23,23,23)] mt-2">
            Work Experience
          </h2>
          <p className="text-base sm:text-lg text-[rgb(107,107,107)] font-body mt-3">
            Over 5 years of engineering high-scale applications across Web2 enterprise systems and Web3 protocols.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[rgb(229,227,221)] ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
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
              <div className="absolute -left-7.75 sm:-left-11.75 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-[rgb(23,23,23)] group-hover:border-[rgb(231,111,81)] transition-colors duration-300 flex items-center justify-center shadow-2xs">
                <div className="w-2 h-2 rounded-full bg-[rgb(23,23,23)] group-hover:bg-[rgb(231,111,81)] transition-colors" />
              </div>

              {/* Experience Card */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-[rgb(229,227,221)] hover:border-[rgb(23,23,23)] shadow-2xs hover:shadow-lg transition-all duration-300 max-w-4xl">
                
                {/* Top Row: Role & Company */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[rgb(229,227,221)]">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-[rgb(23,23,23)] group-hover:text-[rgb(231,111,81)] transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold font-heading text-[rgb(23,23,23)] mt-0.5 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[rgb(231,111,81)]" />
                      <span>{exp.company}</span>
                      <span className="text-[rgb(107,107,107)] font-normal">&bull; {exp.location}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgb(248,247,244)] text-xs font-mono font-medium text-[rgb(23,23,23)] border border-[rgb(229,227,221)]">
                    <Calendar className="w-3.5 h-3.5 text-[rgb(231,111,81)]" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Impact Bullet Points */}
                <ul className="mt-5 space-y-2.5">
                  {exp.impact.map((item, i) => (
                    <li key={i} className="text-sm text-[rgb(107,107,107)] font-body leading-relaxed flex items-start gap-2.5">
                      <span className="text-[rgb(231,111,81)] font-bold mt-0.5">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Chips */}
                <div className="mt-6 pt-4 border-t border-[rgb(229,227,221)] flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-[rgb(23,23,23)] bg-[rgb(248,247,244)] px-2.5 py-1 rounded-md border border-[rgb(229,227,221)]"
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
