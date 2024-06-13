module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        meSport: "url('./assets/images/meSport.jpeg')",
        heroForHeader: "url('./assets/images/groot.jpg')",
        heroForMobile: "url('./assets/images/grootMobile.jpg')",
        meProf: "url('./assets/images/meProf.jpg')",
        myShadow: "url('./assets/images/myShadow2.jpg')",
        meTitel: "url('./assets/images/meTitel.jpg')",
      },
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        signal: "#091F5C", // Signalfarbe
        secondBackground: "#EAEAEA", // 2. Hintergrundfarbe
      },
      boxShadow: {
        customWhite: "0px 0px 10px 5px rgba(255, 255, 255, 0.9)",
        secondBackground: "0px 0px 10px 5px #EAEAEA",
      },
    },
    screens: {
      lg: "1024px",
      xl: "1280px",
      "4k": "2560px",
    },
  },
  plugins: [],
};
