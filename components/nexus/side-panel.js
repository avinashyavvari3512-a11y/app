'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export function SidePanel({ node, onClose }) {
  return (
    <AnimatePresence>
      {node && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full md:w-1/2 lg:w-1/3 bg-white shadow-2xl z-50 overflow-y-auto"
          >
            <div className="p-8">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>

              {/* Icon */}
              {node.icon && (
                <div className="text-6xl mb-6">{node.icon}</div>
              )}

              {/* Title */}
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {node.title}
              </h2>

              {/* Subtitle */}
              {node.subtitle && (
                <p className="text-lg text-gray-600 mb-6">{node.subtitle}</p>
              )}

              {/* Description */}
              {node.description && (
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2">
                    Description
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{node.description}</p>
                </div>
              )}

              {/* Purpose */}
              {node.purpose && (
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2">
                    Purpose
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{node.purpose}</p>
                </div>
              )}

              {/* Technologies */}
              {node.technologies && (
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {node.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-2 text-sm font-medium bg-blue-50 text-blue-700 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Responsibilities */}
              {node.responsibilities && (
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
                    Key Responsibilities
                  </h3>
                  <ul className="space-y-2">
                    {node.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Business Value */}
              {node.businessValue && (
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2">
                    Business Value
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{node.businessValue}</p>
                </div>
              )}

              {/* Future Improvements */}
              {node.futureImprovements && (
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
                    Future Enhancements
                  </h3>
                  <ul className="space-y-2">
                    {node.futureImprovements.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <span className="text-green-500 mr-2">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}