const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    enable : true,
    content: ["./src/**/*.js", "./src/**/*.jsx"],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        mono: ["Roboto Mono", ...defaultTheme.fontFamily.mono]
      },
      colors: {
        gray: {
          "100": "#B8BFCE",
          "200": "#AFB6C4",
          "300": "#A5ACBA",
          "400": "#9299A6",
          "500": "#6B727D",
          "600": "#444C55",
          "700": "#313941",
          "800": "#272F37",
          "900": "#1D252C",
        }
      }
    }
  }
}
