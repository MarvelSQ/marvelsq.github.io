import { fontFamily } from "tailwindcss/defaultTheme";
import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      colors: {
        brand: {
          50: "#f5f7ff",
          100: "#e6ecff",
          200: "#cdd7ff",
          300: "#a5b8ff",
          400: "#7b8ffd",
          500: "#4f5cf5",
          600: "#3c45d8",
          700: "#2f36ab",
          800: "#262d83",
          900: "#222b68",
        },
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
      },
      boxShadow: {
        float: "0 20px 80px rgba(0,0,0,0.18)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
