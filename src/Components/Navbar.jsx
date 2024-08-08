// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0"> 
            { <Link to="/">
          <div className="text-3xl font-bold">
            <span className="text-[#B2456E] hover:text-white transition duration-300">Z</span>
            <span className="text-white hover:text-[#B2456E] transition duration-300">O</span>
            <span className="text-[#B2456E] hover:text-white transition duration-300">L</span>
            <span className="text-white hover:text-[#B2456E] transition duration-300">A</span>
          </div>
        </Link> }
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-300 hover:bg-[#B2456E] hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="AboutUs" className="text-gray-300 hover:bg-[#B2456E] hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About Us
              </Link>
             
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-gray-100 hover:bg-[#B2456E] hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                >
                  Section
                </button>
                <Link to="ContactUs" className="text-gray-300 hover:bg-[#B2456E] hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact Us
              </Link>
                <Transition
                  show={isDropdownOpen}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  {(ref) => (
                    <div ref={ref} className="absolute mt-2 w-48 rounded-md shadow-lg bg-[#B2456E] ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <Link to="Mens" className="block px-4 py-2 text-sm text-white hover:bg-black" role="menuitem">
                          Mens
                        </Link>
                        <Link to="Women" className="block px-4 py-2 text-sm text-white hover:bg-black" role="menuitem">
                          Women
                        </Link>
                        <Link to="Kids" className="block px-4 py-2 text-sm text-white hover:bg-black" role="menuitem">
                          Kids
                        </Link>
                      </div>
                    </div>
                  )}
                </Transition>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-[#B2456E] inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div ref={ref} className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="text-gray-300 hover:bg-[#B2456E] hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Home
              </Link>
              <Link to="AboutUs" className="text-gray-300 hover:bg-[#B2456E] hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                About Us
              </Link>
              <Link to="ContactUs" className="text-gray-300 hover:bg-[#B2456E] hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Contact Us
              </Link>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-gray-300 hover:bg-[#B2456E] hover:text-white block px-3 py-2 rounded-md text-base font-medium focus:outline-none"
                >
                  Section
                </button>
                <Transition
                  show={isDropdownOpen}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  {(ref) => (
                    <div ref={ref} className="absolute mt-2 w-48 rounded-md shadow-lg bg-[#B2456E] ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <Link to="Mens" className="block px-4 py-2 text-sm text-white hover:bg-black" role="menuitem">
                          Mens
                        </Link>
                        <Link to="Women" className="block px-4 py-2 text-sm text-white hover:bg-black" role="menuitem">
                          Women
                        </Link>
                        <Link to="Kids" className="block px-4 py-2 text-sm text-white hover:bg-black" role="menuitem">
                          Kids
                        </Link>
                      </div>
                    </div>
                  )}
                </Transition>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
