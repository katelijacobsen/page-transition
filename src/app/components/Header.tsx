"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-gray-900 dark:text-white"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 4h14a1 1 0 110 2H3a1 1 0 110-2zm0 4h14a1 1 0 110 2H3a1 1 0 110-2z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center space-x-4`}
        >
          <Link
            href="/"
            className="text-gray-900 dark:text-white hover:text-gray-500"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-gray-900 dark:text-white hover:text-gray-500"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-gray-900 dark:text-white hover:text-gray-500"
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-gray-900 dark:text-white hover:text-gray-500"
          >
            Contact
          </Link>
        </motion.div>

        {/* Language Dropdown */}
        <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
            <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse relative">
              <button
                type="button"
                onClick={toggleDropdown}
                className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                English (US)
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, x: 10, y:100  }}
                    animate={{ opacity: 1, x: 10, y:90 }}
                    exit={{ opacity: 0, x: 10, y:60 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bg-white shadow-md rounded-md mt-2 w-48 text-gray-900 dark:bg-gray-800 dark:text-white"
                  >
                    <ul>
                      <li>
                        <a href="#" className="block px-4 py-2 text-sm">
                          English (US)
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 text-sm">
                          Danish
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 text-sm">
                          German
                        </a>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
