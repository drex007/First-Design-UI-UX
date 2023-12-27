/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mn': '900px',
      // => @media (min-width: 900px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "primary": '#050133',
        "primary-shadow": '#3E7EEB',
        "primary-button": '#7167ED',
        "primary-card":"#0E0949"
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        spacegrotesk: ["Space Grotesk", "sans-serif"],
        Montserrat: ["Montserrat"],
        Orbitron: ["Orbitron"],
        irish: ["Irish Grover"]

      },
    },
  },
  plugins: [],
}

