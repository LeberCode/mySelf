module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'meSport': "url('./assets/images/meSport.jpeg')",
        'heroForHeader': "url('./assets/images/groot.jpg')",
        'meProf': "url('./assets/images/meProf.jpg')",
        'myShadow': "url('./assets/images/myShadow2.jpg')"
      },
      colors: {
        'black': "#000000",
        'white': "#FFFFFF",
        'signal': "#091F5C", // Signalfarbe
        'secondBackground': "#EAEAEA", // 2. Hintergrundfarbe
      }
    },
  },
  plugins: [],
}