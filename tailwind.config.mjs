/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: "#24293E",
        accent: "#4facfe",
        gold: "#C5A059",
        paper: "#F7F5E6",
        ink: "#2D2D2D",
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["'Courier Prime'", "monospace"],
      },
    },
  },
  plugins: [],
};
