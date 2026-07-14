'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export function CertificationsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      name: 'Microsoft Azure Data Engineer Associate',
      issuer: 'Microsoft',
      year: '2023',
      color: '#4F8CFF',
      icon: '☁️',
    },
    {
      name: 'Snowflake SnowPro Core Certification',
      issuer: 'Snowflake',
      year: '2022',
      color: '#00D4FF',
      icon: '❄️',
    },
    {
      name: 'Databricks Certified Data Engineer',
      issuer: 'Databricks',
      year: '2023',
      color: '#7C5CFC',
      icon: '🔥',
    },
    {
      name: 'Microsoft Fabric Analytics Engineer',
      issuer: 'Microsoft',
      year: '2024',
      color: '#4F8CFF',
      icon: '🧬',
    },
    {
      name: 'Generative AI with LLMs',
      issuer: 'DeepLearning.AI',
      year: '2024',
      color: '#00D4FF',
      icon: '🤖',
    },
  ];

  return (
    <section id="certifications" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Certifications
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Industry-recognized credentials and continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 group cursor-pointer"
              style={{
                borderColor: `${cert.color}40`,
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="text-4xl p-3 rounded-lg"
                  style={{
                    background: `${cert.color}20`,
                    border: `1px solid ${cert.color}40`,
                  }}
                >
                  {cert.icon}
                </div>
                <CheckCircle
                  className="w-6 h-6"
                  style={{ color: cert.color }}
                />
              </div>

              <h3
                className="text-lg font-bold mb-2"
                style={{ color: cert.color }}
              >
                {cert.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-1">{cert.issuer}</p>
              <p className="text-white text-sm font-semibold">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
