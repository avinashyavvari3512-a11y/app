'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, TrendingUp, Zap } from 'lucide-react';
import dynamic from 'next/dynamic';

const Globe3D = dynamic(() => import('@/components/3d/globe-3d'), { ssr: false, loading: () => <div className="w-full h-[400px] glass-card rounded-2xl" /> });
const FloatingCubes3D = dynamic(() => import('@/components/3d/floating-cubes'), { ssr: false, loading: () => <div className="w-full h-[300px]" /> });

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Award,
      value: '7+',
      label: 'Years Experience',
      color: '#4F8CFF',
    },
    {
      icon: Users,
      value: '50+',
      label: 'Dashboards Delivered',
      color: '#00D4FF',
    },
    {
      icon: TrendingUp,
      value: '15M+',
      label: 'Records Processed',
      color: '#7C5CFC',
    },
    {
      icon: Zap,
      value: '65%',
      label: 'Pipeline Improvement',
      color: '#4F8CFF',
    },
  ];

  return (
    <section id="about" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transforming complex data into intelligent, scalable solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Building the Future of Data Intelligence
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over <span className="text-[#4F8CFF] font-semibold">7 years of experience</span> in 
                  enterprise data engineering, I specialize in designing and building 
                  <span className="text-white font-semibold"> AI-ready cloud data platforms</span> that 
                  process millions of records and deliver actionable insights.
                </p>
                
                <p>
                  My expertise spans across <span className="text-[#00D4FF] font-semibold">healthcare analytics</span>, 
                  where I've architected solutions processing <span className="text-white font-semibold">15M+ records monthly</span>, 
                  implementing advanced <span className="text-[#7C5CFC] font-semibold">machine learning models</span> with 
                  92% prediction accuracy, and building intelligent data pipelines that reduced processing time by 65%.
                </p>
                
                <p>
                  I focus on solving real business problems rather than just implementing technology. 
                  Whether it's building a <span className="text-white font-semibold">Healthcare AI Lakehouse</span> on Azure, 
                  implementing <span className="text-[#4F8CFF] font-semibold">RAG-powered knowledge assistants</span>, 
                  or architecting <span className="text-[#00D4FF] font-semibold">revenue cycle intelligence platforms</span> - 
                  my goal is always to deliver <span className="text-white font-semibold">measurable business value</span>.
                </p>

                <p>
                  Currently, I'm pioneering the integration of <span className="text-[#7C5CFC] font-semibold">Generative AI</span> into 
                  enterprise data platforms, building intelligent systems that leverage LLMs, vector databases, and modern 
                  data architectures to transform how organizations work with data.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 * index }}
                    className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300 group cursor-pointer"
                    style={{
                      borderColor: `${item.color}40`,
                    }}
                  >
                    <Icon
                      className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform"
                      style={{ color: item.color }}
                    />
                    <h4
                      className="text-4xl font-bold mb-2"
                      style={{ color: item.color }}
                    >
                      {item.value}
                    </h4>
                    <p className="text-muted-foreground">{item.label}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Core Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="glass-card p-8 rounded-2xl mt-6"
            >
              <h4 className="text-xl font-bold text-white mb-4">Core Expertise</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  'Enterprise Data Platforms',
                  'Healthcare Analytics',
                  'AI/ML Integration',
                  'Cloud Architecture',
                  'Platform Leadership',
                  'Scalability & Performance',
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full text-sm font-medium"
                    style={{
                      background: `linear-gradient(135deg, #4F8CFF20, #00D4FF20)`,
                      border: '1px solid #4F8CFF40',
                      color: '#00D4FF',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Globe Visualization - Temporarily disabled */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="glass-card p-6 rounded-2xl"
          >
            <h4 className="text-xl font-bold text-white mb-4 text-center">Global Experience</h4>
            <Globe3D />
          </motion.div> */}
        </div>
      </div>

      {/* Floating 3D Cubes - Temporarily disabled */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="mt-12"
      >
        <h3 className="text-2xl font-bold text-center text-white mb-6">Technology Stack</h3>
        <FloatingCubes3D />
      </motion.div> */}
    </section>
  );
}
