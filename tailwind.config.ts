import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#faf6ee",
        charcoal: "#2b2622",
        forest: "#3f4b34",
        sage: "#7c8c66",
        tan: "#dcc9a3",
        clay: "#b5502f",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        serif: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"],
        display: ["'Playfair Display'", "Georgia", "serif"],
        script: ["'Caveat'", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
