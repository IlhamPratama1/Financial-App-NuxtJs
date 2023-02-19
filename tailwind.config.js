/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: "Manrope",
        quicksand: "Quicksand",
      },
      colors: {
        "gray-m": "#F6F4F5",
        "gray-s": "#A7A6A9",
        "black-m": "#14121E",
        "black-s": "#171719",
        "yellow-m": "#F7D3A1",
        "white-m": "#F6F6F6",
        "white-s": "#F9F8FD",
        "white-t": "#FCFBFC",
        "orange-m": "#FF7A00",
        "green-m": "#EBFDEE",
        "green-s": "#9DC9A8",
        "red-m": "#FFEFE7",
        "red-s": "#DDAF98",
        "blue-m": "#E8F0FB",
        "blue-s": "#BAC4DC",
      },
    },
  },
  plugins: [],
};
