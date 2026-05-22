import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Calendar, Tag, FileCode, Play } from 'lucide-react';
import { useState } from 'react';
import NotebookViewer from './NotebookViewer';

// Extract YouTube video ID from various URL formats
const getYouTubeID = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

// Inline GitHub icon
const GithubIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const ProjectModal = ({ project, onClose }) => {
  const [selectedNotebook, setSelectedNotebook] = useState(null);

  if (!project) return null;

  // Check what's available
  const hasVideo = !!project.videoUrl;
  const hasGif = !!project.gifUrl;
  const hasCode = project.codeFiles && project.codeFiles.length > 0;
  const hasResources = project.resources && project.resources.length > 0;
  const hasGithub = !!project.githubUrl;
  const hasLive = !!project.liveUrl;

  // Check if it's a YouTube URL
  const isYouTube = hasVideo && (
    project.videoUrl.includes('youtube.com') || 
    project.videoUrl.includes('youtu.be')
  );

  return (
    <>
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

            {/* Video Section - YouTube or Local */}
            {hasVideo && (
              <div className="relative aspect-video bg-primary">
                {isYouTube ? (
                  /* YouTube Embed */
                  <iframe
                    src={`https://www.youtube.com/embed/${getYouTubeID(project.videoUrl)}?autoplay=0&rel=0`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={project.title}
                  />
                ) : (
                  /* Local Video */
                  <video
                    src={project.videoUrl}
                    controls
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                    controlsList="nodownload"
                  />
                )}
              </div>
            )}

            {/* GIF Banner - only if no video but has GIF */}
            {!hasVideo && hasGif && (
              <div className="relative h-64 bg-primary overflow-hidden">
                <img 
                  src={project.gifUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent" />
              </div>
            )}

            {/* Content */}
            <div className="p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                  <div className="flex items-center gap-4 text-gray-400 text-sm flex-wrap">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {project.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag size={14} />
                      {project.category}
                    </span>
                    {project.status === 'in-progress' && (
                      <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-medium">
                        In Progress
                      </span>
                    )}
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

              {/* Notebook Files - only if available */}
              {hasCode && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-3">Notebook Files</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.codeFiles.map((file) => (
                      <button
                        key={file.name}
                        onClick={() => setSelectedNotebook({
                          ...file,
                          resources: project.resources
                        })}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1e1e1e] border border-gray-700 text-gray-300 hover:border-yellow-500 hover:text-yellow-400 transition-colors"
                      >
                        <FileCode size={16} />
                        <span className="font-mono text-sm">{file.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Resources - only if available */}
              {hasResources && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-3">Resources</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.resources.map((resource, i) => (
                      <a
                        key={i}
                        href={resource.url}
                        download
                        className="flex items-center gap-3 p-3 rounded-lg bg-[#1e1e1e] border border-gray-700 hover:border-accent/50 transition-colors group"
                      >
                        <Download size={16} className="text-gray-500 group-hover:text-accent" />
                        <div>
                          <p className="text-sm text-white">{resource.name}</p>
                          <p className="text-xs text-gray-500 capitalize">{resource.type}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Links - only if available */}
              <div className="flex gap-4 flex-wrap">
                {hasGithub && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary font-medium hover:bg-gray-200 transition-colors"
                  >
                    <GithubIcon size={18} />
                    View on GitHub
                  </a>
                )}
                {hasLive && (
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

      {/* Notebook Viewer */}
      <NotebookViewer
        fileUrl={selectedNotebook?.url}
        fileName={selectedNotebook?.name}
        resources={selectedNotebook?.resources}
        onClose={() => setSelectedNotebook(null)}
      />
    </>
  );
};

export default ProjectModal;