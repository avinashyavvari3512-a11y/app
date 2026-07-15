'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export function ArchitectureNode({ node, onSelect, isSelected }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(node)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div
        className={`bg-white rounded-xl shadow-lg border-2 p-6 transition-all duration-300 ${
          isSelected ? 'border-blue-500 shadow-2xl' : 'border-gray-200 hover:border-blue-300'
        }`}
      >
        <div className="flex items-center gap-3 mb-2">
          {node.icon && (
            <div className="text-2xl">{node.icon}</div>
          )}
          <h3 className="text-lg font-bold text-gray-900">{node.title}</h3>
        </div>
        
        {node.subtitle && (
          <p className="text-sm text-gray-600 mb-3">{node.subtitle}</p>
        )}
        
        {node.technologies && (
          <div className="flex flex-wrap gap-2">
            {node.technologies.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full"
              >
                {tech}
              </span>
            ))}
            {node.technologies.length > 3 && (
              <span className="px-2 py-1 text-xs font-medium text-gray-500">
                +{node.technologies.length - 3}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Hover tooltip */}
      {isHovered && node.purpose && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute z-50 mt-2 p-4 bg-gray-900 text-white rounded-lg shadow-xl max-w-xs"
        >
          <p className="text-sm font-semibold mb-1">Purpose</p>
          <p className="text-xs text-gray-300">{node.purpose}</p>
        </motion.div>
      )}
    </motion.div>
  );
}