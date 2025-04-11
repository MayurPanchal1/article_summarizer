/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'display': ['Space Grotesk', 'sans-serif'],  // Modern display font
        'body': ['Inter', 'sans-serif'],             // Clean, modern body font
        'mono': ['JetBrains Mono', 'monospace'],     // Modern monospace font
        'accent': ['Outfit', 'sans-serif'],          // Modern accent font
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'dark-primary': '#0F172A',    // Deep blue-black background
        'dark-secondary': '#1E293B',  // Slightly lighter background for cards
        'accent-primary': '#6366F1',  // Indigo accent
        'accent-secondary': '#818CF8', // Lighter indigo
        'text-primary': '#E2E8F0',    // Light gray text
        'text-secondary': '#94A3B8',  // Darker gray text
        'neon-glow': '#4F46E5',      // Neon glow effect color
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.neon-glow), 0 0 20px theme(colors.neon-glow)',
        'neon-lg': '0 0 10px theme(colors.neon-glow), 0 0 40px theme(colors.neon-glow)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
