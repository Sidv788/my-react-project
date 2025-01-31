import { useState } from "react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={
        darkMode
          ? "dark bg-gray-900 p-4 border-b border-white text-white "
          : "bg-white p-4 border-b border-gray-500 text-black "
      }
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl  font-bold">
          <button>Assessment</button>
        </div>

        <div className="hidden font-semibold md:flex space-x-8 ">
          <a href="about:blank" target="_blank" rel="noopener noreferrer">
            About Us
          </a>
          <a href="about:blank" target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
          <a href="about:blank" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 cursor-pointer rounded transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            className="md:hidden p-2 rounded transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖️" : "☰"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 font-semibold  p-4 shadow-lg">
          <a href="#" className="block py-2  rounded">
            About Us
          </a>
          <a href="#" className="block py-2  rounded">
            Learn More
          </a>
          <a href="#" className="block py-2  rounded">
            Privacy Policy
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
