import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Send, CheckCircle2, MessageSquare } from 'lucide-react';

const socialLinks = [
  { name: 'Email', href: 'mailto:olamide@oxbash.dev', label: 'olamide@oxbash.dev' },
  { name: 'GitHub', href: 'https://github.com', label: '@oxbash' },
  { name: 'LinkedIn', href: 'https://linkedin.com', label: 'Olamide Bashir' },
  { name: 'X / Twitter', href: 'https://x.com', label: '@OXbash' },
];

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F8F7F4] relative overflow-hidden border-t border-[#E5E3DD]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: CTA Heading & Direct Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <span className="text-xs font-semibold font-heading text-[#E76F51] uppercase tracking-widest flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5" />
                Initiate Collaboration
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-[#171717] mt-3 leading-[1.08] tracking-tight">
                Let's Build Something Great
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#6B6B6B] font-body leading-relaxed max-w-lg">
              Have an ambitious Web3 protocol, fullstack web app, or technical architecture you want to bring to life? Let's discuss how we can engineer it together.
            </p>

            {/* Social & Contact Links with Animated Underline */}
            <div className="pt-6 border-t border-[#E5E3DD] space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#6B6B6B]">
                Direct Connect
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-between p-4 rounded-xl bg-white border border-[#E5E3DD] hover:border-[#E76F51] transition-all duration-300 shadow-2xs"
                    data-cursor="Connect"
                  >
                    <div>
                      <span className="text-xs font-mono text-[#6B6B6B] block">
                        {social.name}
                      </span>
                      <span className="text-sm font-bold font-heading text-[#171717] group-hover:text-[#E76F51] transition-colors relative">
                        {social.label}
                        <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#E76F51] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#6B6B6B] group-hover:text-[#E76F51] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative bg-white rounded-2xl p-8 sm:p-10 border border-[#171717] shadow-[6px_6px_0px_0px_#171717]">
              
              <h3 className="text-2xl font-bold font-heading text-[#171717] mb-6">
                Send a Message
              </h3>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold font-heading text-[#171717]">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-[#6B6B6B] font-body max-w-xs mx-auto">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#171717] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-lg bg-[#F8F7F4] border border-[#E5E3DD] text-[#171717] font-body text-sm focus:outline-none focus:border-[#E76F51] focus:ring-1 focus:ring-[#E76F51] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#171717] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-lg bg-[#F8F7F4] border border-[#E5E3DD] text-[#171717] font-body text-sm focus:outline-none focus:border-[#E76F51] focus:ring-1 focus:ring-[#E76F51] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#171717] mb-2">
                      Project Details &amp; Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project scope, timeline, and goals..."
                      className="w-full px-4 py-3 rounded-lg bg-[#F8F7F4] border border-[#E5E3DD] text-[#171717] font-body text-sm focus:outline-none focus:border-[#E76F51] focus:ring-1 focus:ring-[#E76F51] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg bg-[#E76F51] hover:bg-[#d45b3d] text-white font-bold font-heading text-base shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                    data-cursor="Submit"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
