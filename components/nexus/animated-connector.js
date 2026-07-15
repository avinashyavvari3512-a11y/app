'use client';

import { motion } from 'framer-motion';

export function AnimatedConnector({ isActive = false }) {
  return (
    <div className="flex items-center justify-center py-4">
      <div className="relative">
        <svg width="2" height="60" className="overflow-visible">
          {/* Base line */}
          <line
            x1="1"
            y1="0"
            x2="1"
            y2="60"
            stroke="#E5E7EB"
            strokeWidth="2"
          />
          
          {/* Animated glow line */}
          <motion.line
            x1="1"
            y1="0"
            x2="1"
            y2="60"
            stroke="url(#gradient)"
            strokeWidth="3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: isActive ? 1 : 0,
              opacity: isActive ? 1 : 0,
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="1" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Arrow */}
        <motion.div
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
          animate={{
            y: isActive ? [0, 5, 0] : 0,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-2 h-2 bg-blue-500 rounded-full" />
        </motion.div>
      </div>
    </div>
  );
}