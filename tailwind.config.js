module.exports = {
  purge: {
    enabled: true,
    content: ["./public/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        secondary: {
          100: "#e2e2d5",
          200: "#888883",
        },
      },
      fontFamily: {
        body: "Nunito",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
