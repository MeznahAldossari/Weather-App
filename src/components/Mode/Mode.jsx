import React from "react";
import { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Mode = () => {
  const [mode, setMode] = useState(null);

  useEffect(() => {
    if (window.matchMedia("prefer-color-scheme: dark").matches) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  const handlMode = () => {
    console.log(mode);
    setMode(mode === "dark" ? "light" : "dark");
  };
  return (
    <div>
      <button onClick={handlMode}>
        {mode === "dark" ? <MdOutlineLightMode /> : <MdDarkMode />}
      </button>
    </div>
  );
};

export default Mode;
