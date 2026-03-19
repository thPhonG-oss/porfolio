import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = ({ isDark }) => {
  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center pt-20 transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          : "bg-gradient-to-br from-white via-slate-50 to-blue-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between w-full gap-12">
        <div className="flex flex-col justify-center w-full md:w-1/2 space-y-6 animate-slide-in-left">
          <div className="inline-block">
            <span
              className={`px-4 py-2 rounded-full text-sm font-medium border ${
                isDark
                  ? "bg-blue-500/10 text-blue-400 border-blue-500/30"
                  : "bg-blue-50 text-blue-600 border-blue-100"
              }`}
            >
              👋 Welcome to my portfolio
            </span>
          </div>

          <h1
            className={`text-5xl md:text-7xl font-bold ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Phong
            </span>
          </h1>

          <p
            className={`text-2xl md:text-3xl font-semibold ${
              isDark ? "text-slate-200" : "text-slate-700"
            }`}
          >
            Backend Developer
          </p>

          <p
            className={`text-lg leading-relaxed max-w-xl ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Passionate about building scalable backend systems with Java and
            Spring Boot. I love solving complex problems and creating efficient
            APIs.
          </p>

          <div className="flex space-x-4 pt-4">
            <a
              href="https://github.com/thPhonG-oss"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 ${
                isDark
                  ? "bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white"
              }`}
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/phong-nguyenthanh"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 ${
                isDark
                  ? "bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white"
              }`}
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="mailto:ngthanhphong0817@gmail.com"
              className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 ${
                isDark
                  ? "bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white"
              }`}
            >
              <FaEnvelope size={22} />
            </a>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-xl font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              View Projects
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className={`px-8 py-4 rounded-xl font-medium border-2 transition-all duration-300 hover:scale-105 ${
                isDark
                  ? "border-blue-500 text-blue-400 hover:bg-blue-500/10"
                  : "bg-white border-blue-600 text-blue-600 hover:bg-blue-50"
              }`}
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center animate-slide-in-right">
          <div className="relative">
            <div
              className={`absolute inset-0 rounded-full blur-3xl opacity-20 animate-float ${
                isDark
                  ? "bg-gradient-to-r from-blue-500 to-sky-500"
                  : "bg-gradient-to-r from-blue-600 to-sky-500"
              }`}
            ></div>
            <div className="relative w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-blue-600 to-sky-500 rounded-full flex items-center justify-center shadow-2xl">
              <div
                className={`w-72 h-72 md:w-[22rem] md:h-[22rem] rounded-full flex items-center justify-center ${
                  isDark ? "bg-slate-800" : "bg-white"
                }`}
              >
                <span className="text-8xl md:text-9xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
