import React, { useState } from "react";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <section className="accord-sec md:pt-20 pt-10 md:pb-20 pb-10 md:w-2/5 mx-auto">
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <div
          key={index}
          className="border border-[#000] py-[18px] px-[24px] mb-[14px]"
        >
          <div
            onClick={() => setIsOpen(index === isOpen ? null : index)}
            className="flex justify-between"
          >
            <p className="text-[18px] font-[700]">Where can I watch?</p>
            <div>
              <svg
                className={`${isOpen === index && "rotate-90"}`}
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M9.74145 8.08225L6.08444 4.42525C6.01136 4.3587 5.95237 4.27815 5.91096 4.18839C5.86956 4.09863 5.84659 4.00147 5.8434 3.90267C5.84022 3.80387 5.85689 3.70543 5.89242 3.61319C5.92796 3.52095 5.98164 3.43677 6.05029 3.36565C6.11894 3.29452 6.20116 3.23789 6.29209 3.19911C6.38302 3.16033 6.4808 3.14018 6.57965 3.13987C6.6785 3.13955 6.77641 3.15907 6.86759 3.19727C6.95876 3.23547 7.04134 3.29157 7.11044 3.36225L7.12844 3.38025L11.3084 7.55925C11.447 7.69784 11.5248 7.88578 11.5248 8.08175C11.5248 8.27772 11.447 8.46567 11.3084 8.60425L7.12945 12.7833C7.06201 12.8531 6.98149 12.9089 6.89248 12.9476C6.80347 12.9862 6.70771 13.007 6.61067 13.0087C6.51364 13.0104 6.41722 12.9929 6.32693 12.9573C6.23664 12.9217 6.15424 12.8687 6.08445 12.8013C6.01465 12.7338 5.95882 12.6533 5.92014 12.5643C5.88146 12.4753 5.86069 12.3795 5.85902 12.2825C5.85735 12.1854 5.87481 12.089 5.9104 11.9987C5.94599 11.9084 5.99901 11.8261 6.06645 11.7563L6.08445 11.7383L9.74145 8.08225Z"
                  fill="#6F1DF4"
                  stroke="#6F1DF4"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
          </div>
          {isOpen === index && (
            <p className="text-[18px] font-[400] mt-[18px]">
              {" "}
              Nibh quisque suscipit fermentum netus nulla cras porttitor euismod
              nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.
              Fermentum sulla craspor ttitore ismod nulla.
            </p>
          )}
        </div>
      ))}
    </section>
  );
};

export default Accordion;
