'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, BookOpen, Users, Shield } from 'lucide-react';

export function ResearchSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const researchAreas = [
    {
      icon: Shield,
      title: 'Healthcare AI Governance',
      description: 'Examining responsible AI frameworks, compliance, and ethical considerations in healthcare settings',
      color: '#4F8CFF',
    },
    {
      icon: Users,
      title: 'Organizational Readiness',
      description: 'Assessing healthcare organizations readiness for AI adoption and change management',
      color: '#00D4FF',
    },
    {
      icon: BookOpen,
      title: 'Data Stewardship',
      description: 'Exploring data quality, governance practices, and stewardship models in complex healthcare systems',
      color: '#7C5CFC',
    },
    {
      icon: GraduationCap,
      title: 'Equitable AI Adoption',
      description: 'Investigating adoption barriers and strategies for equitable AI implementation in oncology care',
      color: '#4F8CFF',
    },
  ];

  return (
    <section id="research" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-transparent to-[#101010]/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Doctoral Research
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Exploring the intersection of AI, healthcare, and organizational change
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Research Overview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl"
          >
            <div className="flex items-center mb-6">
              <div className="p-4 rounded-xl bg-[#4F8CFF]/20 border border-[#4F8CFF]/40 mr-4">
                <GraduationCap className="w-8 h-8 text-[#4F8CFF]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Organizational Readiness & Equitable Adoption of AI
                </h3>
                <p className="text-[#00D4FF] font-semibold">in Oncology Care</p>
              </div>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My doctoral research examines <span className="text-white font-semibold">healthcare AI governance</span>, 
                <span className="text-[#4F8CFF] font-semibold"> operational readiness</span>, 
                <span className="text-[#00D4FF] font-semibold"> responsible AI</span>, 
                <span className="text-[#7C5CFC] font-semibold"> data stewardship</span>, and 
                <span className="text-white font-semibold"> adoption barriers</span> across complex healthcare organizations.
              </p>

              <p>
                This work bridges the gap between <span className="text-[#4F8CFF] font-semibold">technical AI capabilities</span> and 
                <span className="text-white font-semibold"> organizational implementation</span>, focusing on how healthcare 
                institutions can responsibly and equitably adopt AI technologies in oncology care settings.
              </p>

              <p>
                The research combines <span className="text-[#00D4FF] font-semibold">empirical studies</span>, 
                <span className="text-[#7C5CFC] font-semibold"> organizational theory</span>, and 
                <span className="text-white font-semibold"> practical frameworks</span> to inform healthcare leaders, 
                policymakers, and AI practitioners on successful AI integration strategies.
              </p>
            </div>
          </motion.div>

          {/* Research Areas Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {researchAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300"
                  style={{
                    borderColor: `${area.color}40`,
                  }}
                >
                  <div
                    className="p-3 rounded-lg w-fit mb-4"
                    style={{
                      background: `${area.color}20`,
                      border: `1px solid ${area.color}40`,
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: area.color }} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {area.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Key Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="glass-card p-6 rounded-2xl inline-block">
            <p className="text-muted-foreground">
              <span className="text-white font-semibold">Research Focus:</span> Bridging the gap between 
              <span className="text-[#4F8CFF]"> technical AI innovation</span> and 
              <span className="text-[#00D4FF]"> organizational healthcare readiness</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
