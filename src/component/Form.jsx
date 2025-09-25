import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    surname: "",
    company_name: "",
    organization: "",
    position: "",
    company_address: "",
    country_of_registration: "",
    sector: "",
    tel: "",
    mobile: "",
    email: "",
    course_title: "",
  });
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://countriesnow.space/api/v0.1/countries"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        // Ensure data is an array before mapping
        if (Array.isArray(result.data)) {
          const sorted = result.data
            .map((c) => c.country) // Extract 'country' field
            .sort((a, b) => a.localeCompare(b));
          setCountries(sorted);
        } else {
          throw new Error("Unexpected response format: Data is not an array");
        }
      } catch (error) {
        console.error("Failed to fetch countries:", error);
        toast.error("Could not load countries. Please try again later.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
        setCountries([]); // Fallback to empty array
      }
    };

    fetchCountries();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const submissionData = {
      ...formData,
      form_source: "messerand",
    };

    if (!submissionData.course_title) {
      delete submissionData.course_title;
    }

    try {
      const response = await fetch(
        "https://dash.rsbpp.nl/api/messerand-registration/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submissionData),
        }
      );

      if (response.ok) {
        // Show success toast
        toast.success(
          `Registration successful${
            formData.first_name ? `, ${formData.first_name}` : ""
          }!${
            formData.course_title
              ? ` You've registered for ${formData.course_title}.`
              : ""
          }`,
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          }
        );
        // Reset form and navigate
        setFormData({
          first_name: "",
          surname: "",
          company_name: "",
          organization: "",
          position: "",
          company_address: "",
          country_of_registration: "",
          sector: "",
          tel: "",
          mobile: "",
          email: "",
          course_title: "",
        });
        navigate("/success", {
          state: {
            first_name: formData.first_name,
            course_title: formData.course_title,
          },
        });
      } else {
        const errorData = await response.json();
        toast.error(
          `Submission failed: ${errorData.message || "Unknown error"}`,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          }
        );
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Network error. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#00715d] rounded-lg shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8 text-center">
            Registration Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#ddd6d6c4] font-medium mb-2 text-sm sm:text-base">
                  First Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border-b border-[#7A7A7A] text-white placeholder-[#7A7A7A] focus:outline-none focus:border-[#fbd45a] transition-colors text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-[#ddd6d6c4] font-medium mb-2 text-sm sm:text-base">
                  Surname
                </label>
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border-b border-[#7A7A7A] text-white placeholder-[#7A7A7A] focus:outline-none focus:border-[#fbd45a] transition-colors text-sm sm:text-base"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#ddd6d6c4] font-medium mb-2 text-sm sm:text-base">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border-b border-[#7A7A7A] text-white placeholder-[#7A7A7A] focus:outline-none focus:border-[#fbd45a] transition-colors text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-[#ddd6d6c4] font-medium mb-2 text-sm sm:text-base">
                  Organization
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border-b border-[#7A7A7A] text-white placeholder-[#7A7A7A] focus:outline-none focus:border-[#fbd45a] transition-colors text-sm sm:text-base"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#ddd6d6c4] font-medium mb-2 text-sm sm:text-base">
                  Position
                </label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border-b border-[#7A7A7A] text-white placeholder-[#7A7A7A] focus:outline-none focus:border-[#fbd45a] transition-colors text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-[#ddd6d6c4] font-medium mb-2 text-sm sm:text-base">
                  Company Address
                </label>
                <input
                  type="text"
                  name="company_address"
                  value={formData.company_address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border-b border-[#7A7A7A] text-white placeholder-[#7A7A7A] focus:outline-none focus:border-[#fbd45a] transition-colors text-sm sm:text-base"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#ddd6d6c4] font-medium mb-2 text-sm sm:text-base">
                  Country of Registration
                </label>
                <select
                  name="country_of_registration"
                  value={formData.country_of_registration}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border-b border-[#7A7A7A] text-white focus:outline-none focus:border-[#fbd45a] transition-colors text-sm sm:text-base"
                >
                  <option value="" className="text-black">
                    Select a country
                  </option>
                  {countries.map((country, index) => (
                    <option key={index} value={country} className="text-black">
                      {country}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-[#ddd6d6c4] font-medium mb-2 text-sm sm:text-base">
                  Sector
                </label>
                <input
                  type="text"
                  name="sector"
                  value={formData.sector}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border-b border-[#7A7A7A] text-white placeholder-[#7A7A7A] focus:outline-none focus:border-[#fbd45a] transition-colors text-sm sm:text-base"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#ddd6d6c4] font-medium mb-2 text-sm sm:text-base">
                  Telephone
                </label>
                <input
                  type="tel"
                  name="tel"
                  value={formData.tel}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border-b border-[#7A7A7A] text-white placeholder-[#7A7A7A] focus:outline-none focus:border-[#fbd45a] transition-colors text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-[#ddd6d6c4] font-medium mb-2 text-sm sm:text-base">
                  Mobile
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border-b border-[#7A7A7A] text-white placeholder-[#7A7A7A] focus:outline-none focus:border-[#fbd45a] transition-colors text-sm sm:text-base"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#ddd6d6c4] font-medium mb-2 text-sm sm:text-base">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border-b border-[#7A7A7A] text-white placeholder-[#7A7A7A] focus:outline-none focus:border-[#fbd45a] transition-colors text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-[#ddd6d6c4] font-medium mb-2 text-sm sm:text-base">
                  Course Title (Optional)
                </label>
                <input
                  type="text"
                  name="course_title"
                  value={formData.course_title}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border-b border-[#7A7A7A] text-white placeholder-[#7A7A7A] focus:outline-none focus:border-[#fbd45a] transition-colors text-sm sm:text-base"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#fbd45a] text-black px-10 py-4 font-semibold hover:bg-[#fbd45a]/80 transition-colors disabled:opacity-50 text-sm sm:text-base"
            >
              {loading ? "Submitting..." : "Submit Registration"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
