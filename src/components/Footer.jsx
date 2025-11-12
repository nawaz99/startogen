import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#FFECE5] to-[#FFD6C9] text-gray-800 pt-20 border-t border-[#FFD2C1]">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* Logo + Description */}
        <div>
          <h2 className="text-3xl font-semibold text-[#FF7F50]">Startogen</h2>
          <p className="mt-4 text-sm text-gray-700 leading-relaxed">
            One platform. Multiple AI tools. Experience the future of productivity and automation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-[#FF7F50]">Home</Link></li>
            <li><Link to="/tools" className="hover:text-[#FF7F50]">AI Tools</Link></li>
            <li><Link to="/about" className="hover:text-[#FF7F50]">About</Link></li>
          </ul>
        </div>

        {/* AI Products */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tools</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-[#FF7F50] cursor-pointer"><a href="https://www.resumeanalyzer.startogen.com" target="_blank">Resume Analyzer</a></li>
            <li className="hover:text-[#FF7F50] cursor-pointer"><a href="#" >Document AI</a></li>
            <li className="hover:text-[#FF7F50] cursor-pointer"><a href="#" >Business AI</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h3>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61583442815972"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF7F50] transition"
            >
              <FaFacebook size={22} />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF7F50] transition"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF7F50] transition"
            >
              <FaTwitter size={22} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom line */}
      <div className="text-center py-6 text-gray-600 text-sm mt-16 border-t border-[#FFC9B3]">
        © {new Date().getFullYear()} <span className="font-semibold text-[#FF7F50]">Startogen</span>. All rights reserved.
      </div>

    </footer>
  );
}
