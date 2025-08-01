import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <div>
      <nav className="w-full h-[70px] flex items-center justify-between text-white border-b border-grey px-4">
        <h1>
          <a href="#hero" className="text-3xl font-bold">
            Juristica
          </a>
        </h1>

        {/* Mobile menu icon */}
        <div className="flex items-center justify-center gap-3 sm:hidden">
          {!isOpen ? (
            <button onClick={toggleMenu} className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="white"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </button>
          ) : (
            <button onClick={closeMenu} className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="white"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </button>
          )}
        </div>

        <ul className="hidden sm:flex items-center text-lg gap-6">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#cases">Cases</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
        </ul>

        <a
          href="#contact"
          className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 hidden sm:flex cursor-pointer"
        >
          Contact us
        </a>

        <div
          className={`fixed top-0 left-0 z-50 transition-opacity duration-500 ease-in-out sm:hidden ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          } w-[70%] h-full backdrop-blur-md `}
        >
          <ul className="flex flex-col gap-9 text-white p-5 font-primary mt-20 text-center">
            <li>
              <a href="#hero" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>
                About us
              </a>
            </li>
            <li>
              <a href="#services" onClick={closeMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#cases" onClick={closeMenu}>
                Cases
              </a>
            </li>
            <li>
              <a href="#blog" onClick={closeMenu}>
                Blog
              </a>
            </li>
            <a
              href="#contact"
              onClick={closeMenu}
              className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 cursor-pointer"
            >
              Contact us
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
