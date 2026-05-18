import { motion, AnimatePresence } from 'motion/react';
import { X, Github, ExternalLink, Calendar, Tag } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-secondary border border-gray-800"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <X size={20} />
          </button>

          {/* Video Section */}
          <div className="relative aspect-video bg-primary flex items-center justify-center">
            <video
              src={project.videoUrl}
              controls
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
              controlsList="nodownload"
              disablePictureInPicture
            />
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {project.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag size={14} />
                    {project.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Full Description */}
            <p className="text-gray-300 leading-relaxed mb-6">
              {project.fullDesc}
            </p>

            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span 
                    key={t} 
                    className="px-3 py-1.5 rounded-lg bg-accent/20 text-accent text-sm font-medium border border-accent/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary font-medium hover:bg-gray-200 transition-colors"
              >
                <Github size={18} />
                View Code
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-600 text-white font-medium hover:border-accent hover:text-accent transition-colors"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;