/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* pathPrefix: "/", */
  /* Your site config here */
    siteMetadata: {
        title: `Pandas Eating lots`,
    },

    plugins: [
        `gatsby-plugin-emotion`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
],
}
