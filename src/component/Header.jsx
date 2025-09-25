import React from "react";
import logo from "../assets/logo.jpeg";
import { MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="">
      <div className="h-auto ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 bg-[#202428] px-12 py-10">
            <img src={logo} alt="logo" />
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex bg-white space-x-1 items-center py-2">
              <MapPin className="text-white h-[16px]" fill="#00715d" />
              <h2 className="text-[#7A7A7A] text-base font-medium">
                All our training programmes are now managed by Rotterdam School
                of Business and Public Policy
              </h2>
            </div>
            <div className="bg-[#00715d] w-full flex justify-between py-4.5 pr-14">
              {/* Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <a
                  href="#"
                  className="text-[#ddd6d6c4] font-semibold text-base hover:text-[#fbd45a] transition-colors"
                >
                  HOME
                </a>
                <a
                  href="#"
                  className="text-[#ddd6d6c4] font-semibold text-base hover:text-[#fbd45a] transition-colors"
                >
                  ABOUT US
                </a>
                <a
                  href="#"
                  className="text-[#ddd6d6c4] font-semibold text-base hover:text-[#fbd45a] transition-colors"
                >
                  OUR SERVICES
                </a>
                <a
                  href="#"
                  className="text-[#ddd6d6c4] font-semibold text-base hover:text-[#fbd45a] transition-colors"
                >
                  STRATEGIC PARTNER
                </a>
              </nav>

              {/* Contact Button */}
              <button className="bg-[#fbd45a] text-black px-10 py-4 font-semibold hover:bg-[#fbd45a]/80 transition-colors">
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
