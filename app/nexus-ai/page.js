'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArchitectureNode } from '@/components/nexus/architecture-node';
import { SidePanel } from '@/components/nexus/side-panel';
import { AnimatedConnector } from '@/components/nexus/animated-connector';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function NexusAIArchitecture() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [isAnimating, setIsAnimating] = useState(true);

  // Architecture data
  const architectureData = {
    users: {
      title: 'Users',
      icon: '👥',
      subtitle: 'Enterprise Stakeholders',
      purpose: 'Business users who interact with AI applications for data analysis, knowledge retrieval, and decision support',
      technologies: ['Web Interface', 'Dashboard', 'Chat UI'],
      responsibilities: [
        'Natural language queries',
        'Data exploration requests',
        'Report generation',
        'Knowledge base search',
        'Interactive analytics',
      ],
      businessValue: 'Enables non-technical users to leverage AI for data-driven insights without requiring SQL or programming knowledge',
    },
    
    frontend: {
      title: 'Frontend Layer',
      icon: '🎨',
      subtitle: 'Modern Web Interface',
      purpose: 'Responsive React application providing intuitive interfaces for data analytics, knowledge search, and AI interactions',
      description: 'Built with Next.js and React, the frontend delivers a seamless user experience with real-time updates, file uploads, database connections, and authentication.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      responsibilities: [
        'User authentication and session management',
        'Real-time chat interface with streaming responses',
        'Interactive data visualizations (Plotly)',
        'File upload and database connection forms',
        'Responsive dashboard layouts',
        'State management and error handling',
      ],
      businessValue: 'Provides enterprise users with production-grade UI/UX comparable to commercial AI platforms',
      futureImprovements: [
        'Add collaboration features (shared workspaces)',
        'Implement advanced visualization library',
        'Mobile-optimized interface',
        'Offline mode support',
      ],
    },

    backend: {
      title: 'Backend API',
      icon: '⚙️',
      subtitle: 'FastAPI REST Services',
      purpose: 'High-performance API layer handling authentication, business logic, and orchestration of AI agents',
      description: 'FastAPI-based backend providing RESTful endpoints, WebSocket streaming, authentication, and session management.',
      technologies: ['FastAPI', 'Python', 'JWT', 'SQLAlchemy', 'Pydantic'],
      responsibilities: [
        'User authentication and authorization (JWT)',
        'Session management and context tracking',
        'Request validation and error handling',
        'Streaming response coordination',
        'Database connection pooling',
        'API rate limiting and security',
      ],
      businessValue: 'Provides secure, scalable API infrastructure supporting thousands of concurrent users',
      futureImprovements: [
        'Implement GraphQL for flexible queries',
        'Add API versioning',
        'Enhanced monitoring and tracing',
        'Multi-tenancy support',
      ],
    },

    orchestration: {
      title: 'LangGraph Orchestration',
      icon: '🤖',
      subtitle: 'Agentic Workflow Engine',
      purpose: 'Coordinates autonomous agents, manages workflows, handles tool calling, and routes requests intelligently',
      description: 'LangGraph powers multi-agent orchestration with state management, conditional routing, and cyclic workflows.',
      technologies: ['LangGraph', 'LangChain', 'StateGraph', 'ToolNode'],
      responsibilities: [
        'Multi-agent workflow coordination',
        'Dynamic routing based on user intent',
        'Tool calling and execution',
        'Conversation memory management',
        'Error recovery and fallback handling',
        'Parallel agent execution',
      ],
      businessValue: 'Enables sophisticated agentic AI applications that break down complex tasks into coordinated agent workflows',
      futureImprovements: [
        'Add human-in-the-loop approval nodes',
        'Implement workflow versioning',
        'Enhanced debugging tools',
        'Visual workflow editor',
      ],
    },

    aiApps: [
      {
        title: 'Autonomous Data Analytics Agent',
        icon: '📊',
        subtitle: 'Natural Language to Insights',
        purpose: 'Converts natural language questions into SQL queries, Python analysis, visualizations, and business insights',
        description: 'An autonomous agent that connects to databases (DuckDB, PostgreSQL, Snowflake), executes SQL and Python code, generates interactive charts, and provides data-driven insights.',
        technologies: ['LangGraph', 'SQL', 'Pandas', 'Plotly', 'DuckDB'],
        responsibilities: [
          'Natural language to SQL translation',
          'Python code generation for analysis',
          'Interactive chart creation',
          'Statistical analysis and insights',
          'Database connection management',
          'Error handling and query optimization',
        ],
        businessValue: 'Democratizes data access by allowing business users to analyze data using natural language',
        futureImprovements: [
          'Support more database types',
          'Advanced ML model integration',
          'Automated insight generation',
          'Multi-table join optimization',
        ],
      },
      {
        title: 'Enterprise Knowledge Intelligence',
        icon: '📚',
        subtitle: 'Agentic RAG Platform',
        purpose: 'Retrieves enterprise knowledge, validates evidence, cites sources, and generates grounded responses',
        description: 'Multi-agent RAG system with specialized agents for retrieval, evidence validation, and response generation with citations.',
        technologies: ['LangGraph', 'ChromaDB', 'Embeddings', 'Claude', 'RAG'],
        responsibilities: [
          'Document ingestion and indexing',
          'Semantic search with vector embeddings',
          'Evidence validation and verification',
          'Source citation and attribution',
          'Multi-document synthesis',
          'Answer grounding and hallucination prevention',
        ],
        businessValue: 'Enables enterprise knowledge search with guaranteed source attribution and reduced AI hallucinations',
        futureImprovements: [
          'Add graph-based knowledge retrieval',
          'Implement temporal reasoning',
          'Multi-modal document support',
          'Federated search across multiple sources',
        ],
      },
      {
        title: 'Healthcare Multi-Agent Assistant',
        icon: '🏥',
        subtitle: 'Clinical Intelligence',
        purpose: 'Coordinates specialized AI agents for healthcare reasoning, clinical summarization, and policy search',
        description: 'Healthcare-focused system with agents specialized in clinical data, medical policies, and operational workflows.',
        technologies: ['LangGraph', 'FastAPI', 'Claude', 'Healthcare RAG'],
        responsibilities: [
          'Clinical knowledge retrieval',
          'Medical policy summarization',
          'Patient case analysis',
          'Treatment protocol search',
          'Regulatory compliance checking',
          'Multi-agent healthcare reasoning',
        ],
        businessValue: 'Accelerates clinical decision support and healthcare operations with AI-powered knowledge access',
        futureImprovements: [
          'FHIR data integration',
          'Real-time clinical alerting',
          'Diagnosis suggestion system',
          'Treatment outcome prediction',
        ],
      },
    ],

    aiServices: {
      title: 'Shared AI Services',
      icon: '🧠',
      subtitle: 'Centralized AI Infrastructure',
      purpose: 'Provides reusable AI capabilities including LLM gateway, embeddings, vector search, and model routing',
      description: 'Centralized service layer that all applications share for LLM access, embeddings, vector search, and prompt management.',
      technologies: ['LangChain', 'ChromaDB', 'Embeddings', 'Prompt Templates'],
      responsibilities: [
        'LLM gateway for model access',
        'Prompt template management',
        'Embedding generation',
        'Vector search coordination',
        'Conversation memory',
        'Model routing and fallback',
      ],
      businessValue: 'Reduces code duplication and ensures consistent AI capabilities across all applications',
      futureImprovements: [
        'Add prompt versioning',
        'Implement A/B testing',
        'Cost tracking per application',
        'Advanced caching strategies',
      ],
    },

    llms: {
      title: 'LLM Layer',
      icon: '🤖',
      subtitle: 'Large Language Models',
      purpose: 'Provides access to multiple LLM providers for reasoning, generation, and analysis',
      technologies: ['Claude (Anthropic)', 'OpenAI GPT', 'Gemini', 'Ollama'],
      responsibilities: [
        'Natural language understanding',
        'Code generation',
        'Reasoning and planning',
        'Text generation',
        'Function calling',
        'Multi-turn conversations',
      ],
      businessValue: 'Leverages state-of-the-art LLMs for intelligent application capabilities',
    },

    dataLayer: {
      title: 'Data Layer',
      icon: '💾',
      subtitle: 'Multi-Source Data Integration',
      purpose: 'Unified data access across relational databases, vector stores, document stores, and cloud data warehouses',
      technologies: [
        'PostgreSQL', 'Redis', 'ChromaDB', 'DuckDB',
        'Snowflake', 'SQL Server', 'CSV', 'Excel', 'APIs'
      ],
      responsibilities: [
        'Persistent storage for applications',
        'Vector storage for embeddings',
        'Session and cache management',
        'Database connection pooling',
        'Query execution and optimization',
        'Data transformation and validation',
      ],
      businessValue: 'Provides flexible data access patterns supporting both operational and analytical workloads',
      futureImprovements: [
        'Add graph database support',
        'Implement data lake integration',
        'Real-time change data capture',
        'Advanced query caching',
      ],
    },

    monitoring: {
      title: 'Observability & Monitoring',
      icon: '📈',
      subtitle: 'Production Monitoring Stack',
      purpose: 'Comprehensive monitoring, tracing, logging, and CI/CD for production AI systems',
      technologies: [
        'LangSmith', 'MLflow', 'Prometheus', 'Grafana',
        'Docker', 'Kubernetes', 'GitHub Actions'
      ],
      responsibilities: [
        'LLM call tracing and debugging',
        'Performance metrics collection',
        'Application logging',
        'Error tracking and alerting',
        'Cost monitoring',
        'Deployment automation',
      ],
      businessValue: 'Ensures production reliability, performance, and observability critical for enterprise AI systems',
      futureImprovements: [
        'Add anomaly detection',
        'Implement auto-scaling',
        'Advanced cost optimization',
        'Distributed tracing',
      ],
    },
  };

  const engineeringPrinciples = [
    {
      title: 'Agentic AI',
      description: 'Autonomous agents that plan, reason, and execute complex tasks using tool calling and multi-step workflows',
      icon: '🤖',
    },
    {
      title: 'LLM Engineering',
      description: 'Prompt engineering, model selection, fine-tuning, and optimizing LLM performance for production',
      icon: '🧠',
    },
    {
      title: 'RAG',
      description: 'Retrieval Augmented Generation with vector search, document chunking, and grounded response generation',
      icon: '📚',
    },
    {
      title: 'Tool Calling',
      description: 'LLMs invoking external tools, APIs, databases, and code execution for enhanced capabilities',
      icon: '🔧',
    },
    {
      title: 'Vector Search',
      description: 'Semantic search using embeddings and vector databases for intelligent document retrieval',
      icon: '🔍',
    },
    {
      title: 'Model Routing',
      description: 'Intelligent routing between multiple LLMs based on task complexity, cost, and latency requirements',
      icon: '🔀',
    },
    {
      title: 'Cloud Native',
      description: 'Containerized microservices deployed on Kubernetes with auto-scaling and fault tolerance',
      icon: '☁️',
    },
    {
      title: 'Microservices',
      description: 'Modular architecture with independent services communicating via REST APIs and message queues',
      icon: '🔗',
    },
    {
      title: 'Observability',
      description: 'Comprehensive monitoring, tracing, logging, and alerting for production AI systems',
      icon: '📊',
    },
    {
      title: 'Production AI',
      description: 'Enterprise-grade AI systems with authentication, error handling, rate limiting, and cost control',
      icon: '🚀',
    },
  ];

  return (
    <div className=\"min-h-screen bg-gradient-to-br from-gray-50 to-white\">\n      {/* Navigation */}\n      <nav className=\"bg-white border-b border-gray-200 sticky top-0 z-40\">\n        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">\n          <div className=\"flex justify-between items-center h-16\">\n            <Link\n              href=\"/\"\n              className=\"flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors\"\n            >\n              <ArrowLeft className=\"w-5 h-5\" />\n              <span className=\"font-medium\">Back to Portfolio</span>\n            </Link>\n            \n            <div className=\"flex items-center gap-4\">\n              <a\n                href=\"https://github.com/ayavvari/nexus-ai\"\n                target=\"_blank\"\n                rel=\"noopener noreferrer\"\n                className=\"flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors\"\n              >\n                <Github className=\"w-5 h-5\" />\n                <span className=\"hidden sm:inline\">GitHub</span>\n              </a>\n              <a\n                href=\"#\"\n                className=\"flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors\"\n              >\n                <ExternalLink className=\"w-5 h-5\" />\n                <span className=\"hidden sm:inline\">Live Demo</span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </nav>\n\n      {/* Hero */}\n      <section className=\"py-20 px-4 sm:px-6 lg:px-8\">\n        <div className=\"max-w-7xl mx-auto text-center\">\n          <motion.div\n            initial={{ opacity: 0, y: 20 }}\n            animate={{ opacity: 1, y: 0 }}\n            transition={{ duration: 0.6 }}\n          >\n            <h1 className=\"text-5xl md:text-6xl font-bold text-gray-900 mb-6\">\n              Nexus AI Platform\n            </h1>\n            <p className=\"text-2xl text-gray-600 mb-4\">\n              Enterprise AI Platform for Intelligent Business Applications\n            </p>\n            <p className=\"text-lg text-gray-500 max-w-4xl mx-auto\">\n              A modular AI platform demonstrating enterprise-grade Agentic AI, Retrieval Augmented Generation (RAG), \n              LLM Engineering, Production AI Systems, and Full Stack AI development.\n            </p>\n          </motion.div>\n        </div>\n      </section>\n\n      {/* Architecture Diagram */}\n      <section className=\"py-12 px-4 sm:px-6 lg:px-8\">\n        <div className=\"max-w-5xl mx-auto\">\n          <motion.div\n            initial={{ opacity: 0 }}\n            animate={{ opacity: 1 }}\n            transition={{ delay: 0.3, duration: 0.6 }}\n          >\n            <h2 className=\"text-3xl font-bold text-gray-900 mb-8 text-center\">\n              System Architecture\n            </h2>\n\n            {/* Users */}\n            <ArchitectureNode\n              node={architectureData.users}\n              onSelect={setSelectedNode}\n              isSelected={selectedNode === architectureData.users}\n            />\n            <AnimatedConnector isActive={isAnimating} />\n\n            {/* Frontend */}\n            <ArchitectureNode\n              node={architectureData.frontend}\n              onSelect={setSelectedNode}\n              isSelected={selectedNode === architectureData.frontend}\n            />\n            <AnimatedConnector isActive={isAnimating} />\n\n            {/* Backend */}\n            <ArchitectureNode\n              node={architectureData.backend}\n              onSelect={setSelectedNode}\n              isSelected={selectedNode === architectureData.backend}\n            />\n            <AnimatedConnector isActive={isAnimating} />\n\n            {/* LangGraph Orchestration */}\n            <ArchitectureNode\n              node={architectureData.orchestration}\n              onSelect={setSelectedNode}\n              isSelected={selectedNode === architectureData.orchestration}\n            />\n            <AnimatedConnector isActive={isAnimating} />\n\n            {/* AI Applications */}\n            <div className=\"bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border-2 border-blue-200\">\n              <h3 className=\"text-xl font-bold text-gray-900 mb-6 text-center\">\n                AI Applications\n              </h3>\n              <div className=\"grid md:grid-cols-3 gap-6\">\n                {architectureData.aiApps.map((app, index) => (\n                  <ArchitectureNode\n                    key={index}\n                    node={app}\n                    onSelect={setSelectedNode}\n                    isSelected={selectedNode === app}\n                  />\n                ))}\n              </div>\n            </div>\n            <AnimatedConnector isActive={isAnimating} />\n\n            {/* Shared AI Services */}\n            <ArchitectureNode\n              node={architectureData.aiServices}\n              onSelect={setSelectedNode}\n              isSelected={selectedNode === architectureData.aiServices}\n            />\n            <AnimatedConnector isActive={isAnimating} />\n\n            {/* LLMs */}\n            <ArchitectureNode\n              node={architectureData.llms}\n              onSelect={setSelectedNode}\n              isSelected={selectedNode === architectureData.llms}\n            />\n            <AnimatedConnector isActive={isAnimating} />\n\n            {/* Data Layer */}\n            <ArchitectureNode\n              node={architectureData.dataLayer}\n              onSelect={setSelectedNode}\n              isSelected={selectedNode === architectureData.dataLayer}\n            />\n            <AnimatedConnector isActive={isAnimating} />\n\n            {/* Monitoring */}\n            <ArchitectureNode\n              node={architectureData.monitoring}\n              onSelect={setSelectedNode}\n              isSelected={selectedNode === architectureData.monitoring}\n            />\n          </motion.div>\n        </div>\n      </section>\n\n      {/* Engineering Principles */}\n      <section className=\"py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-100 to-gray-50\">\n        <div className=\"max-w-7xl mx-auto\">\n          <h2 className=\"text-3xl font-bold text-gray-900 mb-12 text-center\">\n            Engineering Principles\n          </h2>\n          <div className=\"grid md:grid-cols-2 lg:grid-cols-5 gap-6\">\n            {engineeringPrinciples.map((principle, index) => (\n              <motion.div\n                key={index}\n                initial={{ opacity: 0, y: 20 }}\n                whileInView={{ opacity: 1, y: 0 }}\n                transition={{ delay: index * 0.1, duration: 0.6 }}\n                viewport={{ once: true }}\n                className=\"bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow\"\n              >\n                <div className=\"text-4xl mb-4\">{principle.icon}</div>\n                <h3 className=\"text-lg font-bold text-gray-900 mb-2\">\n                  {principle.title}\n                </h3>\n                <p className=\"text-sm text-gray-600 leading-relaxed\">\n                  {principle.description}\n                </p>\n              </motion.div>\n            ))}\n          </div>\n        </div>\n      </section>\n\n      {/* Side Panel */}\n      <SidePanel node={selectedNode} onClose={() => setSelectedNode(null)} />\n    </div>\n  );\n}
