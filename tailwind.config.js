/** @type {import('tailwindcss').Config} */
export default {

    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],

  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
    },
    extend: {},
  },
  plugins: [],
}

