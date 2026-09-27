/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'canvas': '#15221B',
          'cognac': '#8E4D26',
          'cream': '#FBF8F1',
          'twilight': '#2D3934',
          'harvest': '#D4A346',
          'muted': '#8C9A91',
          'border': 'rgba(212, 163, 70, 0.22)'
        }
      },
      fontFamily: {
        'display': ['Bodoni Moda', 'serif'],
        'editorial': ['Lora', 'serif'],
        'body': ['Jost', 'sans-serif']
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      }
    },
  },
  plugins: [],
}
