module.exports = {
    siteMetadata: {
      title: `Pandas Eating Lots`,
    },
    plugins: [
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: "GatsbyJS",
          short_name: "GatsbyJS",
          start_url: "/",
          background_color: "#6b37bf",
          theme_color: "#6b37bf",
          // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
          // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
          display: "standalone",
          icon: "src/images/favicon.ico", // This path is relative to the root of the site.
        },
      },

      'gatsby-plugin-offline',

      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src/`,
        },
      },
      `gatsby-transformer-remark`,
    ],
  }