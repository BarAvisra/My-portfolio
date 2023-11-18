/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Roboto", "sans-serif"],
      },
      colors: {
        darkBlue: "#22668D",
        lightBlue: "#8ECDDD",
        facebookColor: "#1877F2",
        gitColor: "#171515",
        linkedinColor: "#0A66C2",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #22668D, #8ECDDD)",
      },
    },
  },
  plugins: [],
};
