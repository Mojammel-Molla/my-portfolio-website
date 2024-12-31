/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2', // Main theme color
        secondary: '#50E3C2', // Accent color
        background: '#F5F7FA', // Background color
        text: '#333333', // Text color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Modern font for clean design
        heading: ['Poppins', 'sans-serif'], // Stylish font for headings
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        portfolio: {
          primary: '#4A90E2',
          secondary: '#50E3C2',
          accent: '#F9A825',
          neutral: '#333333',
          'base-100': '#F5F7FA', // Background
          'base-content': '#333333', // Text
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
  },
};
