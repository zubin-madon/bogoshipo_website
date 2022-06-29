module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      dark: "#181818",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["luxury"],
  },
};
