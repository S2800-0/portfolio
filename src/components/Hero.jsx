import { motion } from 'motion/react';
import { GithubIcon, LinkedinIcon, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary" />
      
      {/* Floating elements */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-medium tracking-wide uppercase text-sm">
            Computer Science & AI Student
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6"
        >
          Shahesta Salama
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto mb-8"
        >
          Full-Stack Developer & Data Science Enthusiast. 
          Building intelligent systems and scalable web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-4 mb-12"
        >
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary text-white hover:bg-accent transition-colors">
            <GithubIcon size={20} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary text-white hover:bg-accent transition-colors">
            <LinkedinIcon size={20} />
          </a>
          <a href="mailto:shahesta@email.com" className="p-3 rounded-full bg-secondary text-white hover:bg-accent transition-colors">
            <Mail size={20} />
          </a>
        </motion.div>

        <motion.a
          href="#projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="inline-flex flex-col items-center text-gray-400 hover:text-white transition-colors"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;