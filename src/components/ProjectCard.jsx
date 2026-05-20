import { motion } from 'motion/react';
import { ArrowRight, FileCode, GitBranch, Clock, CheckCircle, Play, Image } from 'lucide-react';
import { useState } from 'react';

const ProjectCard = ({ project, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  const statusConfig = {
    'completed': { icon: CheckCircle, color: 'text-emerald-400', bg: 'bg-emerald-500/10', label: 'Completed' },
    'in-progress': { icon: Clock, color: 'text-amber-400', bg: 'bg-amber-500/10', label: 'In Progress' }
  };

  const status = statusConfig[project.status] || statusConfig['completed'];
  const StatusIcon = status.icon;

  // Check what content is available
  const hasMedia = project.videoUrl || project.thumbnail;
  const hasCode = project.codeFiles && project.codeFiles.length > 0;
  const hasResources = project.resources && project.resources.length > 0;
  const hasGithub = !!project.githubUrl;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="group relative rounded-xl overflow-hidden bg-[#1a1a2e] cursor-pointer border border-gray-800 hover:border-gray-600 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(project)}
    >
      {/* Top bar with status and available content indicators */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800/50">
        <div className={`flex items-center gap-2 px-2.5 py-1 rounded-full ${status.bg}`}>
          <StatusIcon size={12} className={status.color} />
          <span className={`text-xs font-medium ${status.color}`}>{status.label}</span>
        </div>
        
        {/* Content availability indicators */}
        <div className="flex items-center gap-2">
          {hasMedia && <Play size={12} className="text-gray-500" />}
          {hasCode && <FileCode size={12} className="text-gray-500" />}
          {hasGithub && <GitBranch size={12} className="text-gray-500" />}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors leading-tight">
          {project.title}
        </h3>

        {/* Short description */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
          {project.shortDesc}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-md bg-gray-800 text-gray-300 text-xs font-medium">
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-0.5 rounded-md bg-gray-800 text-gray-500 text-xs">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">{project.date}</span>
          <motion.div 
            className="flex items-center gap-1 text-accent text-sm font-medium"
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-xs">View</span>
            <ArrowRight size={14} />
          </motion.div>
        </div>
      </div>

      {/* Hover gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default ProjectCard;