/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1244px'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        heebo: ["heebo", "sans-serif"]
      },
      screens: {
        'xsm': '420px',

        'sm': '575px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '992px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1200px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1400px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}
