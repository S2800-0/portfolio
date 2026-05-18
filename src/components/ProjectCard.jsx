import { motion } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const ProjectCard = ({ project, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="group relative rounded-2xl overflow-hidden bg-secondary cursor-pointer border border-gray-800 hover:border-accent/50 transition-colors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(project)}
    >
      {/* Thumbnail with hover zoom */}
      <div className="relative h-56 overflow-hidden bg-primary">
        <motion.div
          className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-secondary"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <span className="text-6xl">🎯</span>
        </motion.div>
        
        {/* Overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-primary/80 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isHovered ? 1 : 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="flex items-center gap-2 text-white font-medium"
          >
            <Play size={20} />
            <span>Click to Explore</span>
          </motion.div>
        </motion.div>

        {/* Category badge */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent/90 text-white text-xs font-medium">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.shortDesc}
        </p>
        
        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="px-2 py-1 rounded-md bg-primary text-gray-300 text-xs">
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-2 py-1 rounded-md bg-primary text-gray-300 text-xs">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        {/* Action hint */}
        <motion.div 
          className="flex items-center gap-1 text-accent text-sm font-medium"
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <span>View Details</span>
          <ArrowRight size={16} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;