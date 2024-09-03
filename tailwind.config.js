/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'], // default sans font
        serif: ['Georgia', 'serif'],               // default serif font
        mono: ['Courier New', 'Courier', 'monospace'], // custom font stack
      },
    },
  },
  plugins: [],
}

