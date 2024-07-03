/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          desaturated: "#5ba4a4",
          grayish: {
            light: {
              1: "#effafa",
              2: "#eef6f6",
            },
            dark: {
              1: "#7b8e8e",
              2: "#2c3a3a",
            },
          },
        },
      },
      padding: {
        small: "5px 8px 4px 8px",
      },
      backgroundImage: {
        desktop: "url(/images/bg-header-desktop.svg)",
        mobile: "url(/images/bg-header-mobile.svg)",
      },
    },
  },
};
 