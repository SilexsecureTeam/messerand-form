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
import logo from "../assets/logo.jpeg";

const Footer = ({ email, setEmail, agreed, setAgreed }) => {
  return (
    <div className="bg-[#00715d]">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Company Info */}
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-8  px-12 py-10">
              <img src={logo} alt="logo" />
              {/* <h2 className="text-2xl font-semibold">messerand</h2> */}
            </div>

            <p className="text-base text-[#7A7A7A] leading-relaxed mb-12">
              Messe Rand is an experienced provider of corporate consultancy
              services and learning technology, designed to accelerate
              productivity and growth for your business and organization.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <div className="w-10 h-10 bg-[#00715d] rounded-full flex items-center justify-center hover:bg-[#00715d]/80 cursor-pointer transition-colors">
                <Facebook size={20} className="text-[#ddd6d6c4]" />
              </div>
              <div className="w-10 h-10 bg-[#00715d] rounded-full flex items-center justify-center hover:bg-[#00715d]/80 cursor-pointer transition-colors">
                <Twitter size={20} className="text-[#ddd6d6c4]" />
              </div>
              <div className="w-10 h-10 bg-[#00715d] rounded-full flex items-center justify-center hover:bg-[#00715d]/80 cursor-pointer transition-colors">
                <Linkedin size={20} className="text-[#ddd6d6c4]" />
              </div>
              <div className="w-10 h-10 bg-[#00715d] rounded-full flex items-center justify-center hover:bg-[#00715d]/80 cursor-pointer transition-colors">
                <div className="w-5 h-5 bg-[#ddd6d6c4] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact & Newsletter */}
          <div className="text-white space-y-12">
            {/* Contact Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 relative">
                Contact
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#fbd45a] mt-2"></span>
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin
                    size={20}
                    className="text-white mt-1 flex-shrink-0"
                    fill="#00715d"
                  />
                  <p className="text-[#7A7A7A] text-base">
                    Westplein 12-14 3016 BM Rotterdam The Netherlands
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone size={20} className="text-[#fbd45a] flex-shrink-0" />
                  <p className="text-[#7A7A7A] text-base">+31 103 070 160</p>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail size={20} className="text-[#fbd45a] flex-shrink-0" />
                  <p className="text-[#7A7A7A] text-base">
                    enquiries@messerand.com
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 relative">
                Newsletter
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#fbd45a] mt-2"></span>
              </h3>

              <p className="text-[#7A7A7A] text-base mb-6">
                Subscribe our newsletter
              </p>

              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full bg-transparent border-b border-[#7A7A7A] py-3 pr-12 text-[#ddd6d6c4] placeholder-[#7A7A7A] focus:outline-none focus:border-[#fbd45a] transition-colors"
                />
                <button className="absolute right-0 top-3 text-[#fbd45a] hover:text-[#fbd45a]/80 transition-colors">
                  <Send size={20} />
                </button>
              </div>

              <div className="flex items-start space-x-3 mt-6">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="w-4 h-4 mt-0.5 accent-[#fbd45a]"
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-[#7A7A7A] leading-relaxed"
                >
                  I agree to all your terms & policies
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
