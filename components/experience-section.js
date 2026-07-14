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
      period: 'Feb 2026 - July 2026',
      location: 'Detroit, MI',
      color: '#4F8CFF',
      achievements: [
        'Consolidated competing KPI definitions into reusable Epic Clarity, Caboodle, SQL Server, Power BI, and DAX semantic models, improving dashboard performance by 35% across clinical, finance, revenue cycle, and patient throughput reporting.',
        'A 35% reduction in refresh time followed the redesign of revenue cycle transformations into reusable T-SQL procedures, indexed views, and optimized Power BI datasets, accelerating denial, reimbursement, and financial analysis.',
        'Board and operational dashboards depended on daily data accuracy; embedded reconciliation, exception handling, and business rules through SQL, Python, and Power BI, detecting defects before CMS, HEDIS, clinical quality, and executive reporting.',
        'Governed deployments through Azure DevOps, Git, SQL Server security, RLS, PHI controls, and Agile release processes stabilized critical reporting while preserving secure, HIPAA aligned access.',
      ],
      technologies: ['Azure', 'Databricks', 'Synapse', 'Power BI', 'PySpark', 'ML', 'Delta Lake'],
    },
    {
      company: 'Human Services Research Institute',
      role: 'Business Intelligence Analyst & Data Engineer',
      period: '2019 - 2021',
      location: 'Cambridge, MA',
      color: '#00D4FF',
      achievements: [
        'Designed and implemented enterprise data warehouse on Snowflake serving 200+ users',
        'Built automated ETL pipelines processing multi-state healthcare data',
        'Created interactive Tableau dashboards for executive decision-making',
        'Improved data quality by 40% through automated validation frameworks',
      ],
      technologies: ['Snowflake', 'Python', 'Tableau', 'SQL', 'ETL', 'Data Warehouse'],
    },
    {
      company: 'Accenture',
      role: 'Data Analyst',
      period: '2017 - 2019',
      location: 'Bangalore, India',
      color: '#7C5CFC',
      achievements: [
        'Delivered data analytics solutions for Fortune 500 healthcare clients',
        'Built predictive models for customer churn with 85% accuracy',
        'Automated reporting processes saving 100+ hours monthly',
        'Collaborated with cross-functional teams on data migration projects',
      ],
      technologies: ['SQL Server', 'Python', 'Power BI', 'Excel', 'VBA'],
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
