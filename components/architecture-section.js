'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Database, Cloud, Brain, BarChart } from 'lucide-react';

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
          {/* Enterprise Data Platform */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-[#4F8CFF] mb-8 text-center">
              Enterprise Data Platform Architecture
            </h3>
            
            <div className="flex flex-col items-center gap-6">
              <ArchitectureNode
                icon={Database}
                label="Data Sources"
                sublabel="SQL, APIs, Files"
                color="#4F8CFF"
                delay={0.1}
                inView={inView}
              />
              
              <ArchitectureArrow />
              
              <ArchitectureNode
                icon={Cloud}
                label="Azure Data Factory"
                sublabel="ETL Orchestration"
                color="#00D4FF"
                delay={0.2}
                inView={inView}
              />
              
              <ArchitectureArrow />
              
              <ArchitectureNode
                icon={Database}
                label="Databricks"
                sublabel="Data Processing"
                color="#7C5CFC"
                delay={0.3}
                inView={inView}
              />
              
              <ArchitectureArrow />
              
              <ArchitectureNode
                icon={Database}
                label="Delta Lake"
                sublabel="Lakehouse Layer"
                color="#4F8CFF"
                delay={0.4}
                inView={inView}
              />
              
              <ArchitectureArrow />
              
              <ArchitectureNode
                icon={Cloud}
                label="Snowflake"
                sublabel="Data Warehouse"
                color="#00D4FF"
                delay={0.5}
                inView={inView}
              />
              
              <ArchitectureArrow />
              
              <ArchitectureNode
                icon={BarChart}
                label="Power BI"
                sublabel="Analytics Layer"
                color="#7C5CFC"
                delay={0.6}
                inView={inView}
              />
              
              <ArchitectureArrow />
              
              <ArchitectureNode
                icon={BarChart}
                label="Executive Dashboard"
                sublabel="Business Insights"
                color="#4F8CFF"
                delay={0.7}
                inView={inView}
              />
            </div>
          </motion.div>

          {/* Modern AI RAG Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-[#00D4FF] mb-8 text-center">
              Modern AI RAG Architecture
            </h3>
            
            <div className="flex flex-col items-center gap-6">
              <ArchitectureNode
                icon={Database}
                label="Documents"
                sublabel="PDFs, Docs, Text"
                color="#00D4FF"
                delay={0.1}
                inView={inView}
              />
              
              <ArchitectureArrow />
              
              <ArchitectureNode
                icon={Brain}
                label="Embedding Model"
                sublabel="Text Vectorization"
                color="#7C5CFC"
                delay={0.2}
                inView={inView}
              />
              
              <ArchitectureArrow />
              
              <ArchitectureNode
                icon={Database}
                label="Vector Database"
                sublabel="Semantic Search"
                color="#4F8CFF"
                delay={0.3}
                inView={inView}
              />
              
              <ArchitectureArrow />
              
              <ArchitectureNode
                icon={Brain}
                label="Retriever"
                sublabel="Context Fetching"
                color="#00D4FF"
                delay={0.4}
                inView={inView}
              />
              
              <ArchitectureArrow />
              
              <ArchitectureNode
                icon={Brain}
                label="OpenAI GPT"
                sublabel="LLM Processing"
                color="#7C5CFC"
                delay={0.5}
                inView={inView}
              />
              
              <ArchitectureArrow />
              
              <ArchitectureNode
                icon={Brain}
                label="Response"
                sublabel="Contextual Answer"
                color="#4F8CFF"
                delay={0.6}
                inView={inView}
              />
              
              <ArchitectureArrow />
              
              <ArchitectureNode
                icon={BarChart}
                label="Chat Interface"
                sublabel="User Experience"
                color="#00D4FF"
                delay={0.7}
                inView={inView}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ArchitectureNode({ icon: Icon, label, sublabel, color, delay, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center"
    >
      <div
        className="w-32 h-32 rounded-2xl flex flex-col items-center justify-center gap-2 group cursor-pointer hover:scale-110 transition-transform"
        style={{
          background: `${color}20`,
          border: `2px solid ${color}`,
        }}
      >
        <Icon className="w-12 h-12" style={{ color }} />
        <div className="text-center px-2">
          <p className="text-sm font-bold text-white">{label}</p>
          <p className="text-xs text-muted-foreground">{sublabel}</p>
        </div>
      </div>
    </motion.div>
  );
}

function ArchitectureArrow() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      transition={{ duration: 0.3 }}
    >
      <ArrowRight className="w-6 h-6 text-[#4F8CFF] transform rotate-90" />
    </motion.div>
  );
}
