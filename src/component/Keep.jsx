// now let the service have a dropdown of Advisory Services
// ⁙ Procurement
// ⁙ Infrastructure
// ⁙ Public Finance
// ⁙ HR Consultancy
// ⁙EmployeeTraining
// Events
// ⁙Upcoming Events
// ⁙⁠Past Events.      while the STRATEGIC PARTNER have a dropdown of RSBPP. now no need of the dropdown icon. just when user hover over it so the dropdown shows. that is all. the dropdown as a background color of bg-[#202428]

import React, { useState } from "react";
import logo from "../assets/logo.jpeg";
import { MapPin, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full">
      <div className="h-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="flex items-center justify-between w-full md:w-auto bg-[#202428] px-4 py-6 md:px-12 md:py-10">
            <img src={logo} alt="logo" className="h-10 md:h-auto" />
            <button
              className="md:hidden text-white"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="flex flex-col flex-1 w-full">
            <div className="flex bg-white space-x-1 items-center py-2 px-4">
              <MapPin
                className="text-white h-[16px] flex-shrink-0"
                fill="#00715d"
              />
              <h2 className="text-[#7A7A7A] text-sm md:text-base font-normal capitalize">
                All our training programmes are now managed by Rotterdam School
                of Business and Public Policy
              </h2>
            </div>

            <div className="bg-[#00715d] w-full flex flex-col md:flex-row justify-between py-4 px-4 md:pr-14">
              {/* Navigation */}
              <nav
                className={`${
                  isMenuOpen ? "flex" : "hidden"
                } md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0`}
              >
                <a
                  href="#"
                  className="text-[#ddd6d6c4] font-semibold text-base hover:text-[#fbd45a] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  HOME
                </a>
                <a
                  href="#"
                  className="text-[#ddd6d6c4] font-semibold text-base hover:text-[#fbd45a] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ABOUT US
                </a>

                {/* OUR SERVICES Dropdown */}
                <div className="relative group">
                  <a
                    href="#"
                    className="text-[#ddd6d6c4] font-semibold text-base hover:text-[#fbd45a] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    OUR SERVICES
                  </a>
                  <div
                    className="absolute left-0 mt-2 w-48 bg-[#202428] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:delay-150 z-10"
                    style={{ transitionDelay: "0ms, 150ms" }} // Delay for closing
                  >
                    <div className="flex flex-col py-2">
                      <a
                        href="#"
                        className="text-[#ddd6d6c4] hover:text-[#fbd45a] px-4 py-2 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Advisory Services
                      </a>
                      <a
                        href="#"
                        className="text-[#ddd6d6c4] hover:text-[#fbd45a] px-4 py-2 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Procurement
                      </a>
                      <a
                        href="#"
                        className="text-[#ddd6d6c4] hover:text-[#fbd45a] px-4 py-2 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Infrastructure
                      </a>
                      <a
                        href="#"
                        className="text-[#ddd6d6c4] hover:text-[#fbd45a] px-4 py-2 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Public Finance
                      </a>
                      <a
                        href="#"
                        className="text-[#ddd6d6c4] hover:text-[#fbd45a] px-4 py-2 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        HR Consultancy
                      </a>
                      <a
                        href="#"
                        className="text-[#ddd6d6c4] hover:text-[#fbd45a] px-4 py-2 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Employee Training
                      </a>
                      <a
                        href="#"
                        className="text-[#ddd6d6c4] hover:text-[#fbd45a] px-4 py-2 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Upcoming Events
                      </a>
                      <a
                        href="#"
                        className="text-[#ddd6d6c4] hover:text-[#fbd45a] px-4 py-2 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Past Events
                      </a>
                    </div>
                  </div>
                </div>

                {/* STRATEGIC PARTNER Dropdown */}
                <div className="relative group">
                  <a
                    href="#"
                    className="text-[#ddd6d6c4] font-semibold text-base hover:text-[#fbd45a] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    STRATEGIC PARTNER
                  </a>
                  <div
                    className="absolute left-0 mt-2 w-48 bg-[#202428] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:delay-150 z-10"
                    style={{ transitionDelay: "0ms, 150ms" }} // Delay for closing
                  >
                    <div className="flex flex-col py-2">
                      <a
                        href="#"
                        className="text-[#ddd6d6c4] hover:text-[#fbd45a] px-4 py-2 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        RSBPP
                      </a>
                    </div>
                  </div>
                </div>
              </nav>

              {/* Contact Button */}
              <button className="bg-[#fbd45a] text-black px-6 py-3 md:px-10 md:py-4 font-semibold hover:bg-[#fbd45a]/80 transition-colors mt-4 md:mt-0">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
