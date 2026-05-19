import { useState } from 'react';
import { motion } from 'motion/react';
import ProjectCard from './ProjectCard';
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
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hover over a project to preview, click to explore the full details and watch the demo.
          </p>
        </motion.div>

        {/* Render each category section */}
        {groupedProjects.map(({ category, items }) => (
          <div key={category} className="mb-20">
            {/* Category Header */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-accent mb-2">{category}</h3>
              <div className="h-1 w-24 bg-accent rounded-full"></div>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {items.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={setSelectedProject}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default ProjectsSection;