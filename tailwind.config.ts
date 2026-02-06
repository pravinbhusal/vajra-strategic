import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/atoms/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/molecules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/organisms/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vajra: {
          void: '#181A2F',     // Deepest Navy
          dusk: '#242E49',     // Secondary Navy
          slate: '#37415C',    // Borders/Muted text
          peach: '#FDA481',    // Primary highlight
          crimson: '#B4182D',  // Heritage Red
          heart: '#54162B',    // Deep Maroon
        }
      },
      fontFamily: {
        sans: ['"SN Pro"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;