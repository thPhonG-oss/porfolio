import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields");
      setTimeout(() => setStatus(""), 3000);
      return;
    }

    console.log("Form submitted:", formData);
    setStatus("Message sent successfully! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus(""), 5000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "ngthanhphong0817@gmail.com",
      link: "mailto:ngthanhphong0817@gmail.com",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Ho Chi Minh City, Vietnam",
      link: null,
    },
  ];

  return (
    <section
      id="contact"
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
            Get In Touch
          </span>
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 mt-2 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Let's Work Together
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
            Feel free to reach out for collaborations or just a friendly chat
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — info */}
          <div className="space-y-6 animate-slide-in-left">
            <div
              className={`p-7 rounded-2xl border ${
                isDark
                  ? "bg-slate-800 border-slate-700"
                  : "bg-slate-50 border-slate-200"
              }`}
            >
              <h3
                className={`text-xl font-bold mb-3 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Let's talk
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  isDark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                Don't hesitate to contact me if you have any questions or just
                want to say hello. I'm always open to discussing new projects,
                creative ideas, or opportunities.
              </p>
            </div>

            <div className="space-y-3">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-4 p-5 rounded-xl border transition-colors duration-200 ${
                      isDark
                        ? "bg-slate-800 border-slate-700 hover:border-slate-600"
                        : "bg-slate-50 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                        isDark
                          ? "bg-slate-700 text-slate-300"
                          : "bg-white border border-slate-200 text-slate-500"
                      }`}
                    >
                      <Icon size={16} />
                    </div>
                    <div>
                      <p
                        className={`text-xs font-medium mb-0.5 ${
                          isDark ? "text-slate-500" : "text-slate-400"
                        }`}
                      >
                        {info.title}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className={`text-sm font-medium transition-colors ${
                            isDark
                              ? "text-slate-200 hover:text-blue-400"
                              : "text-slate-800 hover:text-blue-600"
                          }`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p
                          className={`text-sm font-medium ${
                            isDark ? "text-slate-200" : "text-slate-800"
                          }`}
                        >
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — form */}
          <div className="animate-slide-in-right">
            <div
              className={`p-8 rounded-2xl border ${
                isDark
                  ? "bg-slate-800 border-slate-700"
                  : "bg-slate-50 border-slate-200"
              }`}
            >
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className={`block mb-1.5 text-sm font-medium ${
                      isDark ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      isDark
                        ? "bg-slate-900 border-slate-600 text-white placeholder-slate-500"
                        : "bg-white border-slate-200 text-slate-900 placeholder-slate-400"
                    }`}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block mb-1.5 text-sm font-medium ${
                      isDark ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      isDark
                        ? "bg-slate-900 border-slate-600 text-white placeholder-slate-500"
                        : "bg-white border-slate-200 text-slate-900 placeholder-slate-400"
                    }`}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block mb-1.5 text-sm font-medium ${
                      isDark ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 py-3 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none ${
                      isDark
                        ? "bg-slate-900 border-slate-600 text-white placeholder-slate-500"
                        : "bg-white border-slate-200 text-slate-900 placeholder-slate-400"
                    }`}
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  Send Message
                </button>

                {status && (
                  <div
                    className={`text-center p-3 rounded-lg text-sm ${
                      status.includes("success")
                        ? isDark
                          ? "bg-slate-700 text-green-400"
                          : "bg-green-50 text-green-700 border border-green-200"
                        : isDark
                        ? "bg-slate-700 text-red-400"
                        : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                  >
                    {status}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
