import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

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
      gradient: 'from-red-500 to-pink-500',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Ho Chi Minh City, Vietnam',
      link: null,
      gradient: 'from-blue-500 to-cyan-500',
    }
  ];

  const socials = [
    { icon: FaGithub, link: 'https://github.com/thPhonG-oss', label: 'GitHub', color: 'hover:bg-slate-700' },
    { icon: FaLinkedin, link: 'https://linkedin.com/in/phong-nguyenthanh', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: FaInstagram, link: 'https://www.instagram.com/p_eazyyy/', label: 'Instagram', color: 'hover:bg-pink-600' },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 mt-2">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-sky-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-6 text-lg max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly chat
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-slide-in-left">
            <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-8 rounded-3xl border border-blue-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Let's talk about everything! 💬
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Don't hesitate to contact me if you have any questions or just
                want to say hello. I'm always open to discussing new projects,
                creative ideas, or opportunities.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 group"
                  >
                    <div className={`p-4 bg-gradient-to-br ${info.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="text-2xl text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">{info.title}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-slate-900 font-medium hover:text-blue-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-900 font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              {/* <p className="text-sm text-slate-500 font-medium mb-4">Follow Me</p> */}
              <div className="flex space-x-4">
                {socials.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 hover:text-white ${social.color} transition-all duration-300 hover:scale-110 shadow-md`}
                      title={social.label}
                    >
                      <Icon size={22} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-3xl shadow-xl border border-slate-100">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-700 mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-700 mb-2 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-700 mb-2 font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-4 bg-white border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-xl font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Send Message 🚀
                </button>

                {status && (
                  <div className={`text-center p-4 rounded-xl ${
                    status.includes('success') 
                      ? 'bg-green-50 text-green-600 border border-green-200' 
                      : 'bg-red-50 text-red-600 border border-red-200'
                  }`}>
                    {status}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-20 pt-10 border-t border-slate-200">
          <p className="text-slate-500">
            © 2025 Phong Nguyen Thanh. Built with using React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;