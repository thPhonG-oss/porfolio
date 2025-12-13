import { FaJava, FaDatabase, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiSpring, SiMongodb, SiPostgresql, SiMysql, SiRedis } from 'react-icons/si';

const Skills = ({ isDark }) => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Java', icon: FaJava, color: 'from-orange-500 to-red-500' },
        { name: 'SQL', icon: FaDatabase, color: 'from-blue-500 to-cyan-500' },
      ]
    },
    {
      title: 'Frameworks',
      skills: [
        { name: 'Spring Boot', icon: SiSpring, color: 'from-green-500 to-emerald-500' },
        { name: 'Spring Security', icon: SiSpring, color: 'from-green-600 to-teal-600' },
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: 'from-green-600 to-teal-600' },
        { name: 'MySQL', icon: SiMysql, color: 'from-blue-600 to-cyan-600' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'from-blue-700 to-indigo-600' },
        { name: 'Redis', icon: SiRedis, color: 'from-red-500 to-orange-500' },
      ]
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Docker', icon: FaDocker, color: 'from-blue-600 to-sky-600' },
        { name: 'Git', icon: FaGitAlt, color: 'from-orange-600 to-red-600' },
      ]
    }
  ];

  return (
    <section
      id="skills"
      className={`min-h-screen py-24 transition-colors duration-300 ${
        isDark ? 'bg-slate-900' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className={`font-semibold text-sm tracking-wider uppercase ${
            isDark ? 'text-blue-400' : 'text-blue-600'
          }`}>
            My Expertise
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 mt-2 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-sky-500 mx-auto rounded-full"></div>
          <p className={`mt-6 text-lg max-w-2xl mx-auto ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Technologies and tools I work with to build modern applications
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              className="animate-slide-in-left"
              style={{ animationDelay: `${catIdx * 0.1}s` }}
            >
              <h3 className={`text-2xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, idx) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={idx}
                      className={`group p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border ${
                        isDark 
                          ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-800' 
                          : 'bg-gradient-to-br from-slate-50 to-blue-50 border-slate-100 hover:shadow-xl'
                      }`}
                    >
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div className={`p-4 bg-gradient-to-br ${skill.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="text-3xl text-white" />
                        </div>
                        <h4 className={`font-semibold ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}>
                          {skill.name}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up">
          <div className={`inline-block px-8 py-4 rounded-2xl border ${
            isDark 
              ? 'bg-slate-800/50 border-slate-700' 
              : 'bg-gradient-to-r from-blue-50 to-sky-50 border-blue-100'
          }`}>
            <p className={`font-medium ${
              isDark ? 'text-slate-200' : 'text-slate-700'
            }`}>
              Always learning and exploring new technologies 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;