module.exports = {
  purge: ['./index.html', './src/**/*'],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['"Inter"', 'sans-serif'],
      },
    },
    container: {
      // screens: {
      //   sm: '600px',
      //   md: '728px',
      //   lg: '1024px',
      //   xl: '1536px',
      //   '2xl': '1920px',
      // },
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
  },
  plugins: [],
};
// 1536px;
// 1280px;
// 1024px;
// 768px;
