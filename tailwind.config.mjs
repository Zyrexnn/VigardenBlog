import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#1b2a49",
        accent: "#2e5c54",
        gold: "#b89947",
        paper: "#fdf6e3",
        ink: "#2D2D2D",
        "dark-bg": "#121e36",
        "dark-card": "#1b2a49",
        "dark-border": "#3e2b22",
        "post-blue": "#1b2a49",
        "violet-eye": "#4facfe",
        "seal-red": "#8B0000",
        wood: "#5c4033",
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["'Lora'", "'Courier Prime'", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
        typewriter: ["'Special Elite'", "'Courier Prime'", "monospace"],
      },
      backgroundImage: {
        'envelope-pattern': "repeating-linear-gradient(45deg, #C5A059 0, #C5A059 10px, transparent 10px, transparent 20px)",
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        'wax-stamp': {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '30%': { transform: 'scale(1.35) rotate(-8deg)' },
          '60%': { transform: 'scale(0.9) rotate(4deg)', boxShadow: '0 0 40px rgba(139,0,0,0.6)' },
          '100%': { transform: 'scale(1) rotate(0deg)', boxShadow: '0 0 0 rgba(139,0,0,0)' },
        },
        'petal-fall': {
          '0%': { transform: 'translateY(-10%) translateX(0) rotate(0deg)', opacity: '1' },
          '50%': { transform: 'translateY(50vh) translateX(30px) rotate(180deg)', opacity: '0.8' },
          '100%': { transform: 'translateY(110vh) translateX(-20px) rotate(360deg)', opacity: '0' },
        },
        'typewriter-cursor': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'letter-fadein': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'seal-crack': {
          '0%': { filter: 'brightness(1)', transform: 'scale(1)' },
          '50%': { filter: 'brightness(1.4)', transform: 'scale(1.1)' },
          '100%': { filter: 'brightness(1)', transform: 'scale(1)' },
        },
      },
      animation: {
        'wax-stamp': 'wax-stamp 0.6s ease-out',
        'petal-fall': 'petal-fall 4s ease-in-out infinite',
        'typewriter-cursor': 'typewriter-cursor 0.8s steps(1) infinite',
        'letter-fadein': 'letter-fadein 0.8s ease-out forwards',
        'seal-crack': 'seal-crack 0.4s ease-out',
      },
    },
  },
  plugins: [typography],
};
