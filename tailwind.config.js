/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounceUp: {
          '0%, 100%': { transform: 'translateY(100%)', opacity: '0' },
          '50%': { transform: 'translateY(-10%)', opacity: '1' },
        },
        bounceDown: {
          '0%, 100%': { transform: 'translateY(-100%)', opacity: '0' },
          '50%': { transform: 'translateY(10%)', opacity: '1' },
        },
      },
      animation: {
        bounceUp: 'bounceUp 0.8s ease-out',
        bounceDown: 'bounceDown 0.8s ease-out',
      },
    },
  },
  plugins: [],
}
