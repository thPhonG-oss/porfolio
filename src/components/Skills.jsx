import {
  FaJava,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaAws,
} from 'react-icons/fa';
import {
  SiSpring,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiKubernetes,
  SiJenkins,
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend',
      skills: [
        { name: 'Java', icon: FaJava, color: 'text-orange-600', level: 90 },
        { name: 'Spring Boot', icon: SiSpring, color: 'text-green-600', level: 85 },
      ],
    },
    {
      title: 'Databases',
      skills: [
        // { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-600', level: 80 },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', level: 75 },
        // { name: 'Redis', icon: SiRedis, color: 'text-red-600', level: 70 },
        { name: 'MySQL', icon: FaDatabase, color: 'text-blue-500', level: 80 },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Docker', icon: FaDocker, color: 'text-blue-500', level: 75 },
        // { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-600', level: 65 },
        // { name: 'Jenkins', icon: SiJenkins, color: 'text-red-600', level: 70 },
        { name: 'Git', icon: FaGitAlt, color: 'text-orange-600', level: 85 },
        // { name: 'AWS', icon: FaAws, color: 'text-orange-500', level: 70 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen py-20 bg-gradient-to-b from-gray-800 to-gray-900"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-700 to-red-500 mx-auto"></div>
          <p className="text-gray-400 mt-6 text-lg">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-bold text-white mb-6 text-center md:text-left">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIdx) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skillIdx}
                      className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-purple-700 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-700/30 group"
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <Icon className={`text-5xl ${skill.color} group-hover:scale-110 transition-transform`} />
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-white">
                            {skill.name}
                          </h4>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-700 to-red-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <div className="text-right mt-2">
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;