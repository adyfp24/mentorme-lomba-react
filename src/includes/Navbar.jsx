import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-blue-700 border-gray-200 px-6 py-4 ">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
      <Link to="/">
        <a className="flex items-center">
          <span className="self-center text-xl sm:text-3xl font-bold whitespace-nowrap text-white ">mentorme.</span>
        </a>
        </Link>
        <div className="md:hidden justify-center ml-28 sm:ml-28 flex items-center">
          <button
            onClick={toggleDropdown}
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex ml-10 p-2 text-sm rounded-lg lg:hidden bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white  "
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Buka main menu</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
            </svg>
            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="justify-between items-center" id="mobile-menu-2">
          <ul className="hidden md:flex flex-col md:flex-row font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <Link to="/">
            <li>
              <a
                className="block p-2 text-white  border-gray-100 rounded-md hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0  "
                aria-current="page"
              >
                Beranda
              </a>
            </li>
            </Link>
            <Link to="/about">
            <li>
              <a
                
                className="block p-2 text-white  border-gray-100 rounded-md hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0  "
              >
                Tentang Kami
              </a>
            </li>
            </Link>
            <Link to="/jadwal">
            <li>
              <a
                
                className="block p-2 text-white border-gray-100 rounded-md hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0  "
              >
                Jadwal
              </a>
            </li>
            </Link>
            <Link to="/mentoring">
            <li>
              <a
                
                className="block p-2 text-white  border-gray-100 rounded-md hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0  "
              >
                Cari Mentor
              </a>
            </li>
            </Link>
            <Link to="/login">
            <li>
              <a className="hidden hover:text-blue-700 mt-1 text-white md:block  hover:bg-gray-50 focus:ring-4 transition hover:scale-[106%] focus:ring-gray-300 font-medium ml-16 rounded-lg text-sm px-5 pl-5 py-1  focus:outline-none  border-gray-300  border-solid-2 border">
                Login
              </a>
            </li>
            </Link>
            <Link to="/register">
            <li>
              <a className="text-blue-700 hidden md:block mt-1 bg-white hover:bg-white focus:ring-4 transition hover:scale-[103%] focus:ring-gray-300 hover:text-blue-700 font-medium rounded-lg text-sm px-5 py-1.5 mb-2 mr-2  focus:outline-none ">
                Mulai Sekarang
              </a>
            </li>
            </Link>
          </ul>
        </div>
      </div>
      {isDropdownOpen && (
        <ul className=" text-white md:hidden flex flex-col p-5 list-none ml-3">
          <li className="mb-5" >
            <Link to="/">Beranda</Link>
          </li>
          <li className="mb-5" >
            <Link to="/about">Tentang Kami</Link>
          </li>
          <li className="mb-5" >
            <Link to="/jadwal">Jadwal</Link>
          </li>
          <li className="mb-5" >
            <Link to="/mentoring">Cari Mentor</Link>
          </li>
          <li>
            <button className="text-white border px-4 bg-blue-700 rounded-md">
              <Link to="/login">Login</Link>
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
