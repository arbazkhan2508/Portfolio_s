/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  boxShadow: {
    // 'custom': 'box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;',
  },
  theme: {
    extend: {
      borderGradientColors: {
        'pink-purple': ['#ED14C3', '#9747FF'],
      },
    },
  },
  plugins: [
    require('tailwindcss-border-gradient-radius'),
  ],
  customFilter: {
    'blur': 'backdrop-filter: blur(26.677560806274414px);',
  },
  fontSize: {
    xs: ".75rem",  // Extra small
    sm: ".875rem", // Small
    md: "1rem",   // Default
    lg: "1.125rem", // Large
    xl: "1.25rem",  // Extra large
    "2xl": "1.5rem", // 2x Large
    "3xl": "1.875rem", // 3x Large
    "4xl": "2.25rem",  // 4x Large
    "5xl": "3rem",     // 5x Large
  },
  fontFamily: {
    themeFont: "Lufga",
  },
}

