'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProjectCard3D } from '@/components/3d/project-card-3d';

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      title: 'Nexus AI Platform',
      description: 'Modular enterprise AI platform composed of production-inspired applications demonstrating expertise in Agentic AI, LLM Engineering, RAG, and Production AI Systems',
      image: 'https://images.unsplash.com/photo-1698306642516-9841228dcff3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxBSSUyMGhlYWx0aGNhcmUlMjBkYXRhfGVufDB8fHxibHVlfDE3ODQxNTIxNzF8MA&ixlib=rb-4.1.0&q=85',
      category: ['AI', 'Enterprise', 'Featured'],
      technologies: ['LangGraph', 'FastAPI', 'Claude', 'RAG', 'Docker', 'React'],
      impact: ['Modular architecture', 'Shared authentication', 'Enterprise-ready', 'Reusable AI capabilities'],
      color: '#4F8CFF',
      architectureLink: '/nexus-ai',
    },
    {
      title: 'Autonomous Data Analytics Agent',
      description: 'AI-powered analytics agent that converts natural language into SQL, Python analysis, and interactive visualizations through autonomous tool calling',
      image: 'https://images.unsplash.com/photo-1660165458059-57cfb6cc87e5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTZ8MHwxfHNlYXJjaHwyfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHxibHVlfDE3ODQxNTI1NDh8MA&ixlib=rb-4.1.0&q=85',
      category: ['AI', 'Agentic AI', 'Analytics'],
      technologies: ['Python', 'LangGraph', 'FastAPI', 'SQL', 'Pandas', 'Plotly'],
      impact: ['Natural language SQL', 'Autonomous analysis', 'Interactive visualizations', 'Tool calling'],
      color: '#00D4FF',
    },
    {
      title: 'Enterprise Knowledge Intelligence Platform',
      description: 'Agentic RAG application that retrieves enterprise knowledge, validates evidence, cites sources, and generates grounded responses using multi-agent orchestration',
      image: 'https://images.unsplash.com/photo-1617791160536-598cf32026fb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTZ8MHwxfHNlYXJjaHwzfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHxibHVlfDE3ODQxNTI1NDh8MA&ixlib=rb-4.1.0&q=85',
      category: ['AI', 'RAG', 'Enterprise'],
      technologies: ['LangGraph', 'Claude', 'RAG', 'Vector Search', 'ChromaDB', 'Embeddings'],
      impact: ['Evidence validation', 'Source citation', 'Multi-agent orchestration', 'Grounded responses'],
      color: '#7C5CFC',
    },
    {
      title: 'Healthcare Multi-Agent Assistant',
      description: 'Production-style healthcare assistant coordinating specialized AI agents to summarize clinical knowledge, policies, and operational workflows using RAG',
      image: 'https://images.unsplash.com/photo-1560306990-18fa759c8713?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjV8MHwxfHNlYXJjaHwyfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neXxlbnwwfHx8Ymx1ZXwxNzg0MTUyNTQxfDA&ixlib=rb-4.1.0&q=85',
      category: ['AI', 'Healthcare', 'Agentic AI'],
      technologies: ['LangGraph', 'FastAPI', 'Claude', 'RAG', 'Healthcare AI'],
      impact: ['Clinical knowledge', 'Policy summarization', 'Agent coordination', 'Healthcare workflows'],
      color: '#4F8CFF',
    },
    {
      title: 'Enterprise GenAI SaaS Platform',
      description: 'Full-stack AI application with authentication, user workspaces, streaming LLM responses, REST APIs, and scalable cloud deployment',
      image: 'https://images.unsplash.com/photo-1660583969160-43c87eb90401?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHxBSSUyMGhlYWx0aGNhcmUlMjBkYXRhfGVufDB8fHxibHVlfDE3ODQxNTIxNzF8MA&ixlib=rb-4.1.0&q=85',
      category: ['AI', 'Enterprise', 'SaaS'],
      technologies: ['React', 'FastAPI', 'PostgreSQL', 'Docker', 'Redis', 'JWT'],
      impact: ['User authentication', 'Streaming responses', 'Scalable deployment', 'Production-ready'],
      color: '#00D4FF',
    },
    {
      title: 'Domain-Adapted LLM Fine-Tuning',
      description: 'Fine-tuned open-source LLM using parameter-efficient techniques to improve domain-specific reasoning, response quality, and inference efficiency',
      image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwyfHxuZXVyYWwlMjBuZXR3b3JrfGVufDB8fHxibHVlfDE3ODQxNTIxODB8MA&ixlib=rb-4.1.0&q=85',
      category: ['AI', 'ML', 'LLM'],
      technologies: ['Llama', 'Hugging Face', 'PyTorch', 'LORA', 'QLORA', 'PEFT'],
      impact: ['Domain adaptation', 'Parameter-efficient', 'Improved reasoning', 'Inference optimization'],
      color: '#7C5CFC',
    },
    {
      title: 'Healthcare AI Lakehouse',
      description: 'Enterprise lakehouse processing 2M+ records monthly with Medallion architecture, governed data layers, and AI-ready datasets',
      image: 'https://images.unsplash.com/photo-1650327034581-1711a15a5430?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZW5naW5lZXJpbmd8ZW58MHx8fGJsdWV8MTc4NDE1MjE3Nnww&ixlib=rb-4.1.0&q=85',
      category: ['Data Engineering', 'Healthcare', 'Cloud'],
      technologies: ['Azure Databricks', 'PySpark', 'Delta Lake', 'Azure Synapse', 'Medallion Architecture'],
      impact: ['2M+ records/month', '65% faster pipelines', 'Governed data', 'AI-ready datasets'],
      color: '#4F8CFF',
    },
    {
      title: 'Epic Healthcare Intelligence Platform',
      description: 'Semantic data models from Epic Clarity and Caboodle supporting revenue cycle, clinical analytics, quality measures, and CMS reporting',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjV8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neXxlbnwwfHx8Ymx1ZXwxNzg0MTUyNTQxfDA&ixlib=rb-4.1.0&q=85',
      category: ['Healthcare', 'Data Engineering', 'Analytics'],
      technologies: ['Epic Clarity', 'Epic Caboodle', 'SQL Server', 'Power BI', 'T-SQL', 'DAX'],
      impact: ['35% faster dashboards', 'Semantic modeling', 'HIPAA compliant', 'Revenue cycle optimization'],
      color: '#00D4FF',
    },
    {
      title: 'Predictive Healthcare Analytics',
      description: 'ML models achieving 92% accuracy, processing 12M+ Medicaid claims to support $2.5M+ healthcare funding decisions',
      image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwyfHxkYXRhJTIwZW5naW5lZXJpbmd8ZW58MHx8fGJsdWV8MTc4NDE1MjE3Nnww&ixlib=rb-4.1.0&q=85',
      category: ['ML', 'Healthcare', 'Analytics'],
      technologies: ['Python', 'Scikit-Learn', 'Feature Engineering', 'Snowflake', 'Power BI'],
      impact: ['92% accuracy', '12M+ records', '$2.5M+ decisions', 'Predictive models'],
      color: '#7C5CFC',
    },
  ];

  const filters = ['All', 'AI', 'Agentic AI', 'RAG', 'Healthcare', 'Data Engineering', 'Enterprise', 'ML', 'Featured'];

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(p => p.category.includes(selectedFilter));

  return (
    <section id="projects" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Production AI systems, enterprise data platforms, and intelligent healthcare solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <Filter className="w-5 h-5 text-[#4F8CFF] mt-2" />
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={selectedFilter === filter ? 'default' : 'outline'}
              className={`rounded-full transition-all duration-300 ${
                selectedFilter === filter
                  ? 'bg-[#4F8CFF] hover:bg-[#00D4FF] text-white'
                  : 'border-white/20 text-white hover:bg-white/10'
              }`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard3D key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
