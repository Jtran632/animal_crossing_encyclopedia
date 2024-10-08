import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "xl": { "max": "1279px" },
      // => @media (max-width: 1279px) { ... }

      "lg": { "max": "1023px" },
      // => @media (max-width: 1023px) { ... }

      "md": { "max": "767px" },
      // => @media (max-width: 767px) { ... }

      "sm": { "max": "639px" },
      // => @media (max-width: 639px) { ... }
      "xs": { "max": "430px" },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
