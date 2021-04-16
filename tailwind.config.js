module.exports = {
  purge: {
    content: ['./public/**/*.html', './src/**/*.vue']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: {
          blue: "#2b3348"
        },
        pale: {
          yellow: "#e6d74f"
        },
        slamon: {
          pink: "#ff7373"
        },
        ombre: {
          blue: "#2e84d5"
        },
        dark:{
          rose:"#ce1b52"
        },
        green:{
          emeral:"#177972"
        },
        purple:{
          lavender:"#8a7fab"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: []
}