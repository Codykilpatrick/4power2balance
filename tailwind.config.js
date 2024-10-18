// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          dark: '#0A0F2C',
        },
        nebula: {
          purple: '#3E2D5B',
        },
        starlight: {
          white: '#E0E3F2',
        },
        metallic: {
          grey: '#515A6B',
        },
        ionized: {
          blue: '#00BFFF',
        },
        crimson: {
          red: '#B22222',
        },
      },
    },
  },
  plugins: [],
}
