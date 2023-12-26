const defaultTheme = require('tailwindcss/defaultTheme');
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main-bg": "url('/bg_white_img.jpg)",
      },
      fontFamily: {
        bodyFont: ['Playfair Display', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        bodycolor:"#fbfaf7",
        bgLight: "#1010100d",
        darkText: "#a5a5a5",
        dark_gray: "#999",
        btn_darker: "222",
        textNegro: "000",
      }
    },
  },
  plugins: [],
}
export default config
