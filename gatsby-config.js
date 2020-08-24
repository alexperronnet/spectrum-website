module.exports = {
  siteMetadata: {
    title      : "Spectrum theme and icon set for VS Code",
    description: "A clean dark theme and dark/light low contrast file icon set for VS Code"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        postCssPlugins: [
          require("autoprefixer"),
          require("tailwindcss")
        ]
      }
    }
  ]
}
