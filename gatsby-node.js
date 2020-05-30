const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const { createRedirect } = actions
    const blogPost = path.resolve(`./src/templates/blog-post-detail.js`)
    const tagPage = path.resolve(`./src/templates/blog-tags-page.js`)
    const tagTemplate = path.resolve(`./src/templates/blog-tags-detail.js`)
    const result = await graphql(
        `
      {
        postsRemark: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
              title
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
    `
    )

    if (result.errors) {
        throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.postsRemark.edges
    posts.forEach((post, index) => {
        const previous = index === posts.length - 1 ? null : posts[index + 1].node
        const next = index === 0 ? null : posts[index - 1].node
        createPage({
            path: `/blog${post.node.fields.slug}`,
            component: blogPost,
            context: {
                slug: post.node.fields.slug,
                previous,
                next,
            },
        })
    })

    createPage({
        path: `/blog/tags`,
        component: tagPage,
    })

    // Extract tag data from query
    const tags = result.data.tagsGroup.group
    tags.forEach(tag => {
        createPage({
            path: `/blog/tags/${_.kebabCase(tag.fieldValue)}/`,
            component: tagTemplate,
            context: {
                tag: tag.fieldValue,
            },
        })
        createRedirect({
            fromPath: `/tags/${_.kebabCase(tag.fieldValue)}/`,
            toPath: `/blog/tags/${_.kebabCase(tag.fieldValue)}/`,
            redirectInBrowser: true,
            isPermanent: true
        })
    })
    createRedirect({
        fromPath: `/tags/`,
        toPath: `/blog/tags/`,
        redirectInBrowser: true,
        isPermanent: true
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}
