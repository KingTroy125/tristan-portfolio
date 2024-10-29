import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const projects = [
  {
    title: 'ChertNodes',
    description: 'Minecraft servers hosting',
    longDescription: 'ChertNodes is a powerful Minecraft server hosting platform. It provides an intuitive interface for users to easily deploy and manage their Minecraft servers with advanced features like automatic backups, mod support, and performance optimization.',
    tech: ['HTML', 'SCSS', 'Python', 'Flask'],
    live: '#',
    github: 'https://github.com/yourusername/chertnodes',
    image: '/placeholder.svg?height=200&width=300'
  },
  {
    title: 'ProtectX',
    description: 'Discord anti-crash bot',
    longDescription: 'ProtectX is a sophisticated Discord bot designed to prevent server crashes and maintain stability. It uses advanced algorithms to detect and mitigate potential threats, ensuring a smooth experience for server members.',
    tech: ['React', 'Express', 'Discord.js', 'Node.js'],
    live: '#',
    github: 'https://github.com/yourusername/protectx',
    image: '/placeholder.svg?height=200&width=300'
  },
  {
    title: 'Kahoot Answers Viewer',
    description: 'Get answers to your kahoot quiz',
    longDescription: 'This tool allows users to view answers for Kahoot quizzes in real-time. It is designed for educational purposes and can be used by teachers to prepare for quizzes or by students for self-study and revision.',
    tech: ['CSS', 'Express', 'Node.js'],
    live: '#',
    github: 'https://github.com/yourusername/kahoot-answers',
    image: '/placeholder.svg?height=200&width=300'
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio website',
    longDescription: 'This is the website you\'re currently viewing! It\'s built with React and Next.js, featuring smooth animations and a responsive design. It showcases my projects, skills, and provides information about me.',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    live: '#',
    github: 'https://github.com/yourusername/portfolio',
    image: '/placeholder.svg?height=200&width=300'
  },
  {
    title: 'Weather App',
    description: 'Real-time weather information',
    longDescription: 'A sleek and user-friendly weather application that provides real-time weather information for any location. It features a clean UI, 5-day forecast, and detailed weather data including temperature, humidity, wind speed, and more.',
    tech: ['React', 'OpenWeatherMap API', 'CSS Modules'],
    live: '#',
    github: 'https://github.com/yourusername/weather-app',
    image: '/placeholder.svg?height=200&width=300'
  },
  {
    title: 'Task Manager',
    description: 'Organize your tasks efficiently',
    longDescription: 'A comprehensive task management application that helps users organize their daily tasks, set priorities, and track progress. It includes features like task categories, due dates, reminders, and productivity analytics.',
    tech: ['Vue.js', 'Vuex', 'Firebase', 'Element UI'],
    live: '#',
    github: 'https://github.com/yourusername/task-manager',
    image: '/placeholder.svg?height=200&width=300'
  }
];

export default function Projects() {
  return (
    <section className="mb-20">
      <motion.h3
        className="text-2xl font-bold mb-6 text-purple-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        #projects
      </motion.h3>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </motion.div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.03 }}
    >
      <motion.div
        className="relative overflow-hidden"
        animate={{ height: isHovered ? '12rem' : '10rem' }}
        transition={{ duration: 0.3 }}
      >
        <motion.img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h4 
            className="text-white text-xl font-bold text-center"
            initial={{ y: 20 }}
            animate={{ y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h4>
        </motion.div>
      </motion.div>
      <div className="p-4">
        <motion.p 
          className="text-gray-300 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {project.description}
        </motion.p>
        <motion.div 
          className="flex flex-wrap gap-2 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {project.tech.map((tech) => (
            <motion.span 
              key={tech} 
              className="bg-purple-600 text-white text-xs px-2 py-1 rounded"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
        <div className="flex justify-between items-center">
          <motion.div 
            className="space-x-2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors inline-block"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink size={20} />
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors inline-block"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} />
            </motion.a>
          </motion.div>
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-purple-400 hover:text-purple-300 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </motion.button>
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              <p className="text-gray-300">{project.longDescription}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
