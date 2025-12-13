import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce API',
      description:
        'RESTful API for e-commerce platform with microservices architecture, payment integration, and real-time inventory management.',
      tech: ['Spring Boot', 'PostgreSQL', 'Redis', 'Docker'],
      github: 'https://github.com/yourusername/project1',
      demo: 'https://demo.example.com',
      color: 'from-blue-600 to-purple-600',
    },
    {
      id: 2,
      title: 'Task Management System',
      description:
        'Collaborative task management API with real-time notifications, user authentication, and role-based access control.',
      tech: ['Java', 'Spring Security', 'MongoDB', 'WebSocket'],
      github: 'https://github.com/yourusername/project2',
      demo: 'https://demo.example.com',
      color: 'from-green-600 to-teal-600',
    },
    {
      id: 3,
      title: 'Banking Application',
      description:
        'Secure banking system with transaction processing, fraud detection, and comprehensive audit logging.',
      tech: ['Spring Boot', 'MySQL', 'Kafka', 'AWS'],
      github: 'https://github.com/yourusername/project3',
      demo: null,
      color: 'from-orange-600 to-red-600',
    },
    {
      id: 4,
      title: 'Social Media API',
      description:
        'Backend API for social media platform with posts, comments, likes, and real-time messaging features.',
      tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis'],
      github: 'https://github.com/yourusername/project4',
      demo: 'https://demo.example.com',
      color: 'from-pink-600 to-purple-600',
    },
    {
      id: 5,
      title: 'Inventory Management',
      description:
        'Inventory tracking system with barcode scanning, stock alerts, and comprehensive reporting features.',
      tech: ['Spring Boot', 'MongoDB', 'RabbitMQ', 'Docker'],
      github: 'https://github.com/yourusername/project5',
      demo: null,
      color: 'from-indigo-600 to-blue-600',
    },
    {
      id: 6,
      title: 'Blog Platform API',
      description:
        'Blogging platform with CRUD operations, markdown support, image upload, and SEO optimization.',
      tech: ['Java', 'Spring Boot', 'PostgreSQL', 'S3'],
      github: 'https://github.com/yourusername/project6',
      demo: 'https://demo.example.com',
      color: 'from-yellow-600 to-orange-600',
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-700 to-red-500 mx-auto"></div>
          <p className="text-gray-400 mt-6 text-lg">
            Some of my recent work and personal projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-purple-700 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-700/20 hover:-translate-y-2 group"
            >
              {/* Project Header */}
              <div
                className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}
              >
                <span className="text-7xl group-hover:scale-110 transition-transform">
                  💻
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <FaGithub size={20} />
                    <span>Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <FaExternalLinkAlt size={18} />
                      <span>Demo</span>
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