import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/startogen_logo.png"; // horizontal transparent logo

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full bg-[#FFF4EF]/90 backdrop-blur-md shadow-sm z-50 transition-all py-1">
      <div className="flex items-center justify-between px-6">

        {/* Logo Left Aligned */}
        <Link to="/" className="flex items-center">
          <img
            src={Logo}
            alt="Startogen Logo"
            style={{ height: "50px" }}   // Fixed logo height
            className="w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700 text-[15px] ml-auto">
          <Link className="hover:text-[#FF7F50] transition" to="/">
            Home
          </Link>
          <Link className="hover:text-[#FF7F50] transition" to="/tools">
            Tools
          </Link>
          <Link className="hover:text-[#FF7F50] transition" to="/about">
            About
          </Link>
          <Link
            to="/contact"
            className="bg-[#FF7F50] hover:bg-[#ff6a36] transition text-white px-4 py-1.5 rounded-md"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800 text-3xl" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-4">
          <ul className="flex flex-col gap-3 font-medium text-gray-700">
            <Link onClick={() => setOpen(false)} to="/">Home</Link>
            <Link onClick={() => setOpen(false)} to="/tools">Tools</Link>
            <Link onClick={() => setOpen(false)} to="/about">About</Link>
            <Link
              onClick={() => setOpen(false)}
              to="/contact"
              className="bg-[#FF7F50] hover:bg-[#ff6a36] transition text-white text-center px-4 py-2 rounded-md"
            >
              Contact
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}
