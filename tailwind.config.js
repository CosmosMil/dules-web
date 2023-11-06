/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backdropFilter: ["hover", "focus"],
    },
    screens: {
      'sm': '570px',
      'md': '675px',
      'lg': '950px',
      'xl': '1200px',
    

    }
  },
  plugins: [],
};
