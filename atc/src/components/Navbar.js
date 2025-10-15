import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // modern icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="mt-2 sm:mt-2 p-2 sm:p-4 md:p-8 lg:p-5 sticky top-0 z-50 py-0.5 mx-2 sm:mx-5">

      <div className="bg-white max-w-screen-xl h-[70px] sm:h-[80px] md:h-[70px] mx-auto border-2 rounded-full border-black flex items-center justify-between px-8 sm:px-3">

        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="/ATC_nobg.png"
            alt="Logo"
            className="w-[50px] sm:w-[60px] md:w-[80px] object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-4 lg:space-x-10">
          {["Home", "About", "Services", "Contact"].map((label, idx) => {
            const path = label === "Home" ? "/" : `/${label.toLowerCase().replace(/\s+/g, "")}`;
            return (
              <Link
                key={idx}
                to={path}
                className="relative group text-black text-base lg:text-lg xl:text-xl font-extrabold"
              >
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
            );
          })}
        </div>


        {/* CTA Button */}
        <div className="hidden md:block flex-shrink-0">
          <Link
            to="/contact"
            className="px-3 py-2 lg:px-4 lg:py-2 text-white text-sm lg:text-base font-medium rounded-lg border-2 border-black transition-all duration-200 ease-in-out transform bg-black hover:bg-white hover:text-black hover:scale-105 whitespace-nowrap"
          >
            Schedule a Call
          </Link>
        </div>

        {/* Hamburger Icon - Mobile only */}
        <button
          className="md:hidden text-black focus:outline-none flex-shrink-0"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} className="sm:w-7 sm:h-7" /> : <Menu size={24} className="sm:w-7 sm:h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-[72px] sm:top-[82px] left-0 w-full bg-white shadow-xl border-t border-black z-40 animate-slide-down">
          <div className="flex flex-col space-y-4 sm:space-y-6 py-4 sm:py-6 px-4 sm:px-6 text-base sm:text-lg font-semibold text-black">
          {["Home", "About", "Services", "Contact"].map((label, idx) => {
            const path = label === "Home" ? "/" : `/${label.toLowerCase().replace(/\s+/g, "")}`;
            return (
              <Link
                key={idx}
                to={path}
                className="hover:text-blue-600 transition-all py-2 active:scale-95"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            );
          })}
            <Link
              to="/contact"
              className="mt-2 sm:mt-4 text-center p-3 bg-black text-white rounded-lg border-2 border-black hover:bg-white hover:text-black transition-all active:scale-95"
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
