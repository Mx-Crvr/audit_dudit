/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    screens: {
      'sm': '390px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
    colors: {
      black: '#16161D',
      white: '#F0F0F0',
      blue: '#1E90FF',
      darkblue: '#1E20FF',
      red: '#FF0000',
      gray: '#D1D5DB',
    }
  },
  plugins: [],
}

