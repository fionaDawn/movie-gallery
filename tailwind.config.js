module.exports = {
  // remove unused styles in production
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '170': '170px'
      },
      width: {
        '115': '115px',
      }
    },
    colors: {
      "neutral-1": "#212121",
      "neutral-2": "#746A64",
      "neutral-3": "#757575",
      "neutral-4": "#DEDEDE",
      "neutral-5": "#FAFAFA",
      white: "#FFFFFF",
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
