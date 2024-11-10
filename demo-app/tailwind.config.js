/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg-img': "url('/src/assets/bg-img.jpg')",
      },
      screens: {
        'md': '992px',  // Custom breakpoint for medium screens at 992px
      }
    }
  },
  plugins: [],
}
