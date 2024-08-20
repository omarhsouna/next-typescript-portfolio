import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-gradient': 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%)',
      },
      colors: {
        'gris-link': '#999999',
        'title':"#292929",
        'gris-section':'#f9f9f9',
        'yellow':'#fdd912',
        'date':'#b9b9b9',
        'error':'#d32f2f'
      },
      boxShadow: {
        'active-link': 'inset 0 -6px 0 #fdd912',
        'hover-link': 'inset 0 -14px 0 #fdd912',
        'header':"0 25px 50px rgba(0, 0, 0, 0.045)"
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '50%': { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
