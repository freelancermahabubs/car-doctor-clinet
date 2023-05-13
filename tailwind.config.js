/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ed8925",

          secondary: "#2c73c9",

          accent: "#fcc4df",

          neutral: "#191820",

          "base-100": "#FFFFFF",

          info: "#5D73D5",

          success: "#21D492",

          warning: "#A2750B",

          error: "#EB6F82",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
