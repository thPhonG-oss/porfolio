import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = ({ isDark }) => {
  const projects = [
    {
      id: 1,
      image: '/project1.jpg', // Thay bằng đường dẫn hình ảnh thực tế của bạn
      title: 'E-Commerce API',
      description: 'RESTful API for e-commerce platform with microservices architecture, payment integration, and real-time inventory management.',
      tech: ['Spring Boot', 'PostgreSQL', 'Redis', 'Docker'],
      github: 'https://github.com/yourusername/project1',
      demo: 'https://demo.example.com',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      image: '/project2.jpg', // Thay bằng đường dẫn hình ảnh thực tế
      title: 'Task Management',
      description: 'Collaborative task management API with real-time notifications, user authentication, and role-based access control.',
      tech: ['Java', 'Spring Security', 'MongoDB', 'WebSocket'],
      github: 'https://github.com/yourusername/project2',
      demo: 'https://demo.example.com',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      id: 3,
      image: '/project3.jpg', // Thay bằng đường dẫn hình ảnh thực tế
      title: 'Banking Application',
      description: 'Secure banking system with transaction processing, fraud detection, and comprehensive audit logging.',
      tech: ['Spring Boot', 'MySQL', 'Kafka', 'AWS'],
      github: 'https://github.com/yourusername/project3',
      demo: null,
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      id: 4,
      image: '/project4.jpg', // Thay bằng đường dẫn hình ảnh thực tế
      title: 'Social Media API',
      description: 'Backend API for social media platform with posts, comments, likes, and real-time messaging features.',
      tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis'],
      github: 'https://github.com/yourusername/project4',
      demo: 'https://demo.example.com',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      id: 5,
      image: '/project5.jpg', // Thay bằng đường dẫn hình ảnh thực tế
      title: 'Inventory Management',
      description: 'Inventory tracking system with barcode scanning, stock alerts, and comprehensive reporting features.',
      tech: ['Spring Boot', 'MongoDB', 'RabbitMQ', 'Docker'],
      github: 'https://github.com/yourusername/project5',
      demo: null,
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      id: 6,
      image: '/project6.jpg', // Thay bằng đường dẫn hình ảnh thực tế
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
      className={`min-h-screen py-24 transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-br from-slate-800 to-slate-900' 
          : 'bg-gradient-to-br from-slate-50 to-blue-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 mt-2 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-sky-500 mx-auto rounded-full"></div>
          <p className={`mt-6 text-lg max-w-2xl mx-auto ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Some of my recent work and personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`group rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border animate-scale-in ${
                isDark 
                  ? 'bg-slate-800/80 border-slate-700' 
                  : 'bg-white border-slate-100'
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback nếu không có hình ảnh
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-gradient-to-br ${project.gradient}">
                        <span class="text-6xl">🚀</span>
                      </div>
                    `;
                  }}
                />
              </div>

              <div className="p-6">
                <h3 className={`text-2xl font-bold mb-3 transition-colors ${
                  isDark 
                    ? 'text-white group-hover:text-blue-400' 
                    : 'text-slate-900 group-hover:text-blue-600'
                }`}>
                  {project.title}
                </h3>
                <p className={`mb-4 leading-relaxed text-sm ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 text-xs rounded-full font-medium ${
                        isDark 
                          ? 'bg-slate-700 text-slate-300' 
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={`flex space-x-4 pt-4 border-t ${
                  isDark ? 'border-slate-700' : 'border-slate-100'
                }`}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 transition-colors group/link ${
                      isDark 
                        ? 'text-slate-400 hover:text-blue-400' 
                        : 'text-slate-600 hover:text-blue-600'
                    }`}
                  >
                    <FaGithub size={18} className="group-hover/link:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 transition-colors group/link ${
                        isDark 
                          ? 'text-slate-400 hover:text-blue-400' 
                          : 'text-slate-600 hover:text-blue-600'
                      }`}
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