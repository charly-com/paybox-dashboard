import { useState } from "react";
import playbox from "./assets/Paybox.png";
import analytics from "./assets/category-2.svg";
import medal from "./assets/medal-star.svg";
import profile from "./assets/security-user.png";
import redar from "./assets/radar.svg";
import { RiHome5Line } from "react-icons/ri";
import { IoChevronForwardSharp } from "react-icons/io5";
import { dropdownData } from "././data/custom.js";
import Main from "./components/main.jsx";

import "./App.css";

function App() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(-1);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(index === openDropdownIndex ? -1 : index);
  };
  return (
    <div className="bg-[#07112D] w-screen h-screen rounded-[20px] flex">
      <div>
        <img src={playbox} alt="playbox" />
        <p className="text-white font-clash-display text-base font-normal">
          byLibertyPay
        </p>
        <div className="custom-line"></div>
        <div className="flex items-center space-x-2">
          <RiHome5Line size={24} className="text-white" />
          <span className="text-white font-nunito text-base font-semibold">
            Home
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src={analytics}
            alt="Your Image"
            className="w-5 h-5 flex-shrink-0"
          />
          <span className="text-white font-nunito text-base font-semibold">
            Analytics Dashboard
          </span>
        </div>
        <div className="custom-line"></div>
        <div>
          {dropdownData.map((item, index) => (
            <div className="relative" key={index}>
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => toggleDropdown(index)}
              >
                <img
                  src={item.imageSrc}
                  alt="Your Image"
                  className="w-5 h-5 flex-shrink-0"
                />
                <span className="text-white font-nunito text-base font-semibold">
                  {item.text}
                </span>
                <IoChevronForwardSharp size={24} className="text-white" />
              </div>
              {openDropdownIndex === index && (
                <div className="absolute mt-2 py-2 bg-white shadow-lg rounded">
                  {item.options.map((option, optionIndex) => (
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      key={optionIndex}
                    >
                      {option}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="custom-line"></div>
        <div className="flex items-center space-x-2">
          <img src={medal} alt="Your Image" className="w-5 h-5 flex-shrink-0" />
          <span className="text-white font-nunito text-base font-semibold">
            Leaderboard
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src={profile}
            alt="Your Image"
            className="w-5 h-5 flex-shrink-0"
          />
          <span className="text-white font-nunito text-base font-semibold">
            Profile & Settings
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <img src={redar} alt="Your Image" className="w-5 h-5 flex-shrink-0" />
          <span className="text-white font-nunito text-base font-semibold">
            Profile & Settings
          </span>
          <IoChevronForwardSharp size={24} className="text-white" />
        </div>
      </div>
      <Main />
    </div>
  );
}

export default App;
