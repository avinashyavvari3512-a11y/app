'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      title: 'Healthcare AI Lakehouse',
      description: 'Enterprise-scale lakehouse architecture processing 15M+ records monthly with real-time analytics and ML capabilities',
      image: 'https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3l8ZW58MHx8fGJsdWV8MTc4Mzk1NjY0MHww&ixlib=rb-4.1.0&q=85',
      category: ['Cloud', 'Healthcare', 'AI'],
      technologies: ['Azure', 'Databricks', 'Delta Lake', 'Synapse', 'PySpark'],
      impact: ['15M+ records/month', 'Real-time processing', '99.9% uptime'],
      color: '#4F8CFF',
    },
    {
      title: 'Revenue Cycle Intelligence Platform',
      description: 'ML-powered platform predicting claim denials with 92% accuracy, optimizing revenue cycle operations',
      image: 'https://images.pexels.com/photos/7947754/pexels-photo-7947754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      category: ['ML', 'Healthcare', 'Analytics'],
      technologies: ['Python', 'Scikit-Learn', 'Power BI', 'SQL', 'Azure ML'],
      impact: ['92% accuracy', '$10M+ revenue impact', '50+ dashboards'],
      color: '#00D4FF',
    },
    {
      title: 'Enterprise Data Platform',
      description: 'Scalable multi-cloud data platform with automated ETL pipelines and unified analytics layer',
      image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwyfHxkYXRhJTIwZW5naW5lZXJpbmd8ZW58MHx8fGJsdWV8MTc4Mzk1NjYzNHww&ixlib=rb-4.1.0&q=85',
      category: ['Cloud', 'Data Engineering'],
      technologies: ['Snowflake', 'Airflow', 'DBT', 'Python', 'Docker'],
      impact: ['200+ users', '65% faster pipelines', 'Multi-cloud'],
      color: '#7C5CFC',
    },
    {
      title: 'FHIR Analytics Engine',
      description: 'Healthcare interoperability solution processing standardized FHIR resources for clinical analytics',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwyfHxBSSUyMHRlY2hub2xvZ3l8ZW58MHx8fGJsdWV8MTc4Mzk1NjY0MHww&ixlib=rb-4.1.0&q=85',
      category: ['Healthcare', 'Data Engineering'],
      technologies: ['FHIR', 'Azure', 'Python', 'SQL', 'REST APIs'],
      impact: ['HIPAA compliant', 'Real-time sync', 'Standardized data'],
      color: '#4F8CFF',
    },
    {
      title: 'Healthcare Knowledge Assistant (RAG)',
      description: 'AI-powered assistant using RAG architecture to provide intelligent insights from medical documentation',
      image: 'https://images.pexels.com/photos/10827984/pexels-photo-10827984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      category: ['AI', 'Healthcare'],
      technologies: ['OpenAI', 'LangChain', 'Vector DB', 'Python', 'FastAPI'],
      impact: ['Natural language queries', 'Contextual answers', 'Document intelligence'],
      color: '#00D4FF',
    },
    {
      title: 'Customer Churn Prediction',
      description: 'Predictive ML model identifying at-risk customers with proactive retention strategies',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHw0fHxBSSUyMHRlY2hub2xvZ3l8ZW58MHx8fGJsdWV8MTc4Mzk1NjY0MHww&ixlib=rb-4.1.0&q=85',
      category: ['ML', 'Analytics'],
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-Learn'],
      impact: ['85% accuracy', 'Early detection', 'Automated alerts'],
      color: '#7C5CFC',
    },
    {
      title: 'AI Data Quality Monitoring',
      description: 'Intelligent monitoring system using ML to detect data anomalies and ensure quality',
      image: 'https://images.unsplash.com/photo-1660165458059-57cfb6cc87e5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwzfHxBSSUyMHRlY2hub2xvZ3l8ZW58MHx8fGJsdWV8MTc4Mzk1NjY0MHww&ixlib=rb-4.1.0&q=85',
      category: ['AI', 'Data Engineering'],
      technologies: ['Python', 'Great Expectations', 'MLflow', 'Airflow'],
      impact: ['40% quality improvement', 'Automated validation', 'Real-time alerts'],
      color: '#4F8CFF',
    },
    {
      title: 'Healthcare Claims Analytics Platform',
      description: 'Comprehensive analytics platform for healthcare claims processing and insights',
      image: 'https://images.pexels.com/photos/37911407/pexels-photo-37911407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      category: ['Healthcare', 'Analytics'],
      technologies: ['Power BI', 'SQL Server', 'SSIS', 'Python'],
      impact: ['Claims processing', 'Cost optimization', 'Fraud detection'],
      color: '#00D4FF',
    },
  ];

  const filters = ['All', 'Cloud', 'AI', 'ML', 'Healthcare', 'Data Engineering', 'Analytics'];

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
            Enterprise-scale solutions delivering measurable business impact
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group"
              style={{
                borderColor: `${project.color}40`,
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-black/50">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, transparent, ${project.color}20)`,
                  }}
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: project.color }}
                >
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded text-xs font-medium bg-white/5 border border-white/10 text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Impact Metrics */}
                <div className="space-y-2 mb-4">
                  {project.impact.map((metric, i) => (
                    <div key={i} className="flex items-center text-sm">
                      <span
                        className="mr-2"
                        style={{ color: project.color }}
                      >
                        ✓
                      </span>
                      <span className="text-muted-foreground">{metric}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-white/20 hover:bg-white/10"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-white/20 hover:bg-white/10"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
