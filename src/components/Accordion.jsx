import React from "react";

const Accordion = () => {
  return (
    <section className="accord-sec md:pt-20 pt-10 md:pb-20 pb-10 md:w-2/5 mx-auto">
      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className="btn1x flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
          >
            <span>Where can I watch?</span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div className="div1x p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Nibh quisque suscipit fermentum netus nulla cras porttitor euismod
              nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.
              Fermentum sulla craspor ttitore ismod nulla.
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            className="btn1x flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-2"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-2"
          >
            <span>Where can I watch?</span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-2"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-2"
        >
          <div className="div1x p-5 border border-b-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Nibh quisque suscipit fermentum netus nulla cras porttitor euismod
              nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.
              Fermentum sulla craspor ttitore ismod nulla.
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            className="btn1x flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-3"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-3"
          >
            <span>Where can I watch?</span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-3"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-3"
        >
          <div className="div1x p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Nibh quisque suscipit fermentum netus nulla cras porttitor euismod
              nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.
              Fermentum sulla craspor ttitore ismod nulla.
            </p>
          </div>
        </div>

        <h2 id="accordion-collapse-heading-4">
          <button
            type="button"
            className="btn1x flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-4"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-4"
          >
            <span>Where can I watch?</span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-4"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-4"
        >
          <div className="div1x p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Nibh quisque suscipit fermentum netus nulla cras porttitor euismod
              nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.
              Fermentum sulla craspor ttitore ismod nulla.
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-5">
          <button
            type="button"
            className="btn1x flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-5"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-5"
          >
            <span>Where can I watch?</span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-5"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-5"
        >
          <div className="div1x p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Nibh quisque suscipit fermentum netus nulla cras porttitor euismod
              nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.
              Fermentum sulla craspor ttitore ismod nulla.
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-6">
          <button
            type="button"
            className="btn1x flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-6"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-6"
          >
            <span>Where can I watch?</span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-6"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-6"
        >
          <div className="div1x p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Nibh quisque suscipit fermentum netus nulla cras porttitor euismod
              nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.
              Fermentum sulla craspor ttitore ismod nulla.
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-7">
          <button
            type="button"
            className="btn1x flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-7"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-7"
          >
            <span>Where can I watch?</span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-7"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-7"
        >
          <div className="div1x p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Nibh quisque suscipit fermentum netus nulla cras porttitor euismod
              nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.
              Fermentum sulla craspor ttitore ismod nulla.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
