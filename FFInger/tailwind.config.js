import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // Add the aspect ratio plugin
    plugin(function ({ addUtilities, addComponents, e, config }) {
      const newUtilities = {
        '.aspect-w-1': {
          position: 'relative',
          paddingBottom: '100%',
        },
        '.aspect-w-4': {
          position: 'relative',
          paddingBottom: '75%',
        },
        '.aspect-h-1': {
          position: 'relative',
        },
        '.aspect-h-3': {
          position: 'relative',
        },
        '.aspect-h-4': {
          position: 'relative',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
}

export default config;
