import React from "react";
import weather from "@/assets/weather.png";
import logo from "@/assets/logo.png";
import Mode from "../Mode/Mode";
const Navbar = () => {
  return (
    <div className="shadow-md w-full">
      <div className="md:px-10 py-5 px-7">
        <div className="flex items-center justify-between text-2xl cursor-pointer">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-12 h-12" />
            <span className="font-bold font-akaya">Weather</span>
          </div>
          {/* Add other components as needed */}
          <Mode />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
