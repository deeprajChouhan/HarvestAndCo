import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        harvest: {
          green: '#2F5D3F',
          cream: '#F6F1E7',
          brown: '#7A5A3A',
          charcoal: '#2E2D2B',
          yellow: '#F5C84C',
          moss: '#3F6F4E'
        }
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'ui-sans-serif', 'system-ui'],
        body: ['var(--font-body)', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        card: '0 12px 30px rgba(46, 45, 43, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
