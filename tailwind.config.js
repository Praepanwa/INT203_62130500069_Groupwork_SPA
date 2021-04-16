module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        dark:{blue:"#2b3348"}
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
