/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`);

module.exports = {
    siteMetadata: {
        title: "South Asian Queer Collective",
        description: "SAQC amplifies queer South Asian voices often silenced by white, cis-heteronormative stories within the mainstream.",
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
                name: "images",
                path: path.join(__dirname, `src`, `images`),
            },
            __key: "images",
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        'gatsby-plugin-image',
        `gatsby-plugin-react-helmet`,
        `gatsby-remark-images`,
    ],
}
