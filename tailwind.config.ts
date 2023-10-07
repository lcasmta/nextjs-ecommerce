import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        lightTheme: {

          "primary": "#efc4ac",

          "secondary": "#d3bbf7",

          "accent": "#42cc2c",

          "neutral": "#161523",

          "base-100": "#e6e5e6",

          "info": "#73b5e7",

          "success": "#4bd8c2",

          "warning": "#efa92e",

          "error": "#f46c80",
          
          "body": { "background-color": "#e3e6e6", },
        },
      },
    ],
  },
}
export default config
