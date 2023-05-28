import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: {
        light: "#A7CCEA",
        dark: "#3D698C",
      },
      black: {
        btn: "#292F37",
        container: "#202020",
        background: "#191919",
      },
      green: "#4D7944",
      text: {
        grey: "#E5E5E5",
        white: "#FFFFFF",
      },
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
