import { FaGithub, FaLinkedin, FaRegNewspaper } from "react-icons/fa";

const Footer = ({ isDark }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`py-14 border-t transition-colors duration-300 ${
        isDark
          ? "bg-slate-950 border-slate-800"
          : "bg-slate-50 border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3
              className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}
            >
              Phong Nguyen Thanh
            </h3>
            <p
              className={`mt-3 max-w-xl ${isDark ? "text-slate-300" : "text-slate-600"}`}
            >
              Backend Developer focused on Java and Spring Boot. I am currently
              building this portfolio and preparing a knowledge blog to share
              practical backend lessons and project write-ups.
            </p>
          </div>

          <div className="md:justify-self-end">
            <h4
              className={`text-sm font-semibold uppercase tracking-wider ${isDark ? "text-slate-400" : "text-slate-500"}`}
            >
              Coming next
            </h4>
            <div
              className={`mt-3 p-4 rounded-xl border ${
                isDark
                  ? "bg-slate-900 border-slate-700 text-slate-200"
                  : "bg-white border-slate-200 text-slate-700"
              }`}
            >
              <div className="flex items-start gap-3">
                <FaRegNewspaper className="mt-1" />
                <p>
                  Knowledge blog section with notes on system design, Spring
                  Boot, and deployment experiences.
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-5">
              <a
                href="https://github.com/thPhonG-oss"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-11 h-11 rounded-lg flex items-center justify-center transition-colors ${
                  isDark
                    ? "bg-slate-800 text-slate-200 hover:bg-slate-700"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                }`}
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/phong-nguyenthanh"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-11 h-11 rounded-lg flex items-center justify-center transition-colors ${
                  isDark
                    ? "bg-slate-800 text-slate-200 hover:bg-slate-700"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                }`}
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div
          className={`mt-10 pt-6 border-t text-sm ${isDark ? "border-slate-800 text-slate-400" : "border-slate-200 text-slate-500"}`}
        >
          {/* <p>
            © {currentYear} Phong Nguyen Thanh. Built with React and Tailwind
            CSS.
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
