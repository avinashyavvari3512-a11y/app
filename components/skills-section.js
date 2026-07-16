'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cloud, Database, Code, Brain, BarChart3, Cog, Layers, Zap } from 'lucide-react';

export function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      name: 'AI & LLM Engineering',
      icon: Brain,
      color: '#4F8CFF',
      skills: ['LangGraph', 'RAG', 'Agentic AI', 'Claude', 'Llama', 'Hugging Face', 'PyTorch', 'QLORA', 'PEFT', 'LLM Fine-Tuning'],
    },
    {
      name: 'Data Engineering',
      icon: Database,
      color: '#00D4FF',
      skills: ['Azure Databricks', 'Snowflake', 'PySpark', 'Delta Lake', 'Azure Data Factory', 'Azure Synapse', 'Airflow', 'CDC', 'Medallion Architecture'],
    },
    {
      name: 'Programming & Frameworks',
      icon: Code,
      color: '#7C5CFC',
      skills: ['Python', 'SQL', 'T-SQL', 'FastAPI', 'Pandas', 'TensorFlow', 'spaCy', 'NetworkX', 'React'],
    },
    {
      name: 'Healthcare & Epic',
      icon: Layers,
      color: '#4F8CFF',
      skills: ['Epic Clarity', 'Epic Caboodle', 'HIPAA', 'PHI Governance', 'HEDIS', 'CMS Reporting', 'Clinical Data'],
    },
    {
      name: 'Cloud & Infrastructure',
      icon: Cloud,
      color: '#00D4FF',
      skills: ['Azure', 'Docker', 'Redis', 'PostgreSQL', 'Azure DevOps', 'Git', 'CI/CD'],
    },
    {
      name: 'Analytics & BI',
      icon: BarChart3,
      color: '#7C5CFC',
      skills: ['Power BI', 'DAX', 'Tableau', 'Plotly', 'Semantic Modeling', 'Dimensional Modeling'],
    },
    {
      name: 'ML & Data Science',
      icon: Zap,
      color: '#4F8CFF',
      skills: ['Feature Engineering', 'ML Pipelines', 'NLP', 'Predictive Modeling', 'Statistical Analysis', 'Graph Analytics'],
    },
    {
      name: 'Data Governance',
      icon: Cog,
      color: '#00D4FF',
      skills: ['Row Level Security', 'Master Data Management', 'Data Quality', 'Data Lineage', 'Auditability', 'SLA Tracking'],
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
            Comprehensive toolkit for building enterprise AI platforms and governed data products
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 group cursor-pointer"
                style={{
                  borderColor: `${category.color}40`,
                }}
              >
                <div className="flex items-center mb-4">
                  <div
                    className="p-3 rounded-lg mr-3"
                    style={{
                      background: `${category.color}20`,
                      border: `1px solid ${category.color}40`,
                    }}
                  >
                    <Icon
                      className="w-5 h-5 group-hover:scale-110 transition-transform"
                      style={{ color: category.color }}
                    />
                  </div>
                  <h3
                    className="text-lg font-bold"
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
                      className="px-2 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
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
