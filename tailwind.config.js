/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      InterTight: ["Inter Tight", "sans-serif"],
    },
    colors: {
      ...colors,
      transparent: "transparent",
      Mneutral_900: "rgb(26 26 26)",
      Mneutral_800: "rgb(38 38 38)",
      Mneutral_700: "rgb(64 64 64)",
      Mneutral_600: "rgb(82 82 82)",
      Mneutral_500: "rgb(115 115 115)",
      Mneutral_400: "rgb(163 163 163)",
      Mneutral_300: "rgb(212 212 212)",
      Mneutral_200: "rgb(229 229 229)",
      Mneutral_100: "rgb(245 245 245)",
      Mneutral_50: "rgb(250 250 250)",
      Mdefault_teal: "rgb(48 176 199)",
      Mdefault_purple: "rgb(175 82 222)",
      Mdefault_indigo: "rgb(88 86 214)",
      Mdefault_green: "rgb(52 199 89)",
      Mdefault_yellow: "rgb(255 204 0)",
      Mdefault_orange: "rgb(255 149 0)",
      Mdefault_red: "rgb(255 59 48)",
      Mdefault_blue: "rgb(0 122 255)",
      Mbase_black: "rgb(0 0 0)",
      Mbase_white: "rgb(255 255 255)",
    },
    screens: {
      xxs: "375px",
      xx: "425px",
      ss: "480px",
      xs: "576px",
      xl1440: "1440px",
      maxW1440H620: { raw: "(max-width: 1440px) and (max-height: 620px)" },
      minH800: { raw: "(min-height: 800px)" },
      minH900: { raw: "(min-height: 900px)" },
      minW1600: { raw: "(min-width: 1600px)" },
      minW1700: { raw: "(min-width: 1700px)" },
      minW2000: { raw: "(min-width: 2000px)" },
      minW2100: { raw: "(min-width: 2100px)" },
      minW2400: { raw: "(min-width: 2400px)" },
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
