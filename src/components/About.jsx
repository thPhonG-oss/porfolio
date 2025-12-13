const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-700 to-red-500 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left - Image/Visual */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-purple-700 to-red-500 rounded-2xl transform rotate-6"></div>
              <div className="absolute top-0 left-0 w-80 h-80 bg-gray-700 rounded-2xl flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                👨‍💻
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="w-full md:w-1/2 space-y-6 text-gray-300">
            <h3 className="text-3xl font-bold text-white">
              Backend Developer & Problem Solver
            </h3>
            
            <p className="text-lg leading-relaxed">
              Hi! I'm a passionate backend developer with expertise in Java and
              Spring Boot. I enjoy building robust, scalable systems and solving
              complex technical challenges.
            </p>

            <p className="text-lg leading-relaxed">
              With experience in microservices architecture, RESTful APIs, and
              database optimization, I focus on creating efficient solutions that
              deliver real value to users.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="bg-gray-700/50 p-6 rounded-lg border-l-4 border-purple-700 hover:bg-gray-700 transition-colors">
                <h4 className="text-xl font-bold text-white mb-2"></h4>
                <p className="text-gray-400">Experience</p>
              </div>

              <div className="bg-gray-700/50 p-6 rounded-lg border-l-4 border-red-500 hover:bg-gray-700 transition-colors">
                <h4 className="text-xl font-bold text-white mb-2">5+ Projects</h4>
                <p className="text-gray-400">Completed</p>
              </div>

              <div className="bg-gray-700/50 p-6 rounded-lg border-l-4 border-green-500 hover:bg-gray-700 transition-colors">
                <h4 className="text-xl font-bold text-white mb-2">Clean Code</h4>
                <p className="text-gray-400">Best Practices</p>
              </div>

              <div className="bg-gray-700/50 p-6 rounded-lg border-l-4 border-blue-500 hover:bg-gray-700 transition-colors">
                <h4 className="text-xl font-bold text-white mb-2">Team Player</h4>
                <p className="text-gray-400">Collaboration</p>
              </div>
            </div>

            {/* Download CV Button */}
            <div className="pt-6">
              <a
                href="/your-cv.pdf"
                download
                className="inline-block px-8 py-3 bg-gradient-to-r from-purple-700 to-red-500 text-white rounded-lg font-medium hover:scale-105 transition-transform duration-200 shadow-lg"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;