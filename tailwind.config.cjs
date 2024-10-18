/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ['"Inter"', 'sans-serif'],
      display: ['"Epilogue"', 'serif'],
    },
    colors: {
      primary: "#FFE500",
      secondary: "#ecc94b",
      transparent: "transparent",
      current: "currentColor",
      slate: colors.slate,
      stone: colors.stone,
      blue: colors.blue,
      green: colors.green,
      dark: "#0B1215",
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    extend: {
      translate: ["dark"],
      animation: {
        'skew-scroll': 'skew-scroll 20s linear infinite',
      },
      backgroundImage: {
        'hero-image': "url('/img/hero.jpg')",
      },
    },
    keyframes: {
      'skew-scroll': {
        '0%': {
          transform: 'rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(0)',
        },
        '100%': {
          transform:
            'rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(-100%)',
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
