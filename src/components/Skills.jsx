import React from "react";
import { FaJava, FaDatabase, FaDocker, FaGitAlt } from "react-icons/fa";
import {
  SiSpring,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiSpringsecurity,
  SiHibernate,
  SiReact,
  SiJavascript,
} from "react-icons/si";

const Skills = ({ isDark }) => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: FaJava },
        { name: "SQL", icon: FaDatabase },
        { name: "NoSQL", icon: FaDatabase },
        { name: "Javascript", icon: SiJavascript },
      ],
    },
    {
      title: "Frameworks",
      skills: [
        { name: "Spring Boot", icon: SiSpring },
        { name: "Spring Security", icon: SiSpringsecurity },
        { name: "JPA/Hibernate", icon: SiHibernate },
        { name: "React.js", icon: SiReact },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: SiMongodb },
        { name: "MySQL", icon: SiMysql },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Redis", icon: SiRedis },
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Docker", icon: FaDocker },
        { name: "Git", icon: FaGitAlt },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`min-h-screen py-24 transition-colors duration-300 ${
        isDark ? "bg-slate-900" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <span
            className={`font-semibold text-xs tracking-widest uppercase ${
              isDark ? "text-blue-400" : "text-blue-600"
            }`}
          >
            My Expertise
          </span>
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 mt-2 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Skills & Technologies
          </h2>
          <div
            className={`w-12 h-px mx-auto ${
              isDark ? "bg-slate-600" : "bg-slate-300"
            }`}
          ></div>
          <p
            className={`mt-6 text-base max-w-2xl mx-auto ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          >
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
              <h3
                className={`text-sm font-semibold tracking-widest uppercase mb-5 ${
                  isDark ? "text-slate-400" : "text-slate-400"
                }`}
              >
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, idx) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={idx}
                      className={`group flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                        isDark
                          ? "bg-slate-800 border-slate-700 hover:border-slate-600"
                          : "bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-white"
                      }`}
                    >
                      <div
                        className={`p-2 rounded-lg ${
                          isDark ? "bg-slate-700" : "bg-white border border-slate-200"
                        }`}
                      >
                        <Icon
                          className={`text-xl ${
                            isDark ? "text-slate-300" : "text-slate-600"
                          }`}
                        />
                      </div>
                      <span
                        className={`text-sm font-medium ${
                          isDark ? "text-slate-200" : "text-slate-700"
                        }`}
                      >
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up">
          <p
            className={`text-sm ${
              isDark ? "text-slate-500" : "text-slate-400"
            }`}
          >
            Always learning and exploring new technologies
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
