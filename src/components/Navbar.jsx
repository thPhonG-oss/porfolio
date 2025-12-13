import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);

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
    <nav className="fixed top-0 left-0 w-full h-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white z-50 shadow-lg">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4 h-full">
        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-700 to-red-500 bg-clip-text text-transparent">
            Phong Nguyen Thanh
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {links.map(({ id, link, label }) => (
            <li
              key={id}
              className="cursor-pointer text-gray-300 hover:text-white hover:scale-105 transition-all duration-200 capitalize font-medium"
              onClick={() => scrollToSection(link)}
            >
              {label}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer md:hidden z-10 text-gray-300"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Mobile Menu */}
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-900 to-gray-800">
            {links.map(({ id, link, label }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-3xl text-gray-300 hover:text-white transition-colors"
                onClick={() => scrollToSection(link)}
              >
                {label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;