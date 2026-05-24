import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, FolderOpen, Folder } from 'lucide-react';
import ProjectCard from './ProjectCard';

const FolderSection = ({ category, projects, onSelectProject }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Folder colors by category
  const folderColors = {
    'DEPI Data Science Internship': {
      bg: 'bg-blue-500/20',
      border: 'border-blue-500/40',
      text: 'text-blue-400',
      hover: 'hover:border-blue-400',
      peek: 'from-blue-600 to-indigo-600'
    },
    'Full-Stack Software Development Internship': {
      bg: 'bg-emerald-500/20',
      border: 'border-emerald-500/40',
      text: 'text-emerald-400',
      hover: 'hover:border-emerald-400',
      peek: 'from-emerald-500 to-teal-600'
    },
    'NTI Huawei Egyptian Academy Track (Artificial Intelligence)': {
  bg: 'bg-amber-500/20',
  border: 'border-amber-500/40',
  text: 'text-amber-400',
  hover: 'hover:border-amber-400',
  peek: 'from-amber-500 to-orange-600'
},
    'Technical Projects': {
      bg: 'bg-orange-500/20',
      border: 'border-orange-500/40',
      text: 'text-orange-400',
      hover: 'hover:border-orange-400',
      peek: 'from-orange-500 to-red-600'
    }
    
  };

  const colors = folderColors[category] || folderColors['Technical Projects'];

  // Count completed vs in-progress
  const completed = projects.filter(p => p.status === 'completed').length;
  const inProgress = projects.filter(p => p.status === 'in-progress').length;

  return (
    <div className="mb-12">
      {/* Folder Tab / Header */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-6 rounded-xl ${colors.bg} border ${colors.border} ${colors.hover} transition-all duration-300 backdrop-blur-sm`}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-lg ${colors.bg}`}>
            {isOpen ? (
              <FolderOpen size={28} className={colors.text} />
            ) : (
              <Folder size={28} className={colors.text} />
            )}
          </div>
          <div className="text-left">
            <h3 className={`text-xl font-bold ${colors.text}`}>{category}</h3>
            <p className="text-gray-400 text-sm mt-1">
              {projects.length} projects · {completed} completed · {inProgress} in progress
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Peek preview - show first 3 project initials when closed */}
          {!isOpen && (
            <div className="hidden md:flex items-center -space-x-2 mr-4">
              {projects.slice(0, 3).map((project, i) => (
                <div
                  key={project.id}
                  className={`w-8 h-8 rounded-full bg-gradient-to-br ${colors.peek} flex items-center justify-center text-white text-xs font-bold border-2 border-secondary`}
                  style={{ zIndex: 3 - i }}
                >
                  {project.title.charAt(0)}
                </div>
              ))}
              {projects.length > 3 && (
                <div className={`w-8 h-8 rounded-full ${colors.bg} flex items-center justify-center text-xs font-medium border-2 border-secondary`}>
                  +{projects.length - 3}
                </div>
              )}
            </div>
          )}
          
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={24} className="text-gray-400" />
          </motion.div>
        </div>
      </motion.button>

      {/* Folder Content - Projects Grid */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-6 px-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onSelect={onSelectProject}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FolderSection;