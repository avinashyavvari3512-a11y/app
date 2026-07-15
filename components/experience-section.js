'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Calendar, MapPin } from 'lucide-react';

export function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: 'Henry Ford Health',
      role: 'Senior Business Intelligence Developer',
      period: '2024 - Present',
      location: 'Detroit, MI',
      color: '#4F8CFF',
      achievements: [
        'Standardized clinical, financial, and operational data from Epic Clarity and Epic Caboodle into reusable semantic models using SQL Server, T-SQL, Power BI, and DAX, reducing dashboard refresh times by 35%',
        'Optimized revenue cycle datasets through dimensional modeling, SQL performance tuning, and Python automation, improving reimbursement reporting, denial analysis, and financial performance monitoring',
        'Designed governed analytical datasets supporting patient throughput, quality measures, CMS reporting, value-based care, and executive decision-making',
        'Automated data validation, reconciliation, anomaly detection, and business rule enforcement using Python and SQL, improving production data quality',
        'Strengthened enterprise data governance through HIPAA-compliant access controls, PHI protection, Row Level Security, Azure DevOps release management, and version-controlled deployments',
      ],
      technologies: ['SQL Server', 'T-SQL', 'Python', 'Power BI', 'DAX', 'Epic Clarity', 'Epic Caboodle', 'Azure DevOps', 'HIPAA'],
    },
    {
      company: 'Human Services Research Institute',
      role: 'Senior Data Engineer',
      period: '2021 - 2025',
      location: 'Cambridge, MA',
      color: '#00D4FF',
      achievements: [
        'Engineered scalable ingestion and transformation pipelines processing 2M+ records monthly, reducing feature preparation time by 65% while improving downstream data reliability',
        'Established Medallion Lakehouse architecture with incremental processing and CDC, creating governed Bronze, Silver, and Gold data layers that improved data quality and lineage',
        'Unified 12M+ Medicaid claims, provider, demographic, and operational records into standardized analytical datasets enabling predictive models achieving 92% accuracy',
        'Replaced resource-intensive SQL workloads with distributed Spark processing, significantly improving scalability, execution efficiency, and reliability',
        'Built reusable analytical datasets supporting clinical reporting, Revenue Cycle analytics, HEDIS reporting, CMS reporting, and value-based care initiatives',
        'Implemented automated validation, reconciliation, schema enforcement, and PHI quality checks, reducing manual verification effort by 60%',
        'Mentored engineers on distributed data engineering, Spark optimization, code reviews, DevOps practices, and production support',
      ],
      technologies: ['Python', 'PySpark', 'Azure Databricks', 'Azure Data Factory', 'Azure Synapse', 'Snowflake', 'Delta Lake', 'Power BI'],
    },
    {
      company: 'George Mason University',
      role: 'Data Science Intern - FEMA Research Project',
      period: 'Jan 2021 - May 2021',
      location: 'Virginia, USA',
      color: '#7C5CFC',
      achievements: [
        'Reduced manual review by 75% through a Python, TensorFlow, and spaCy NLP pipeline that classified 80K+ emergency requests for faster operational routing',
        'Applied entity extraction and relationship mapping with spaCy, NetworkX, and graph analytics to surface patterns hidden in unstructured disaster records',
        'Automated preprocessing, feature engineering, and validation in Python, improving reproducibility and shortening machine learning iteration cycles',
      ],
      technologies: ['Python', 'TensorFlow', 'spaCy', 'NetworkX', 'NLP', 'Machine Learning', 'Graph Analytics'],
    },
    {
      company: 'Accenture',
      role: 'Data Analyst',
      period: '2017 - 2019',
      location: 'Hyderabad, India',
      color: '#4F8CFF',
      achievements: [
        'Automated recurring reporting with SQL, Python, Tableau, and SQL Server, reducing manual preparation by 45% while expanding operational visibility',
        'Introduced SQL and Python reconciliation, cleansing, and business rule checks across large relational datasets, making production reports more dependable',
        'Created reusable SQL models, dimensional structures, and Tableau data sources that replaced inconsistent KPI calculations',
        'Translated changing business requirements into tested analytics releases through Agile, Jira, SQL, Python, and Tableau',
      ],
      technologies: ['SQL', 'SQL Server', 'Python', 'Tableau', 'Excel', 'ETL', 'Agile', 'Jira'],
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building enterprise data platforms and delivering measurable business impact
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#4F8CFF] via-[#00D4FF] to-[#7C5CFC]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      background: `${exp.color}30`,
                      border: `3px solid ${exp.color}`,
                    }}
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Building2 className="w-8 h-8" style={{ color: exp.color }} />
                  </motion.div>
                </div>

                {/* Content Card */}
                <div
                  className={`flex-1 ml-8 md:ml-0 ${
                    index % 2 === 0 ? 'md:ml-16' : 'md:mr-16'
                  }`}
                >
                  <div
                    className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
                    style={{
                      borderColor: `${exp.color}40`,
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3
                          className="text-2xl font-bold mb-2"
                          style={{ color: exp.color }}
                        >
                          {exp.company}
                        </h3>
                        <p className="text-lg text-white font-semibold">{exp.role}</p>
                      </div>
                      <div className="flex flex-col gap-2 mt-4 md:mt-0 md:text-right">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-muted-foreground">
                          <span
                            className="mr-2 mt-1.5"
                            style={{ color: exp.color }}
                          >
                            ▸
                          </span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{
                            background: `${exp.color}20`,
                            border: `1px solid ${exp.color}40`,
                            color: exp.color,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
