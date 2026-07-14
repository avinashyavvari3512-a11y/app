'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function ProjectCard3D({ project, index }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative h-[500px] cursor-pointer"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
      >
        {/* Front of card */}
        <div
          className="absolute inset-0 glass-card rounded-2xl overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            borderColor: `${project.color}40`,
          }}
        >
          {/* Project Image */}
          <div className="relative h-48 overflow-hidden bg-black/50">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover opacity-70"
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
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 rounded text-xs font-medium bg-white/5 border border-white/10 text-white"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-1 rounded text-xs font-medium text-muted-foreground">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>

            <div className="mt-4 text-xs text-center text-muted-foreground">
              Hover to see details →
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute inset-0 glass-card rounded-2xl overflow-hidden p-6"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            borderColor: `${project.color}40`,
          }}
        >
          <h3
            className="text-xl font-bold mb-4"
            style={{ color: project.color }}
          >
            {project.title}
          </h3>

          {/* Full Technologies List */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 rounded text-xs font-medium"
                  style={{
                    background: `${project.color}20`,
                    border: `1px solid ${project.color}40`,
                    color: project.color,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-white mb-2">Impact:</h4>
            <div className="space-y-2">
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
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
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
    </motion.div>
  );
}
