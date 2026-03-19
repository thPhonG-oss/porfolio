import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = ({ isDark }) => {
  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center pt-20 transition-colors duration-300 ${
        isDark ? "bg-slate-900" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between w-full gap-16">
        {/* Left — intro text */}
        <div className="flex flex-col justify-center w-full md:w-1/2 space-y-6 animate-slide-in-left">
          <div className="inline-block">
            <span
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border ${
                isDark
                  ? "bg-slate-800 text-blue-400 border-slate-700"
                  : "bg-slate-50 text-blue-600 border-slate-200"
              }`}
            >
              Available for internship
            </span>
          </div>

          <h1
            className={`text-5xl md:text-7xl font-bold leading-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Hi, I'm{" "}
            <span className="text-blue-600">
              Phong
            </span>
          </h1>

          <p
            className={`text-xl md:text-2xl font-medium ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Backend Developer
          </p>

          <p
            className={`text-base leading-relaxed max-w-md ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Passionate about building scalable backend systems with Java and
            Spring Boot. I love solving complex problems and creating efficient
            APIs.
          </p>

          {/* Social links */}
          <div className="flex space-x-3 pt-2">
            <a
              href="https://github.com/thPhonG-oss"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 flex items-center justify-center rounded-lg border transition-all duration-200 hover:scale-105 ${
                isDark
                  ? "border-slate-700 text-slate-400 hover:border-blue-500 hover:text-blue-400"
                  : "border-slate-200 text-slate-500 hover:border-blue-500 hover:text-blue-600"
              }`}
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/phong-nguyenthanh"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 flex items-center justify-center rounded-lg border transition-all duration-200 hover:scale-105 ${
                isDark
                  ? "border-slate-700 text-slate-400 hover:border-blue-500 hover:text-blue-400"
                  : "border-slate-200 text-slate-500 hover:border-blue-500 hover:text-blue-600"
              }`}
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="mailto:ngthanhphong0817@gmail.com"
              className={`w-10 h-10 flex items-center justify-center rounded-lg border transition-all duration-200 hover:scale-105 ${
                isDark
                  ? "border-slate-700 text-slate-400 hover:border-blue-500 hover:text-blue-400"
                  : "border-slate-200 text-slate-500 hover:border-blue-500 hover:text-blue-600"
              }`}
            >
              <FaEnvelope size={18} />
            </a>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              View Projects
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className={`px-6 py-3 rounded-lg text-sm font-medium border transition-colors duration-200 ${
                isDark
                  ? "border-slate-700 text-slate-300 hover:border-slate-500"
                  : "border-slate-200 text-slate-600 hover:border-slate-400"
              }`}
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Right — minimal code card */}
        <div className="w-full md:w-1/2 flex justify-center animate-slide-in-right">
          <div
            className={`w-full max-w-sm rounded-2xl border overflow-hidden shadow-sm ${
              isDark
                ? "bg-slate-800 border-slate-700"
                : "bg-slate-50 border-slate-200"
            }`}
          >
            {/* Window chrome */}
            <div
              className={`flex items-center gap-1.5 px-4 py-3 border-b ${
                isDark ? "border-slate-700 bg-slate-900" : "border-slate-200 bg-white"
              }`}
            >
              <span className="w-3 h-3 rounded-full bg-slate-300"></span>
              <span className="w-3 h-3 rounded-full bg-slate-300"></span>
              <span className="w-3 h-3 rounded-full bg-slate-300"></span>
              <span
                className={`ml-3 text-xs font-mono ${
                  isDark ? "text-slate-500" : "text-slate-400"
                }`}
              >
                about.json
              </span>
            </div>

            {/* Content */}
            <div className="p-6 font-mono text-sm space-y-3">
              <div className={`${isDark ? "text-slate-400" : "text-slate-500"}`}>{`{`}</div>

              <div className="pl-4 space-y-2">
                <p>
                  <span className={`${isDark ? "text-blue-400" : "text-blue-600"}`}>&quot;name&quot;</span>
                  <span className={`${isDark ? "text-slate-400" : "text-slate-500"}`}>: </span>
                  <span className={`${isDark ? "text-slate-200" : "text-slate-800"}`}>&quot;Phong Nguyen Thanh&quot;</span>
                  <span className={`${isDark ? "text-slate-400" : "text-slate-500"}`}>,</span>
                </p>
                <p>
                  <span className={`${isDark ? "text-blue-400" : "text-blue-600"}`}>&quot;role&quot;</span>
                  <span className={`${isDark ? "text-slate-400" : "text-slate-500"}`}>: </span>
                  <span className={`${isDark ? "text-slate-200" : "text-slate-800"}`}>&quot;Backend Developer&quot;</span>
                  <span className={`${isDark ? "text-slate-400" : "text-slate-500"}`}>,</span>
                </p>
                <p>
                  <span className={`${isDark ? "text-blue-400" : "text-blue-600"}`}>&quot;stack&quot;</span>
                  <span className={`${isDark ? "text-slate-400" : "text-slate-500"}`}>: </span>
                  <span className={`${isDark ? "text-slate-200" : "text-slate-800"}`}>[&quot;Java&quot;, &quot;Spring Boot&quot;]</span>
                  <span className={`${isDark ? "text-slate-400" : "text-slate-500"}`}>,</span>
                </p>
                <p>
                  <span className={`${isDark ? "text-blue-400" : "text-blue-600"}`}>&quot;status&quot;</span>
                  <span className={`${isDark ? "text-slate-400" : "text-slate-500"}`}>: </span>
                  <span className="text-green-500">&quot;open to intern&quot;</span>
                  <span className={`${isDark ? "text-slate-400" : "text-slate-500"}`}>,</span>
                </p>
                <p>
                  <span className={`${isDark ? "text-blue-400" : "text-blue-600"}`}>&quot;location&quot;</span>
                  <span className={`${isDark ? "text-slate-400" : "text-slate-500"}`}>: </span>
                  <span className={`${isDark ? "text-slate-200" : "text-slate-800"}`}>&quot;Ho Chi Minh City&quot;</span>
                </p>
              </div>

              <div className={`${isDark ? "text-slate-400" : "text-slate-500"}`}>{`}`}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
