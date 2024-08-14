import { space } from 'postcss/lib/list'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'custom-image': "url('/kershintro.png')",
      },
      fontFamily:{
        excelorate: ['Excelorate', 'sans-serif'],
        talk: ['Talk', 'sans-serif'],
        endgraph: ['endgraph', 'sans-serif'],
        bros: ['Bros', 'sans-serif'],
        alias: ['Alias', 'sans-serif'],
        aurix : ['Aurix', 'sans-serif'],
        piedmont: ['Piedmont', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
export default config
