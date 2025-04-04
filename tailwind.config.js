/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            color: theme("colors.gray.300"),
            a: { color: theme("colors.cyan.400"), textDecoration: "underline" },
            strong: { color: theme("colors.white") },
            h1: { color: theme("colors.white"), fontSize: "1.875rem" },
            h2: { color: theme("colors.white"), fontSize: "1.5rem" },
            h3: { color: theme("colors.white"), fontSize: "1.25rem" },
            code: { color: theme("colors.pink.400") },
            blockquote: {
              color: theme("colors.gray.400"),
              borderLeftColor: theme("colors.gray.600"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
}