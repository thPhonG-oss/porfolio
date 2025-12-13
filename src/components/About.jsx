const About = () => {
  const highlights = [
    { icon: '💼', value: 'Fresher', label: 'Experience', color: 'blue' },
    { icon: '🚀', value: '5+ Projects', label: 'Completed', color: 'sky' },
    { icon: '✨', value: 'Clean Code', label: 'Best Practices', color: 'indigo' },
    { icon: '🤝', value: 'Team Player', label: 'Collaboration', color: 'cyan' },
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-24 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
            Get To Know More
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 mt-2">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-sky-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-sky-100 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                <div className="text-9xl text-center">👨‍💻</div>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
              Backend Developer
              <span className="text-blue-600"> & Problem Solver</span>
            </h3>
            
            <p className="text-slate-600 text-lg leading-relaxed">
              Hi! I'm a passionate backend developer with expertise in Java and
              Spring Boot. I enjoy building robust, scalable systems and solving
              complex technical challenges.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed">
              With experience in microservices architecture, RESTful APIs, and
              database optimization, I focus on creating efficient solutions that
              deliver real value to users.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 group"
                >
                  <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">
                    {item.value}
                  </h4>
                  <p className="text-slate-500 text-sm">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <a
                href="/CV_NguyenThanhPhong_WebAppDev_Intern.pdf"
                download
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-xl font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span>Download CV</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;