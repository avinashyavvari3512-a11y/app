'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';

const Architecture3D = dynamic(() => import('@/components/3d/architecture-3d').then(mod => mod.Architecture3D), { ssr: false });

export function ArchitectureSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="architecture" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Architecture Blueprints
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Enterprise-scale data and AI platform architectures
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Enterprise Data Platform - 3D Version */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-[#4F8CFF] mb-8 text-center">
              Enterprise Data Platform Architecture (3D Interactive)
            </h3>
            <p className="text-center text-muted-foreground mb-6">
              Drag to rotate • Scroll to zoom • Click nodes for details
            </p>
            <Architecture3D />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
