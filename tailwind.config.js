export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        hero: '3.5rem',             // for big section titles like "Hi I'm Angellina"
        'section-title': '2.25rem', // for section headers like Skills, Projects
      },
      boxShadow: {
        glass: '0 4px 30px rgba(0, 0, 0, 0.1)', // for glassmorphism effect
      },
      backdropBlur: {
        xs: '2px', // very light blur for cards
      },
      colors: {
        card: 'rgba(255, 255, 255, 0.05)', // semi-transparent card background
      },
    },
  },
  plugins: [],
}
