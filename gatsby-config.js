const { linkResolver } = require("./config/prismic/link-resolver");

require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Skypoint`,
    siteUrl: `https://skypoint.com.au`
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        linkResolver: (doc) => linkResolver(doc),
      }
    },
    {
      resolve: "gatsby-plugin-prismic-previews",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: '/',
        background_color: '#0054a8',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: './src/images/icon-512x512.png',
      }
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -135,
        duration: 300
      }
    },
    {
    resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Poppins`,
            file: `https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Roboto:wght@300;400;500;700&display=swap`,
          },
        ],
      }
    }
  ]
}
