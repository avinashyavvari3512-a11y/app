'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cloud, Database, Code, Brain, BarChart3, Cog } from 'lucide-react';

export function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      name: 'Cloud Platforms',
      icon: Cloud,
      color: '#4F8CFF',
      skills: ['Azure', 'Google Cloud', 'Kubernetes', 'Docker'],
    },
    {
      name: 'Data Engineering',
      icon: Database,
      color: '#00D4FF',
      skills: ['Databricks', 'Snowflake', 'Spark', 'PySpark', 'Delta Lake', 'Kafka', 'Airflow', 'ADF', 'Synapse'],
    },
    {
      name: 'Programming',
      icon: Code,
      color: '#7C5CFC',
      skills: ['Python', 'SQL', 'Java', 'JavaScript', 'TypeScript', 'Scala'],
    },
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      color: '#4F8CFF',
      skills: ['OpenAI', 'LangChain', 'MLflow', 'TensorFlow', 'Scikit-Learn', 'RAG', 'Vector DBs', 'MCP'],
    },
    {
      name: 'Business Intelligence',
      icon: BarChart3,
      color: '#00D4FF',
      skills: ['Power BI', 'Tableau', 'Looker', 'DAX', 'Advanced Analytics'],
    },
    {
      name: 'DevOps & Tools',
      icon: Cog,
      color: '#7C5CFC',
      skills: ['Git', 'GitHub Actions', 'CI/CD', 'Terraform', 'Jenkins'],
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building enterprise-scale intelligent systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 group cursor-pointer"
                style={{
                  borderColor: `${category.color}40`,
                }}
              >
                <div className="flex items-center mb-6">
                  <div
                    className="p-3 rounded-lg mr-4"
                    style={{
                      background: `${category.color}20`,
                      border: `1px solid ${category.color}40`,
                    }}
                  >
                    <Icon
                      className="w-6 h-6 group-hover:scale-110 transition-transform"
                      style={{ color: category.color }}
                    />
                  </div>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: category.color }}
                  >
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                      className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
