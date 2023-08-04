/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'bluegray': {
          100: "#3B4662",
          200: "#2B385A",
          300: "#2C344A",
          400: "#374056",
          500: "#2C3140",
          600: "#232732",
          700: "#1D1F26",
          800: "#15181F"
        }
      }
    },
  },
  plugins: [],
}
