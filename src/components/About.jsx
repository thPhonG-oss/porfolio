const About = ({ isDark }) => {
  const highlights = [
    { icon: '🎓', title: 'Education', value: 'Information System', color: 'blue' },
    { icon: '💻', title: 'Projects', value: '5+ Completed', color: 'sky' },
    { icon: '🚀', title: 'Learning', value: 'Fast & Eager', color: 'indigo' },
    { icon: '🤝', title: 'Team Work', value: 'Collaborative', color: 'cyan' },
  ];

  return (
    <section
      id="about"
      className={`min-h-screen py-24 transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-br from-slate-800 to-slate-900' 
          : 'bg-gradient-to-br from-slate-50 to-blue-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className={`font-semibold text-sm tracking-wider uppercase ${
            isDark ? 'text-blue-400' : 'text-blue-600'
          }`}>
            Get To Know More
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 mt-2 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-sky-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center animate-scale-in">
            <div className="relative">
              <div className={`absolute inset-0 rounded-3xl transform rotate-6 ${
                isDark 
                  ? 'bg-gradient-to-br from-slate-700 to-slate-800' 
                  : 'bg-gradient-to-br from-blue-100 to-sky-100'
              }`}></div>
              <div className={`relative p-8 rounded-3xl shadow-xl border ${
                isDark 
                  ? 'bg-slate-800 border-slate-700' 
                  : 'bg-white border-slate-100'
              }`}>
                <div className="text-9xl text-center">👨‍💻</div>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <h3 className={`text-3xl md:text-4xl font-bold ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Backend Development
              <span className="text-blue-500"> Intern</span>
            </h3>
            
            <p className={`text-lg leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Hi! I'm a information system student passionate about backend development 
              with Java and Spring Boot. I'm actively seeking an internship opportunity 
              to apply my knowledge and grow as a developer.
            </p>

            <p className={`text-lg leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Through personal projects, I've gained hands-on experience with 
              microservices architecture, RESTful APIs, and database design. 
              I'm eager to learn from experienced professionals and contribute 
              to real-world projects.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border group ${
                    isDark 
                      ? 'bg-slate-800/80 border-slate-700 hover:bg-slate-800' 
                      : 'bg-white border-slate-100'
                  }`}
                >
                  <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className={`text-sm font-medium mb-1 ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {item.title}
                  </h4>
                  <p className={`font-bold ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-6 flex flex-wrap gap-4">
              <a
               href="/CV_NguyenThanhPhong_WebAppDev_Intern.pdf"
               download="CV_NguyenThanhPhong_WebAppDev_Intern.pdf"
               className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-xl font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span>Download CV</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </a>
              
              <button
                onClick={() =>
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
                }
                className={`inline-flex items-center px-8 py-4 rounded-xl font-medium border-2 transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? 'border-blue-500 text-blue-400 hover:bg-blue-500/10'
                    : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}
              >
                <span>Contact Me</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;