import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary-color)',
          50: 'var(--primary-color)',
          100: 'var(--primary-color)',
          200: 'var(--primary-color)',
          300: 'var(--primary-color)',
          400: 'var(--primary-color)',
          500: 'var(--primary-color)',
          600: 'var(--primary-color)',
          700: 'var(--primary-color)',
          800: 'var(--primary-color)',
          900: 'var(--primary-color)',
        },
        accent: {
          DEFAULT: 'var(--accent-color)',
          50: 'var(--accent-color)',
          100: 'var(--accent-color)',
          200: 'var(--accent-color)',
          300: 'var(--accent-color)',
          400: 'var(--accent-color)',
          500: 'var(--accent-color)',
          600: 'var(--accent-color)',
          700: 'var(--accent-color)',
          800: 'var(--accent-color)',
          900: 'var(--accent-color)',
        },
        pastel: {
          DEFAULT: 'var(--pastel-color)',
          50: 'var(--pastel-color)',
          100: 'var(--pastel-color)',
          200: 'var(--pastel-color)',
          300: 'var(--pastel-color)',
          400: 'var(--pastel-color)',
          500: 'var(--pastel-color)',
          600: 'var(--pastel-color)',
          700: 'var(--pastel-color)',
          800: 'var(--pastel-color)',
          900: 'var(--pastel-color)',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-sm': '0 4px 16px 0 rgba(31, 38, 135, 0.2)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        'glass-border': 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              color: 'inherit',
              textDecoration: 'none',
            },
            h1: {
              color: 'inherit',
            },
            h2: {
              color: 'inherit',
            },
            h3: {
              color: 'inherit',
            },
            h4: {
              color: 'inherit',
            },
            strong: {
              color: 'inherit',
            },
            code: {
              color: 'inherit',
            },
            pre: {
              color: 'inherit',
            },
            blockquote: {
              color: 'inherit',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
export default config; 