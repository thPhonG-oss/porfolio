import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

const Navbar = ({ isDark, toggleTheme }) => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 1, link: 'home', label: 'Home' },
    { id: 2, link: 'about', label: 'About' },
    { id: 3, link: 'skills', label: 'Skills' },
    { id: 4, link: 'projects', label: 'Projects' },
    { id: 5, link: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (link) => {
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setNav(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full h-20 z-50 transition-all duration-300 ${
        scrolled 
          ? isDark 
            ? 'bg-slate-900/95 backdrop-blur-md shadow-xl shadow-slate-950/20' 
            : 'bg-white/95 backdrop-blur-md shadow-md'
          : isDark 
            ? 'bg-slate-900' 
            : 'bg-white'
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-full">
        <div className="animate-fade-in-down">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
            Phong Nguyen Thanh
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <ul className="hidden md:flex space-x-8 animate-fade-in-down">
            {links.map(({ id, link, label }) => (
              <li
                key={id}
                className={`cursor-pointer font-medium transition-all duration-200 relative group ${
                  isDark 
                    ? 'text-slate-300 hover:text-blue-400' 
                    : 'text-slate-600 hover:text-blue-600'
                }`}
                onClick={() => scrollToSection(link)}
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-sky-500 group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
              isDark 
                ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' 
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>

          <div
            onClick={() => setNav(!nav)}
            className={`cursor-pointer md:hidden z-10 transition-colors ${
              isDark 
                ? 'text-slate-300 hover:text-blue-400' 
                : 'text-slate-700 hover:text-blue-600'
            }`}
          >
            {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
          </div>
        </div>

        {nav && (
          <div className={`fixed inset-0 md:hidden ${
            isDark ? 'bg-slate-900' : 'bg-white'
          }`}>
            <ul className="flex flex-col justify-center items-center h-full space-y-8">
              {links.map(({ id, link, label }) => (
                <li
                  key={id}
                  className={`cursor-pointer text-3xl font-medium transition-colors animate-fade-in-up ${
                    isDark 
                      ? 'text-slate-200 hover:text-blue-400' 
                      : 'text-slate-700 hover:text-blue-600'
                  }`}
                  style={{ animationDelay: `${id * 0.1}s` }}
                  onClick={() => scrollToSection(link)}
                >
                  {label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;