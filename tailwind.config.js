/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
  ],
  theme: {
  //   screens: {
  //   'sm': '576px',
  //   // => @media (min-width: 576px) { ... }

  //   'md': '960px',
  //   // => @media (min-width: 960px) { ... }

  //   'lg': '1440px',
  //   // => @media (min-width: 1440px) { ... }
  // },
  // colors:{
  //   golden:"#BE9F56",
  // },
  screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  }
  
  },
  plugins: [],
}