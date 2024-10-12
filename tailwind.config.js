/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-red": "#b91c1c",
      },
      fontFamily: {
        loura: ["Loura", "sans-serif"],
        haext: ["Haext", "sans-serif"],
        jotunheim: ["Jotunheim", "sans-serif"],
        noatun: ["Noatun", "sans-serif"],
      },
    },
  },
  darkMode: "media",
  plugins: [require("tailwindcss-animated")],
};
