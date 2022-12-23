/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`);

module.exports = {
    siteMetadata: {
        title: "SAQC",
        author: "Sohini Mukherjee on behalf of SAQC",
        url: "https://theysiqueers.ca/"
    },
    plugins: [
        {
            resolve: "@rafaelquintanilha/gatsby-theme-countdown",
            options: {
                basePath: "/",
                targetDate: "2023-01-12 12:00:00",
                mainHeader: " ",
                secondaryHeader: " ",
                hideGithubButton: true,
                hideWhatsappShareButton: true,
                hideTwitterShareButton: true,
                hideFacebookShareButton: true
            }
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/favicon.png"
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: path.join(__dirname, `src`, `images`),
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`
    ],
}
