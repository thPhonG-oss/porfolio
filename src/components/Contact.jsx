import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields');
      setTimeout(() => setStatus(''), 3000);
      return;
    }

    console.log('Form submitted:', formData);
    
    setStatus('Message sent successfully! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 5000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'ngthanhphong0817@gmail.com',
      link: 'mailto:ngthanhphong0817@gmail.com',
      color: 'text-red-500',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Ho Chi Minh City, Vietnam',
      link: null,
      color: 'text-blue-500',
    }
  ];

  return (
    <section
      id="contact"
      className="min-h-screen py-20 bg-gradient-to-b from-gray-800 to-gray-900"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-700 to-red-500 mx-auto"></div>
          <p className="text-gray-400 mt-6 text-lg">
            Feel free to reach out for collaborations or just a friendly chat
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Let's talk about everything!
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Don't hesitate to contact me if you have any questions or just
                want to say hello. I'm always open to discussing new projects,
                creative ideas, or opportunities.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-purple-700 transition-all"
                  >
                    <Icon className={`text-3xl ${info.color}`} />
                    <div>
                      <p className="text-gray-500 text-sm">{info.title}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white hover:text-purple-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex space-x-6 pt-6">
              <a
                href="https://github.com/thPhonG-oss"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-700 transition-all"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/phong-nguyenthanh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/p_eazyyy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-700 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-700 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2 font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-700 transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full px-8 py-3 bg-gradient-to-r from-purple-700 to-red-500 text-white rounded-lg font-medium hover:scale-105 transition-transform duration-200 shadow-lg"
              >
                Send Message
              </button>

              {status && (
                <p className={`text-center ${status.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
                  {status}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-20 pt-10 border-t border-gray-700">
        <p className="text-gray-400">
          © 2025 Phong Nguyen Thanh. Built with React & Tailwind CSS
        </p>
      </div>
    </section>
  );
};

export default Contact;