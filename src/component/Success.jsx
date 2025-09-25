import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { first_name, course_title } = location.state || {};

  return (
    <div className="min-h-screen bg-white py-16 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#00715d] rounded-lg shadow-lg p-8">
          <CheckCircle className="w-16 h-16 text-[#fbd45a] mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Congratulations{first_name ? `, ${first_name}` : ""}!
          </h2>
          <p className="text-[#ddd6d6c4] text-sm sm:text-base mb-6">
            Your registration{course_title ? ` for ${course_title}` : ""} has
            been successfully submitted. We are excited to have you on board
            with Messerand. You'll receive a confirmation email soon with
            further details.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-[#fbd45a] text-black px-10 py-4 font-semibold hover:bg-[#fbd45a]/80 transition-colors text-sm sm:text-base"
          >
            Back to Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
