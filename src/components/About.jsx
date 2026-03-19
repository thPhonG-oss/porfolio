const About = ({ isDark }) => {
  const highlights = [
    { title: "Education", value: "Information System" },
    { title: "Learning", value: "Fast & Eager" },
    { title: "Team Work", value: "Collaborative" },
  ];

  const stats = [
    { label: "Focus", value: "Backend" },
    { label: "Language", value: "Java" },
    { label: "Framework", value: "Spring Boot" },
    { label: "Seeking", value: "Internship" },
  ];

  return (
    <section
      id="about"
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
            Get To Know More
          </span>
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 mt-2 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            About Me
          </h2>
          <div
            className={`w-12 h-px mx-auto ${
              isDark ? "bg-slate-600" : "bg-slate-300"
            }`}
          ></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — profile stats card */}
          <div className="flex justify-center animate-scale-in">
            <div
              className={`w-full max-w-xs rounded-2xl border p-8 space-y-5 ${
                isDark
                  ? "bg-slate-900 border-slate-700"
                  : "bg-white border-slate-200"
              }`}
            >
              <div className="space-y-1">
                <p
                  className={`text-xs font-semibold tracking-widest uppercase ${
                    isDark ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  Profile
                </p>
                <h3
                  className={`text-xl font-bold ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  Phong Nguyen Thanh
                </h3>
              </div>

              <div
                className={`w-full h-px ${
                  isDark ? "bg-slate-700" : "bg-slate-100"
                }`}
              ></div>

              <div className="space-y-4">
                {stats.map((s, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span
                      className={`text-sm ${
                        isDark ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      {s.label}
                    </span>
                    <span
                      className={`text-sm font-semibold ${
                        isDark ? "text-slate-200" : "text-slate-800"
                      }`}
                    >
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className={`w-full h-px ${
                  isDark ? "bg-slate-700" : "bg-slate-100"
                }`}
              ></div>

              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  isDark
                    ? "bg-slate-700 text-blue-400"
                    : "bg-blue-50 text-blue-600"
                }`}
              >
                Open to internship
              </span>
            </div>
          </div>

          {/* Right — bio text */}
          <div className="space-y-6 animate-slide-in-right">
            <h3
              className={`text-3xl md:text-4xl font-bold ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Backend Development{" "}
              <span className="text-blue-600">Intern</span>
            </h3>

            <p
              className={`text-base leading-relaxed ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Hi! I'm an information system student passionate about backend
              development with Java and Spring Boot. I'm actively seeking an
              internship opportunity to apply my knowledge and grow as a
              developer.
            </p>

            <p
              className={`text-base leading-relaxed ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Through personal projects, I've gained hands-on experience with
              microservices architecture, RESTful APIs, and database design. I'm
              eager to learn from experienced professionals and contribute to
              real-world projects.
            </p>

            {/* Highlight cards */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border text-center hover:-translate-y-1 transition-transform duration-200 ${
                    isDark
                      ? "bg-slate-800 border-slate-700"
                      : "bg-white border-slate-200"
                  }`}
                >
                  <p
                    className={`text-xs font-medium mb-1 ${
                      isDark ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    {item.title}
                  </p>
                  <p
                    className={`text-sm font-bold ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href="/CV_NguyenThanhPhong_WebAppDev_Intern.pdf"
                download="CV_NguyenThanhPhong_WebAppDev_Intern.pdf"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                <span>Download CV</span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                  />
                </svg>
              </a>

              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className={`inline-flex items-center px-6 py-3 rounded-lg text-sm font-medium border transition-colors duration-200 ${
                  isDark
                    ? "border-slate-700 text-slate-300 hover:border-slate-500"
                    : "border-slate-200 text-slate-600 hover:border-slate-400"
                }`}
              >
                <span>Contact Me</span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
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
