import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // modern icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="mt-5 sticky top-0 z-50 py-0.5">

      <div className=" bg-white max-w-screen-xl h-[90px] mx-auto border-2 rounded-full border-black flex items-center justify-between px-6">

        {/* Logo */}
        <Link to="/">
          <img
            src="/ATC_nobg.png"
            alt="Logo"
            className="w-[80px] object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10">
          {["Home", "About", "Services", "Contact"].map((label, idx) => {
            const path = label === "Home" ? "/" : `/${label.toLowerCase().replace(/\s+/g, "")}`;
            return (
              <Link
                key={idx}
                to={path}
                className="relative group text-black text-lg md:text-xl font-extrabold"
              >
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
            );
          })}
        </div>


        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="p-3 text-white font-medium rounded-lg border-2 border-black transition-all duration-200 ease-in-out transform bg-black hover:bg-white hover:text-black hover:scale-105"
          >
            Schedule a Call
          </Link>
        </div>

        {/* Hamburger Icon - Mobile only */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-[90px] left-0 w-full bg-white shadow-xl border-t border-black z-40 animate-slide-down">
          <div className="flex flex-col space-y-6 py-6 px-6 text-lg font-semibold text-black">
            {["Home", "About", "Services", "Contact"].map((label, idx) => (
              <Link
                key={idx}
                to={`/${label.toLowerCase().replace(/\s+/g, "")}`}
                className="hover:text-blue-600 transition-all"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 text-center p-3 bg-black text-white rounded-lg border-2 border-black hover:bg-white hover:text-black transition-all"
              onClick={() => setIsOpen(false)}
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
