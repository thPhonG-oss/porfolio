import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
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
          ? 'bg-white/95 backdrop-blur-md shadow-md' 
          : 'bg-white'
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-full">
        <div className="animate-fade-in-down">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
            Phong Nguyen Thanh
          </h1>
        </div>

        <ul className="hidden md:flex space-x-8 animate-fade-in-down">
          {links.map(({ id, link, label }) => (
            <li
              key={id}
              className="cursor-pointer text-slate-600 hover:text-blue-600 font-medium transition-all duration-200 relative group"
              onClick={() => scrollToSection(link)}
            >
              {label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-sky-500 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer md:hidden z-10 text-slate-700 hover:text-blue-600 transition-colors"
        >
          {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>

        {nav && (
          <div className="fixed inset-0 bg-white md:hidden">
            <ul className="flex flex-col justify-center items-center h-full space-y-8">
              {links.map(({ id, link, label }) => (
                <li
                  key={id}
                  className="cursor-pointer text-3xl text-slate-700 hover:text-blue-600 transition-colors font-medium animate-fade-in-up"
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