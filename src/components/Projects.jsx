import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = ({ isDark }) => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce API",
      description:
        "RESTful API for e-commerce platform with microservices architecture, payment integration, and real-time inventory management.",
      tech: ["Spring Boot", "PostgreSQL", "Redis", "Docker"],
      github: "https://github.com/thPhonG-oss",
      demo: null,
      label: "Backend · Microservices",
    },
    {
      id: 2,
      title: "Task Management",
      description:
        "Collaborative task management API with real-time notifications, user authentication, and role-based access control.",
      tech: ["Java", "Spring Security", "MongoDB", "WebSocket"],
      github: "https://github.com/thPhonG-oss",
      demo: null,
      label: "Backend · Real-time",
    },
  ];

  return (
    <section
      id="projects"
      className={`min-h-screen py-24 transition-colors duration-300 ${
        isDark ? "bg-slate-800" : "bg-slate-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <span
            className={`font-semibold text-xs tracking-widest uppercase ${
              isDark ? "text-blue-400" : "text-blue-600"
            }`}
          >
            My Work
          </span>
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 mt-2 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Featured Projects
          </h2>
          <div
            className={`w-12 h-px mx-auto ${
              isDark ? "bg-slate-600" : "bg-slate-300"
            }`}
          ></div>
          <p
            className={`mt-6 text-base max-w-2xl mx-auto ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Some of my recent work and personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`group rounded-2xl overflow-hidden border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg animate-scale-in ${
                isDark
                  ? "bg-slate-900 border-slate-700 hover:border-slate-600"
                  : "bg-white border-slate-200 hover:border-slate-300"
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Card header — plain monochrome */}
              <div
                className={`h-40 flex flex-col items-start justify-end p-5 border-b ${
                  isDark
                    ? "bg-slate-800 border-slate-700"
                    : "bg-slate-100 border-slate-200"
                }`}
              >
                <span
                  className={`text-xs font-medium mb-2 px-2 py-0.5 rounded-full border ${
                    isDark
                      ? "border-slate-600 text-slate-400"
                      : "border-slate-300 text-slate-500"
                  }`}
                >
                  {project.label}
                </span>
                <h3
                  className={`text-xl font-bold ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  {project.title}
                </h3>
              </div>

              {/* Card body */}
              <div className="p-5">
                <p
                  className={`mb-4 text-sm leading-relaxed ${
                    isDark ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-2.5 py-0.5 text-xs rounded-full font-medium ${
                        isDark
                          ? "bg-slate-800 text-slate-300 border border-slate-700"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className={`flex items-center gap-4 pt-4 border-t ${
                    isDark ? "border-slate-800" : "border-slate-100"
                  }`}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 text-sm transition-colors ${
                      isDark
                        ? "text-slate-400 hover:text-blue-400"
                        : "text-slate-500 hover:text-blue-600"
                    }`}
                  >
                    <FaGithub size={15} />
                    <span>Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1.5 text-sm transition-colors ${
                        isDark
                          ? "text-slate-400 hover:text-blue-400"
                          : "text-slate-500 hover:text-blue-600"
                      }`}
                    >
                      <FaExternalLinkAlt size={13} />
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
