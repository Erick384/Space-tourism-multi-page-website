/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        beige: '#f5f5dc',
      },
      spacing: {
        '72': '300px',
      },
    },
  },
  plugins: [],
}

