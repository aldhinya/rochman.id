module.exports = {
  siteMetadata: {
    title: `Fadhilatur Rochman`,
    description: `Aldhi - Fadhilatur Rochman Blog.`,
    author: `Rochman`,
    siteUrl: `https://rochman.id`,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: `https://rochman.id`,
        sitemap: `https://rochman.id/sitemap.xml`,
        policy: [{ userAgent: `*`, allow: `/` }]
      }
    },
    `gatsby-plugin-google-analytics`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-109653692-6",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-nprogress`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `var(--link-color)`,
        showSpinner: true,
      },
    },
    `gatsby-plugin-page-progress`,
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        includePaths: [{ regex: "^/blog/" }],
        excludePaths: ["/blog/"],
        height: 3,
        prependToBody: false,
        color: `var(--link-color)`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // linkImagesToOriginal: false,
              backgroundColor: `transparent`,
              maxWidth: 970,
              withWebp: true,
              quality: 85,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-remove-generator`,
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fadhilatur Rochman`,
        short_name: `rochman.id`,
        start_url: `/`,
        icon: `src/images/fav.png`,
      },
    },
  ],
}