import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-20"
    >
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between w-full">
        {/* Text Content */}
        <div className="flex flex-col justify-center w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Hi, I'm{''}
            <span className="bg-gradient-to-r from-purple-700 to-red-500 bg-clip-text text-transparent">
              Phong
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-medium">
            Backend Developer
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Passionate about building scalable backend systems with Java and
            Spring Boot. I love solving complex problems and creating efficient
            APIs.
          </p>

          {/* Social Links */}
          <div className="flex space-x-6 pt-4">
            <a
              href="https://github.com/thPhonG-oss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
            >
              <FaGithub size={35} />
            </a>
            <a
              href="https://www.linkedin.com/in/phong-nguyenthanh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 hover:scale-110 transition-all duration-200"
            >
              <FaLinkedin size={35} />
            </a>
            <a
              href="mailto: ngthanhphong0817@gmail.com"
              className="text-gray-400 hover:text-red-500 hover:scale-110 transition-all duration-200"
            >
              <FaEnvelope size={35} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex space-x-4 pt-4">
            <button
              onClick={() =>
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-3 bg-gradient-to-r from-purple-700 to-red-500 text-white rounded-lg font-medium hover:scale-105 transition-transform duration-200 shadow-lg"
            >
              View Projects
            </button>
            <button
              onClick={() =>
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-3 border-2 border-purple-700 text-white rounded-lg font-medium hover:bg-purple-700 hover:scale-105 transition-all duration-200"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Image/Avatar */}
        <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0">
          <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-purple-700 to-red-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-6xl md:text-8xl font-bold text-white">
                YN
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;