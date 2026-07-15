'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
            Enterprise-scale platform architectures and system design
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Nexus AI Platform Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-[#4F8CFF] mb-8 text-center">
              Nexus AI Platform Architecture
            </h3>
            
            <div className="bg-black/40 rounded-xl p-8 border border-[#4F8CFF]/30 overflow-x-auto">
              <pre className="text-[#00D4FF] font-mono text-sm leading-relaxed">
{`                Nexus AI Platform
                        │
    ┌───────────────────┼───────────────────┐
    │                   │                   │
AI Data Analyst    Knowledge Assistant   Healthcare AI
    │                   │                   │
    └────────────── Shared AI Services ─────┘
          LangGraph • LLM Gateway • RAG
    Authentication • APIs • Monitoring
         PostgreSQL • Redis • Docker
          React • FastAPI • Kubernetes`}
              </pre>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="glass-card p-6 rounded-xl border border-[#4F8CFF]/40">
                <h4 className="text-lg font-bold text-[#4F8CFF] mb-3">Application Layer</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• AI Data Analyst Agent</li>
                  <li>• Knowledge Assistant</li>
                  <li>• Healthcare Multi-Agent</li>
                </ul>
              </div>

              <div className="glass-card p-6 rounded-xl border border-[#00D4FF]/40">
                <h4 className="text-lg font-bold text-[#00D4FF] mb-3">AI Services</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• LangGraph Orchestration</li>
                  <li>• LLM Gateway (Claude)</li>
                  <li>• RAG & Vector Search</li>
                </ul>
              </div>

              <div className="glass-card p-6 rounded-xl border border-[#7C5CFC]/40">
                <h4 className="text-lg font-bold text-[#7C5CFC] mb-3">Infrastructure</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• PostgreSQL + Redis</li>
                  <li>• Docker + Kubernetes</li>
                  <li>• React + FastAPI</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Healthcare Data Lakehouse Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-[#00D4FF] mb-8 text-center">
              Healthcare Data Lakehouse Architecture
            </h3>
            
            <div className="bg-black/40 rounded-xl p-8 border border-[#00D4FF]/30 overflow-x-auto">
              <pre className="text-[#4F8CFF] font-mono text-sm leading-relaxed">
{`    Epic Systems (Clarity/Caboodle)
                │
                ▼
        Azure Data Factory
                │
                ▼
    ┌─── Azure Databricks ───┐
    │   Medallion Architecture │
    │                          │
    │   Bronze → Silver → Gold │
    │   (Raw)   (Curated) (BI) │
    └──────────────────────────┘
                │
         ┌──────┴──────┐
         ▼             ▼
    Delta Lake    Snowflake
         │             │
         └──────┬──────┘
                ▼
           Power BI
      Semantic Models & DAX
                │
                ▼
        Executive Dashboards
     Revenue Cycle • Clinical`}
              </pre>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mt-8">
              <div className="glass-card p-4 rounded-xl border border-[#4F8CFF]/40 text-center">
                <p className="text-2xl font-bold text-[#4F8CFF] mb-1">2M+</p>
                <p className="text-xs text-muted-foreground">Records/Month</p>
              </div>
              <div className="glass-card p-4 rounded-xl border border-[#00D4FF]/40 text-center">
                <p className="text-2xl font-bold text-[#00D4FF] mb-1">65%</p>
                <p className="text-xs text-muted-foreground">Faster Pipelines</p>
              </div>
              <div className="glass-card p-4 rounded-xl border border-[#7C5CFC]/40 text-center">
                <p className="text-2xl font-bold text-[#7C5CFC] mb-1">35%</p>
                <p className="text-xs text-muted-foreground">Dashboard Speed</p>
              </div>
              <div className="glass-card p-4 rounded-xl border border-[#4F8CFF]/40 text-center">
                <p className="text-2xl font-bold text-[#4F8CFF] mb-1">HIPAA</p>
                <p className="text-xs text-muted-foreground">Compliant</p>
              </div>
            </div>
          </motion.div>

          {/* RAG Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass-card p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-[#7C5CFC] mb-8 text-center">
              Agentic RAG Architecture
            </h3>
            
            <div className="bg-black/40 rounded-xl p-8 border border-[#7C5CFC]/30 overflow-x-auto">
              <pre className="text-[#7C5CFC] font-mono text-sm leading-relaxed">
{`      User Query
           │
           ▼
    ┌─── LangGraph Agent ───┐
    │  Multi-Agent Workflow  │
    └───────────────────────┘
           │
    ┌──────┴──────┐
    ▼             ▼
Retriever     Validator
    │             │
    ▼             ▼
Vector DB     Evidence
(ChromaDB)    Checking
    │             │
    └──────┬──────┘
           ▼
       LLM (Claude)
     Context + Query
           │
           ▼
    Grounded Response
   + Source Citations`}
              </pre>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                <span className="text-[#7C5CFC] font-semibold">Key Features:</span> Evidence validation, source citation, 
                multi-agent orchestration, context-aware responses
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
