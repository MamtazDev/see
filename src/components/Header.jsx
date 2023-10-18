import React from "react";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <nav className="bg-white border-gray-200 py-2.5 rounded dark:bg-gray-900 nav-sec pb-6">
      <div className="2xl:max-w-full xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm flex flex-wrap items-start justify-between mx-auto">
        <a href="#" className="flex items-center">
          <img src={logo} className="h-10 mr-3 sm:h-20 menu-logo" alt="" />
        </a>
        <div className="flex md:order-2">
          <button type="button" className="c-btn">
            CONTACT
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 mobile-btn-d"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-4 md:text-lg text-base md:font-normal md:border-0 md:bg-white">
            <li>
              <a
                href="#"
                className="pb-2 text-black text-lg font-normal lg:mx-6 mx-3 nav-link"
                aria-current="page"
              >
                VIDEO ASSIST
              </a>
            </li>
            <li>
              <a
                href="#"
                className="pb-2 text-black text-lg font-normal lg:mx-6 mx-3 nav-link"
              >
                TELEPROMPTER
              </a>
            </li>
            <li>
              <a
                href="#"
                className="pb-2 text-black text-lg font-normal lg:mx-6 mx-3 nav-link"
              >
                PRODUCTION
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
