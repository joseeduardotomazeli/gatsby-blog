const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const filePath = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    const slug = filePath.slice(12).slice(0, -1)

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postsQuery = await graphql(`
    query PostsQuery {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  postsQuery.data.allMarkdownRemark.edges.forEach(posts => {
    const { slug } = posts.node.fields

    createPage({
      path: slug,
      component: path.resolve("src", "templates", "post.js"),
      context: {
        slug,
      },
    })
  })
}
