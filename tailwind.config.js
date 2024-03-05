/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        akaya: ["Akaya Kanadaka"],
        Roboto: ["Roboto"],
      },
      focus: ["responsive", "hover", "focus"],
    },
  },
  plugins: [],
};
