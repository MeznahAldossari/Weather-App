import React from "react";
import Weather_Animation from "@/assets/Weather_Animation.json";
import Cloud from "@/assets/Cloud.json";

import Lottie from "lottie-react";
import { FaSearch } from "react-icons/fa";

const Weather = () => {
  return (
    <div className="flex justify-center md:min-h-screen min-h-full">
      <div className="w-full md:px-10 py-5 px-7">
        <div className="max-w-full w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 bg-slate-500">hello</div>

          {/* here is the seconf col for searching the city */}
          <div className="col-span-1 flex justify-center items-center">
            <div className="grid grid-cols-1">
              <Lottie
                animationData={Cloud}
                className="h-60 w-60 lg:w-70 lg:h-70 xl:w-90 xl:h-70 2xl:w-100 2xl:h-70"
              />

              <form className="max-w-full flex justify-center">
                <div className="relative flex items-center text-gray-500 focus-within:text-black">
                  <input
                    type="text"
                    name="city"
                    placeholder="Type City"
                    className="w-full lg:w-58 sm:w-full rounded-2xl p-1 mb-1 pl-2 pr-8 border-2 text-xs focus:outline-none focus:border-purple-300 focus:ring-purple-300"
                  />

                  <FaSearch
                    className="w-4 h-4 absolute right-2 pointer-events-none"
                    style={{ top: "45%", transform: "translateY(-50%)" }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
