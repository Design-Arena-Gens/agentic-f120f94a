import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        brandBlue: '#4A90E2',
        sidebarBg: '#212529',
        sidebarActive: '#343A40',
        borderLight: '#EAECEF',
        grayBadge: '#DCDFE4',
        offPanel: '#F8F9FA',
        ink: '#212529',
        primaryPurple: '#8A63D2'
      }
    }
  },
  plugins: []
} satisfies Config
