'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Mail } from 'lucide-react';
import dynamic from 'next/dynamic';

const NeuralNetwork3D = dynamic(() => import('@/components/3d/neural-network-3d').then(mod => mod.NeuralNetwork3D), { ssr: false });

const roles = [
  'Data Engineering',
  'Artificial Intelligence',
  'Cloud Platforms',
  'Healthcare Analytics',
  'Machine Learning',
  'Generative AI',
];

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden neural-bg">
      {/* 3D Neural Network Background */}
      <NeuralNetwork3D />

      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4F8CFF] rounded-full filter blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00D4FF] rounded-full filter blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#7C5CFC] rounded-full filter blur-[120px] animate-pulse delay-2000" />
      </div>

      {/* Neural Network Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 gap-4 h-full p-8">
          {[...Array(144)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-white/30 rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0.1, 0.3, 0.1], scale: [0.8, 1.2, 0.8] }}
              transition={{
                duration: 3,
                delay: i * 0.01,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            Hi, I'm
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="gradient-text">Avinash Yavvari</span>
          </h1>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Senior Data Engineer
          </h2>

          <p className="text-xl md:text-2xl text-[#00D4FF] mb-8 font-semibold">
            Building Intelligent Data Platforms for AI
          </p>

          {/* Animated Role Typing */}
          <div className="h-16 mb-8 flex items-center justify-center">
            <motion.p
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground font-mono"
            >
              <span className="text-[#4F8CFF]">$</span> focus --on{' '}
              <span className="gradient-text font-bold">{roles[currentRole]}</span>
            </motion.p>
          </div>

          <p className="max-w-4xl mx-auto text-base md:text-lg text-muted-foreground mb-12 leading-relaxed">
            I build enterprise-scale cloud data platforms, AI-ready architectures, 
            healthcare analytics solutions, and intelligent systems that transform 
            complex data into measurable business value.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-[#4F8CFF] hover:bg-[#00D4FF] text-white px-8 py-6 text-lg rounded-full transition-all duration-300 glow-effect group"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-[#00D4FF] text-[#00D4FF] hover:bg-[#00D4FF] hover:text-black px-8 py-6 text-lg rounded-full transition-all duration-300"
              onClick={() => {
                const resumeUrl = process.env.NEXT_PUBLIC_RESUME_URL;
                if (resumeUrl) window.open(resumeUrl, '_blank');
              }}
            >
              <Download className="mr-2" />
              Download Resume
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-[#7C5CFC] text-[#7C5CFC] hover:bg-[#7C5CFC] hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2" />
              Let's Connect
            </Button>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-16"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto flex items-start justify-center p-2">
              <motion.div
                className="w-1.5 h-1.5 bg-white rounded-full"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
