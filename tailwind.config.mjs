/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#24293E",
        accent: "#4facfe", // Emerald Eye Blue
        gold: "#C5A059",
        paper: "#F7F5E6",
        ink: "#2D2D2D",
        "dark-bg": "#0D1117", // Deeper dark for Mizuki style
        "dark-card": "#161B22", // Card background in dark mode
        "dark-border": "#30363D",
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["'Courier Prime'", "monospace"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
