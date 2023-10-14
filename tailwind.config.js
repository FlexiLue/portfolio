/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/*.md", "./layouts/**/*.html", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter']
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1024px',
        '2xl': '1024px',
      }
    },
  },
  plugins: [],
}

