/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '91': '22.5rem',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, rgba(81,183,221,1) 7%, rgba(0,91,174,1) 100%)',
      },
      width: {
        'custom': '63%',
      },
      colors: {
        'custom-blue': 'rgb(81,183,221)',
        'accent-blue': '#3673aa',
        'hover-blue': '#204566'
      }
    },
  },
  plugins: [],
}