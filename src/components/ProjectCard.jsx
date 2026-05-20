import { motion } from 'motion/react';
import { ArrowRight, FileCode, GitBranch, Clock, CheckCircle, Play } from 'lucide-react';
import { useState } from 'react';

const ProjectCard = ({ project, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [gifLoaded, setGifLoaded] = useState(false);

  const statusConfig = {
    'completed': { icon: CheckCircle, color: 'text-emerald-400', bg: 'bg-emerald-500/10', label: 'Completed' },
    'in-progress': { icon: Clock, color: 'text-amber-400', bg: 'bg-amber-500/10', label: 'In Progress' }
  };

  const status = statusConfig[project.status] || statusConfig['completed'];
  const StatusIcon = status.icon;

  // Check what's available
  const hasGif = !!project.gifUrl;
  const hasVideo = !!project.videoUrl;
  const hasCode = project.codeFiles && project.codeFiles.length > 0;
  const hasGithub = !!project.githubUrl;

  // Folder colors by category
  const categoryColors = {
    'DEPI Data Science Internship': 'from-blue-600 to-indigo-600',
    'Full-Stack Software Development Internship': 'from-emerald-500 to-teal-600',
    'Technical Projects': 'from-orange-500 to-red-600',
  };
  const gradient = categoryColors[project.category] || 'from-gray-600 to-gray-700';

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
      {/* Media Section - GIF or Gradient Fallback */}
      <div className="relative h-48 overflow-hidden bg-primary">
        {hasGif ? (
          <>
            {/* GIF Image */}
            <motion.img
              src={project.gifUrl}
              alt={project.title}
              className={`w-full h-full object-cover transition-opacity duration-300 ${gifLoaded ? 'opacity-100' : 'opacity-0'}`}
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.4 }}
              onLoad={() => setGifLoaded(true)}
            />
            
            {/* Loading placeholder while GIF loads */}
            {!gifLoaded && (
              <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${gradient}`}>
                <span className="text-4xl font-bold text-white/90">{project.title.charAt(0)}</span>
              </div>
            )}

            {/* Play button overlay (only if video also available) */}
            {hasVideo && isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-black/50 flex items-center justify-center"
              >
                <div className="flex items-center gap-2 text-white font-medium">
                  <Play size={20} fill="white" />
                  <span>Watch Demo</span>
                </div>
              </motion.div>
            )}
          </>
        ) : (
          /* Gradient fallback when no GIF */
          <motion.div
            className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${gradient}`}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-5xl font-bold text-white/90 mb-2">
              {project.title.charAt(0)}
            </span>
            <span className="text-xs text-white/60 font-medium uppercase tracking-wider">
              {project.category}
            </span>
          </motion.div>
        )}

        {/* Category badge */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium">
          {project.category}
        </div>

        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${status.bg} backdrop-blur-sm`}>
            <StatusIcon size={10} className={status.color} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors leading-tight">
          {project.title}
        </h3>

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
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">{project.date}</span>
            {hasCode && <FileCode size={12} className="text-gray-600" />}
            {hasGithub && <GitBranch size={12} className="text-gray-600" />}
          </div>
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
    </motion.div>
  );
};

export default ProjectCard;