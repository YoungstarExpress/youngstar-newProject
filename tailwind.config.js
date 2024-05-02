/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    nextui({
      prefix: "nextui",
      addCommonColors: false,
      defaultTheme: "light",
      defaultExtendTheme: "light",
      layout: {},
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            primary: {
              100: "#D3FBC9",
              200: "#9FF794",
              300: "#5EE95D",
              400: "#35D442",
              500: "#00B821",
              600: "#009E2B",
              700: "#008430",
              800: "#006A31",
              900: "#005831",
              DEFAULT: "#00B821",
            },
            // secondary: {
            // },
            content1: {
              DEFAULT: "#FFFFFF"
            },
            content2: {
              DEFAULT: "#D1F5D6"
            },

          }, // light theme colors
        },
      },
    })
  ],
};