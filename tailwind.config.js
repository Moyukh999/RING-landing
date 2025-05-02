/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          950: '#0a0a13',
          900: '#12121f',
          800: '#1c1c2e',
          700: '#2d2d46',
        },
        purple: {
          500: '#8A63FF',
          600: '#7045FF',
          700: '#5928FF',
        },
        blue: {
          500: '#4F8DFF',
          600: '#367AFF',
          700: '#1E66FF',
        }
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
      },
      boxShadow: {
        'purple-glow': '0 0 30px -5px rgba(138, 99, 255, 0.3)',
      },
    },
  },
  plugins: [],
};