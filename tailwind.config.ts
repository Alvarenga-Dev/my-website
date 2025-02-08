import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['DMSans', 'sans-serif']
      },
      colors: {
        primary: 'rgb(var(--primary))',

        'background-primary': 'rgb(var(--bg-primary))',
        'background-secondary': 'rgb(var(--bg-secondary))',
        'background-tertiary': 'rgb(var(--bg-tertiary))',
        'background-quaternary': 'rgb(var(--bg-quaternary))',

        'white-500': 'rgb(var(--white-500))',
        'white-400': 'rgb(var(--white-400))',
        'white-300': 'rgb(var(--white-300))',
        'white-200': 'rgb(var(--white-200))',
        'white-100': 'rgb(var(--white-100))',

        'gray-500': 'rgb(var(--gray-500))',
      },
      container: {
        // you can configure the container to be centered
        center: true,
  
        // or have default horizontal padding
        padding: '1rem',
  
        // default breakpoints but with 40px removed
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1496px',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
