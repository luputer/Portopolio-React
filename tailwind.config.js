module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // extend: {
    //   colors: {
    //     gradientLeftToRight: {
    //       start: '#3498db',
    //       end: '#2ecc71',
    //     },
    //     primary: {
    //       start: '#3498db',
    //       end: '#8e44ad',
    //     },
    //   },
    //   backgroundImage: theme => ({
    //     'gradient-left-to-right': `linear-gradient(to right, ${theme('colors.gradientLeftToRight.start')}, ${theme('colors.gradientLeftToRight.end')})`,
    //     'primary-color': `linear-gradient(180deg, ${theme('colors.primary.start')}, ${theme('colors.primary.end')})`,
    //   }),
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};