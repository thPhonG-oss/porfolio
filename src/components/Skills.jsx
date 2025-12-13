import { FaJava, FaDatabase, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiSpring, SiMongodb } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'Java', icon: FaJava, level: 90, color: 'from-orange-500 to-red-500' },
    { name: 'Spring Boot', icon: SiSpring, level: 85, color: 'from-green-500 to-emerald-500' },
    { name: 'MongoDB', icon: SiMongodb, level: 75, color: 'from-green-600 to-teal-600' },
    { name: 'MySQL', icon: FaDatabase, level: 80, color: 'from-blue-500 to-cyan-500' },
    { name: 'Docker', icon: FaDocker, level: 75, color: 'from-blue-600 to-sky-600' },
    { name: 'Git', icon: FaGitAlt, level: 85, color: 'from-orange-600 to-red-600' },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
            My Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 mt-2">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-sky-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-6 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to build modern applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div
                key={idx}
                className="group bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 bg-gradient-to-br ${skill.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="text-3xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {skill.name}
                      </h3>
                      <p className="text-sm text-slate-500">Proficiency</p>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text">
                    {skill.level}%
                  </div>
                </div>

                <div className="relative h-3 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center animate-fade-in-up">
          <div className="inline-block bg-gradient-to-r from-blue-50 to-sky-50 px-8 py-4 rounded-2xl border border-blue-100">
            <p className="text-slate-700 font-medium">
              Always learning and exploring new technologies 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;