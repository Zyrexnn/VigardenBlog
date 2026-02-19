import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#1A202C", // Dark Slate (Legacy/Fallback)
        accent: "#00563B", // Emerald Green (Violet's Brooch)
        gold: "#C5A059", // Deep Gold (Harp/Metalwork)
        paper: "#F5F5DC", // Beige/Parchment (Letters)
        ink: "#2D2D2D", // Typewriter Ink
        "dark-bg": "#0B0E14", // Deep Navy (Night Sky)
        "dark-card": "#151922", // Card background
        "dark-border": "#2A303C",
        "post-blue": "#2C3E50", // CH Postal Uniform Blue
        "violet-eye": "#4facfe", // Bright Blue (Eyes)
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["'Lora'", "'Courier Prime'", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        'envelope-pattern': "repeating-linear-gradient(45deg, #C5A059 0, #C5A059 10px, transparent 10px, transparent 20px)",
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [typography],
};
