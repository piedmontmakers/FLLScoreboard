/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // BIOGLOW season palette (from the FIRST BIOGLOW style guide)
        bioglow: {
          lime: '#C6DE94',   // PMS 365 C
          leaf: '#70A334',   // PMS 369 C
          forest: '#2C5535', // PMS 357 C
          glow: '#F0E973',   // PMS 3935 C
          ink: '#000000',    // Black 6 C
          // UI-only tints/shades derived from the palette
          mist: '#F1F7E4',   // light tint of lime for alternating rows
          deep: '#1C3822',   // darker shade of forest for page background
        },
      },
    },
  },
  plugins: [],
}
