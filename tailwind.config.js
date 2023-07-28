/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary1': '#010116',
      'primary2': '#050C29',
      'primary3': '#152238',
      'primary4': '#3D4861',
      'primary5': '#67728C',
      'primary6': '#C2CEEB',
      'primary7': '#03AEF4',
      'gray1': '#494848',
      'gray2': '#636363',
      'gray3': '#909090',
      'gray4': '#B4B4B4',
      'gray5': '#D4D4D4',
      'gray6': '#E6E6E6',
      'black': '#000000',
      'white': '#FFFFFF',
    },
    extend: {},
  },
  plugins: [],
};