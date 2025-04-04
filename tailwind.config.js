/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0056b3",    // Azul escuro do logotipo
        secondary: "#00a0e9",  // Azul claro do logotipo
        accent: "#ff6b6b",     // Cor de destaque para elementos de ação
        dark: "#333333",
        light: "#f8f9fa"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}