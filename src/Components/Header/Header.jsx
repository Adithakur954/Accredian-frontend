import React from "react";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <div className="bg-white shadow-md">
      <div className="flex justify-between items-center px-12 py-4">
        
        <div className="flex items-center gap-4">
          <img src={logo} alt="logo" className="h-14" />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
            Course ⏷
          </button>
        </div>

        
        <div className="flex items-center gap-6">
          <ul className="flex gap-6 text-lg text-gray-700 font-medium">
            <li className="hover:text-blue-600 transition cursor-pointer">Home</li>
            <li className="hover:text-blue-600 transition cursor-pointer">Contact</li>
            <li className="hover:text-blue-600 transition cursor-pointer">Refer & Earn</li>
          </ul>

         
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
              LOGIN
            </button>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition">
              Try For Free
            </button>
          </div>
        </div>
      </div>

      
      <hr className="w-full border-t-2 border-gray-300 mt-2 shadow-sm" />
    </div>
  );
}

export default Header;
