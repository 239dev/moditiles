/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#9D6E48', // warm brown - primary brand color
        secondary: '#4A6262', // muted teal - secondary brand color
        accent: '#D2973B', // golden accent
        success: '#4CAF50', // green
        warning: '#FF9800', // orange
        error: '#F44336', // red
        'neutral-cream': '#F5F2ED', // light cream for backgrounds
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Raleway', 'sans-serif'],
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'hover': '0 10px 40px rgba(0, 0, 0, 0.1)',
      },
      height: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};