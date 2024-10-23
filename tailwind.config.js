/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        seagreen: {
          "100": "#21673c",
          "200": "#1f673c",
        },
        khaki: {
          "100": "#f2dd82",
          "200": "#f6d877",
          "300": "#f6d674",
          "400": "rgba(242, 221, 130, 0.6)",
        },
        black: "#000",
        white: "#fff",
        gold: "#e7c018",
        gray: "rgba(0, 0, 0, 0.26)",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        ntr: "NTR",
        inter: "Inter",
        roboto: "Roboto",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
        "21xl": "40px",
        "131xl": "150px",
        "8xs": "5px",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      xl: "20px",
      xs: "12px",
      "21xl": "40px",
      "31xl": "50px",
      "11xl": "30px",
      sm: "14px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
