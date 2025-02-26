import React from "react";
import logo from "../../assets/whitelogo.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-10 mt-2">
        <div className="flex flex-col md:flex-row justify-around items-center">
          <img src={logo} alt="Logo" className="h-14 mb-4 md:mb-0" />
          <div className="text-center">
            <button className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Schedule 1-on-1 Call Now
            </button>
            <p className="mt-2 text-gray-400">Speak with our Learning Advisor</p>
          </div>
        </div>

        <hr className="border-gray-700 max-w-6xl mx-auto my-6" />

        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Programs Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              {[
                "Data Science & AI",
                "Product Management",
                "Business Analytics",
                "Digital Transformation",
                "Business Management",
                "Project Management",
                "Strategy & Leadership",
                "Senior Management",
                "Fintech",
              ].map((program, index) => (
                <li key={index} className="border-b border-gray-700 py-2 flex justify-between items-center">
                  {program}
                  <span className="text-gray-400 cursor-pointer">+</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                Email us (For Data Science Queries):{" "}
                <a href="mailto:admissions@accredian.com" className="text-blue-400">
                  admissions@accredian.com
                </a>
              </li>
              <li>
                Email us (For Product Management Queries):{" "}
                <a href="mailto:pm@accredian.com" className="text-blue-400">
                  pm@accredian.com
                </a>
              </li>
              <li>
                Data Science Admission Helpline:{" "}
                <span className="text-blue-400">+91 9076352932 (9 AM - 7 PM)</span>
              </li>
              <li>
                Product Management Helpline:{" "}
                <span className="text-blue-400">+91 9625811095</span>
              </li>
              <li>
                Enrolled Student Helpline:{" "}
                <span className="text-blue-400">+91 7969222507</span>
              </li>
              <li>
                Office Address:{" "}
                <span className="text-blue-400">
                  4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015
                </span>
              </li>
            </ul>
          </div>

          {/* Accredian Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Accredian</h3>
            <ul className="space-y-2">
              {[
                "About",
                "Career",
                "Blog",
                "Admission Policy",
                "Referral Policy",
                "Privacy Policy",
                "Terms Of Service",
                "Master FAQs",
              ].map((link, index) => (
                <li key={index} className="border-b border-gray-700 py-2">
                  <span className="text-blue-400 cursor-pointer">{link}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 py-4 text-center text-gray-400">
          <p>© 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
