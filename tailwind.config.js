import flowbite from "flowbite-react/tailwind";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        'inter': ["Inter", "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      },
      colors: {
        sidebar: {
          light: "#1F2A37",
          dark: "#0E131A",
        },
        "accent-blue": {
          DEFAULT: "#0081BC",
          one: "#0081BC",
          two: "#67B3D6",
          three: "#183B58",
          four: "#0C2841",
          five: "#031421",
          six: "#182633",
          seven: "#004987",
          eight: "#CCDAE7",
        },
        "accent-green": {
          DEFAULT: "#00C18C",
          one: "#00C18C",
          two: "#00DB9F",
          three: "#009169",
          four: "#00C18C",
        },
        "accent-grey": {
          DEFAULT: "#5D676F",
          one: "#5D676F",
          two: "#808C97",
          three: "#F7F7F7",
          four: "#CECECE",
          five: "#DCDCDC",
        },
        "brown-one": "#7E4B00",
        "orange-one": "#FFB600",
        "pale-yellow": "#FFF8EB",
        "white-white": "#FFFFFF",
        "milk-white": "#FCFCFC",
        "pale-blue": "#F2F8FB",
        "primary-blue": "#004987",
        "primary-gold": "#FFB600",
        "secondary-blue": "#67B3D6",
        "accent-black-one": "#182633",
      },
      spacing: {
        sidebar: '250px', // NOTE: magic number, coming from the Figma design
        topnavbar: '84px', // NOTE: magic number, coming from the Figma design
      },
      screens: {
        'sm': '640px', // => @media (min-width: 640px) { ... }
        'md': '768px', // => @media (min-width: 768px) { ... }
        'lg': '1024px', // => @media (min-width: 1024px) { ... }
        'xl': '1280px', // => @media (min-width: 1280px) { ... }
        '2xl': '1536px', // => @media (min-width: 1536px) { ... }
      }
    },
  },
  // NOTE: @tailwindcss/typography is required for .prose (blog-like textual content)
  plugins: [require('@tailwindcss/typography'), flowbite.plugin()],
};
