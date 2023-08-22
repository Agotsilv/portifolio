/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'h-gray-500': '#737994',
        'h-blue-500': '#8caaee',
        'h-blue-900': '#303446',
        't-blueCV': '#01002a'
      },
      width: {
        120: '30rem',
        125: '31.25rem',
      },
      height: {
        125: '31.25rem',
      }
    }
  },
  plugins: [],
}
