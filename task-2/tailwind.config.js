/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "550px",
      // => @media (min-width: 640px) { ... }

      md: "1050px",
      // => @media (min-width: 768px) { ... }
    },
    plugins: [],
  },
}
