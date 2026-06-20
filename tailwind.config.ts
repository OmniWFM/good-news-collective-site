import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx,jjs,jsx}',
    './components/**/*.{ts,tsx,jjs,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {'500': '#F59500', '600': '#E08500'},
        neutral: {'900': '#1a1a1a'},
      },
      fontFamily:;{
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;