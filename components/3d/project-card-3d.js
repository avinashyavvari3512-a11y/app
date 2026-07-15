'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function ProjectCard3D({ project, index }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative h-[500px]"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="relative w-full h-full cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
        onClick={() => setIsFlipped(!isFlipped)}
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
            <div className="flex flex-wrap gap-2 mb-4">
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

            {/* Click to flip indicator */}
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-[#4F8CFF] font-semibold">
              <RotateCcw className="w-4 h-4" />
              <span>Click to see details</span>
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
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <h3
                className="text-xl font-bold"
                style={{ color: project.color }}
              >
                {project.title}
              </h3>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <RotateCcw className="w-4 h-4 text-white" />
              </button>
            </div>

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
            <div className="mb-4 flex-1">
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
            <div className="flex gap-3">
              {project.architectureLink ? (
                <>
                  <Button
                    size="sm"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = project.architectureLink;
                    }}
                  >
                    View Architecture
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/20 hover:bg-white/10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-white/20 hover:bg-white/10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-white/20 hover:bg-white/10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
