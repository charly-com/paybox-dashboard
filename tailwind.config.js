/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const customUtilities = {
        '.custom-line': {
          width: '224px',
          height: '0.4px',
          opacity: '0.2',
          background: '#FFF',
        },
      };
      addUtilities(customUtilities, ['before']);
    },
  ],
}

