/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent:'transparent',
      white:{
        DEFAULT: '#ffffff'
      },
      black:{
        DEFAULT: '#000000',
        100: '#E4E4E4',
        200: '#060108'
      },
      gray:{
        DEFAULT: '#707070',
        100: '#141414',
        200: '#292929',
      },
      blue:{
        100: '#01112A',
        200: '#03C3FF',
      }
    },
    fontFamily: {
      primary_Variable: ['Barlow', 'sans-serif'],
      aftaSerifThin_regular: ['aftaSerifThin-regular'],
      aftaSerifThin_italic: ['aftaSerifThin-italic'],
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '1xl': '1.40625rem',
      '2xl': '2.7315rem',
      '3xl': '3.2535rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '6.15744rem',
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}