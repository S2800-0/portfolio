import { useState } from 'react';
import { motion } from 'motion/react';
import FolderSection from './FolderSection';
import ProjectModal from './ProjectModal';
import { projects } from '../data/projects';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Group projects by category
  const categories = [
    'DEPI Data Science Internship',
    'Full-Stack Software Development Internship', 
    'Technical Projects'
  ];

  const groupedProjects = categories.map(cat => ({
    category: cat,
    items: projects.filter(p => p.category === cat)
  }));

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Organized by experience. Click a folder to explore.
          </p>
        </motion.div>

        {/* Folder Sections */}
        <div className="space-y-6">
          {groupedProjects.map(({ category, items }) => (
            <FolderSection
              key={category}
              category={category}
              projects={items}
              onSelectProject={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default ProjectsSection;