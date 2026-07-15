'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

export function AchievementsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    { value: 2, suffix: 'M+', label: 'Records Monthly', color: '#4F8CFF' },
    { value: 12, suffix: 'M+', label: 'Medicaid Claims Unified', color: '#00D4FF' },
    { value: 92, suffix: '%', label: 'ML Model Accuracy', color: '#7C5CFC' },
    { value: 65, suffix: '%', label: 'Pipeline Speed Gain', color: '#4F8CFF' },
    { value: 75, suffix: '%', label: 'Manual Review Reduction', color: '#00D4FF' },
    { value: 35, suffix: '%', label: 'Dashboard Performance', color: '#7C5CFC' },
  ];

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Impact by the Numbers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Measurable outcomes that drive business value
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl text-center hover:scale-110 transition-all duration-300"
              style={{
                borderColor: `${achievement.color}40`,
              }}
            >
              <AnimatedCounter
                value={achievement.value}
                suffix={achievement.suffix}
                color={achievement.color}
                inView={inView}
              />
              <p className="text-muted-foreground text-sm mt-2">
                {achievement.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({ value, suffix, color, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <h3 className="text-4xl font-bold" style={{ color }}>
      {count}{suffix}
    </h3>
  );
}
