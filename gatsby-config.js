const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")

const { theme } = resolveConfig(tailwindConfig)

module.exports = {
  siteMetadata: {
    title: "Mina Thompson Portfolio",
    author: "Mina Thompson",
    description: "The artistic portfolio of me, Mina Thompson - bullet journalist, watercolor artist and photographer",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Mina Thompson",
        short_name: "Mina Thompson Portfolio",
        start_url: "/",
        icon: "static/icon.svg",
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/posts`,
        name: `posts`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
