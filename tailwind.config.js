/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: "'Playfair Display', serif",
        montserrat: "'Montserrat', sans-serif",
      },
      backgroundColor: {
        ocre: "#CE875B",
        terracota: "#AE705B",
        quentao: "#B48E50",
        sepia: "#97754F",
        white: "#F7F8FA",
        black: "#020202",
      },
      textColor: {
        ocre: "#CE875B",
        terracota: "#AE705B",
        quentao: "#B48E50",
        sepia: "#97754F",
        white: "#F7F8FA",
        black: "#020202",
      },
      backgroundSize: {
        defaultSize: "100% 100%",
      },
      fontSize: {
        p: "12px",
        p2: "16px",
        h5: "21px",
        h4: "28px",
        h3: "37px",
        h2: "49px",
        h1: "65px",
        title: "85px",
      },
      borderColor: {
        sepia: "#97754F",
        quentao: "#B48E50",
      },
    },
  },
  plugins: [],
};
