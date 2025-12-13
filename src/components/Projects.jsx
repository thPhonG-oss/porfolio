import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      emoji: '🛒',
      title: 'E-Commerce API',
      description: 'RESTful API for e-commerce platform with microservices architecture, payment integration, and real-time inventory management.',
      tech: ['Spring Boot', 'PostgreSQL', 'Redis', 'Docker'],
      github: 'https://github.com/yourusername/project1',
      demo: 'https://demo.example.com',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      emoji: '📋',
      title: 'Task Management',
      description: 'Collaborative task management API with real-time notifications, user authentication, and role-based access control.',
      tech: ['Java', 'Spring Security', 'MongoDB', 'WebSocket'],
      github: 'https://github.com/yourusername/project2',
      demo: 'https://demo.example.com',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      id: 3,
      emoji: '🏦',
      title: 'Banking Application',
      description: 'Secure banking system with transaction processing, fraud detection, and comprehensive audit logging.',
      tech: ['Spring Boot', 'MySQL', 'Kafka', 'AWS'],
      github: 'https://github.com/yourusername/project3',
      demo: null,
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      id: 4,
      emoji: '💬',
      title: 'Social Media API',
      description: 'Backend API for social media platform with posts, comments, likes, and real-time messaging features.',
      tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis'],
      github: 'https://github.com/yourusername/project4',
      demo: 'https://demo.example.com',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      id: 5,
      emoji: '📦',
      title: 'Inventory Management',
      description: 'Inventory tracking system with barcode scanning, stock alerts, and comprehensive reporting features.',
      tech: ['Spring Boot', 'MongoDB', 'RabbitMQ', 'Docker'],
      github: 'https://github.com/yourusername/project5',
      demo: null,
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      id: 6,
      emoji: '📝',
      title: 'Blog Platform API',
      description: 'Blogging platform with CRUD operations, markdown support, image upload, and SEO optimization.',
      tech: ['Java', 'Spring Boot', 'PostgreSQL', 'S3'],
      github: 'https://github.com/yourusername/project6',
      demo: 'https://demo.example.com',
      gradient: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-24 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          {/* <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
            Portfolio
          </span> */}
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 mt-2">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-sky-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-6 text-lg max-w-2xl mx-auto">
            Some of my recent work and personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                <span className="text-7xl z-10 group-hover:scale-110 transition-transform">
                  {project.emoji}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 pt-4 border-t border-slate-100">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors group/link"
                  >
                    <FaGithub size={18} className="group-hover/link:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors group/link"
                    >
                      <FaExternalLinkAlt size={16} className="group-hover/link:scale-110 transition-transform" />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;