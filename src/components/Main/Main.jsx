import React from "react";
import Main_Animations from "@/assets/Main_Animations.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const navigate = useNavigate();
  return (
    // md:px-10 py-5 px-7
    <div className="flex justify-center items-center md:min-h-screen min-h-full">
      <div className="w-full md:px-10 py-5 px-7">
        <div className="max-w-full w-full mx-auto grid md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              className="md:text-4xl sm:text-3xl text-2xl font-bold py-2"
            >
              Manage the Weathers
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              className="md:text-2xl text-xl "
            >
              Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
              euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras
              consequat.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              className="bg-[#ffe600] md:w-[200px] sm:w-[150px] w-[200px]  rounded-[30px] font-medium my-6 py-3 text-black"
              onClick={() => navigate("Weather")}
            >
              Get Started
            </motion.button>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <Lottie animationData={Main_Animations} />
          </motion.div>
          {/* <Lottie animationData={Main_Animations} /> */}
        </div>
      </div>
    </div>
  );
};

export default Main;
