import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#007BFF",
          secondary: "#57626f",
          accent: "#BBD344",
          neutral: "#2a323c",
          "base-100": "#141414",
          "base-200": "#1F1F1F",
          "base-300": "#333333",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#AC2C1C",
        },
      },
    ],
  },
  plugins: [daisyui],
};
export default config;
