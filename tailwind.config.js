/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'my-image':"url(/cclbg1.jpg)",
      },
      grayscale: {
        50: '50%',
      },
      
    },
  },
  plugins: [],
}

