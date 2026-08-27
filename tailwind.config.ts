import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Muted terracotta accent — restrained, food/interior-inspired,
        // not a saturated "AI gradient" orange.
        brand: {
          50: "#fbf1ea",
          100: "#f3ddcd",
          200: "#e6bb9d",
          300: "#d6976f",
          400: "#c1754c",
          500: "#a8562f", // primary accent
          600: "#8f4527",
          700: "#733722",
          800: "#5b2c1c",
          900: "#452216",
        },
        // Warm neutral scale for backgrounds and surfaces
        sand: {
          50: "#fffdf9",
          100: "#f7f2e9",
          200: "#f0e8d8",
          300: "#e6dac2",
          400: "#d8c8a8",
        },
        // Deep espresso for text
        espresso: {
          400: "#6b5d52",
          500: "#544539",
          600: "#3d322a",
          700: "#2b211b",
          800: "#1e1712",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
        "slide-up": "slideUp 0.4s ease-out",
        "slide-in-right": "slideInRight 0.25s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
