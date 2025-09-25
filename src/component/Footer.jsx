import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Send,
} from "lucide-react";
import { FaPinterest } from "react-icons/fa";
import logo from "../assets/small-logo.jpg";

const Footer = ({ email, setEmail, agreed, setAgreed }) => {
  return (
    <div className="">
      <div className="bg-[#0c2621] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* Left Column - Company Info */}
            <div className="text-white">
              <div className="flex items-center space-x-2 mb-6 sm:mb-8 px-4 sm:px-12 py-6 sm:py-10">
                <img src={logo} alt="logo" className="h-8 sm:h-9" />
                <h2 className="text-xl sm:text-2xl font-semibold">messerand</h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed mb-8 sm:mb-12 px-4 sm:px-0">
                Messe Rand is an experienced provider of corporate consultancy
                services and learning technology, designed to accelerate
                productivity and growth for your business and organization.
              </p>

              {/* Social Media Icons */}
              <div className="flex space-x-4 sm:space-x-6 px-4 sm:px-0">
                <div className="w-10 h-10 bg-[#202428] rounded-full flex items-center justify-center hover:bg-[#00715d]/80 cursor-pointer transition-colors">
                  <Facebook
                    size={20}
                    fill="white"
                    className="text-[#ddd6d6c4]"
                  />
                </div>
                <div className="w-10 h-10 bg-[#202428] rounded-full flex items-center justify-center hover:bg-[#00715d]/80 cursor-pointer transition-colors">
                  <Twitter
                    size={20}
                    fill="white"
                    className="text-[#ddd6d6c4]"
                  />
                </div>
                <div className="w-10 h-10 bg-[#202428] rounded-full flex items-center justify-center hover:bg-[#00715d]/80 cursor-pointer transition-colors">
                  <Linkedin
                    size={20}
                    fill="white"
                    className="text-[#ddd6d6c4]"
                  />
                </div>
                <div className="w-10 h-10 bg-[#202428] rounded-full flex items-center justify-center hover:bg-[#00715d]/80 cursor-pointer transition-colors">
                  <FaPinterest size={20} className="text-[#ddd6d6c4]" />
                </div>
              </div>
            </div>

            {/* Right Column - Contact & Newsletter */}
            <div className="text-white space-y-8 sm:space-y-12 px-4 sm:px-0">
              {/* Contact Section */}
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 flex items-center space-x-1">
                  Contact
                  <hr className="w-12 h-1 border-none bg-[#fbd45a] ml-2 mt-2" />
                </h3>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin
                      size={20}
                      className="text-[#fbd45a] mt-1 flex-shrink-0"
                    />
                    <p className="text-sm sm:text-base">
                      Westplein 12-14 3016 BM Rotterdam The Netherlands
                    </p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Phone size={20} className="text-[#fbd45a] flex-shrink-0" />
                    <p className="text-sm sm:text-base">+31 103 070 160</p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Mail size={20} className="text-[#fbd45a] flex-shrink-0" />
                    <p className="text-sm sm:text-base">
                      enquiries@messerand.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Newsletter Section */}
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 flex items-center space-x-1">
                  Newsletter
                  <hr className="w-12 h-1 border-none bg-[#fbd45a] ml-2 mt-2" />
                </h3>

                <p className="text-white text-sm sm:text-base mb-4 sm:mb-6">
                  Subscribe our newsletter
                </p>

                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-white py-2 sm:py-3 pr-12 text-[#ddd6d6c4] placeholder-[#7A7A7A] text-sm sm:text-base focus:outline-none focus:border-[#fbd45a] transition-colors"
                  />
                  <button className="absolute right-0 top-2 sm:top-3 text-[#fbd45a] hover:text-[#fbd45a]/80 transition-colors">
                    <Send size={20} />
                  </button>
                </div>

                <div className="flex items-start space-x-3 mt-4 sm:mt-6">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="w-4 h-4 mt-0.5 accent-[#fbd45a] bg-transparent"
                  />
                  <label
                    htmlFor="terms"
                    className="text-xs sm:text-sm text-[#7A7A7A] leading-relaxed"
                  >
                    I agree to all your terms & policies
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#202428] flex w-full py-4 sm:py-5 px-4 text-center">
        <p className="text-center w-full text-gray-400 text-xs sm:text-sm">
          Copyright © 2024 Messe Rand . All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
