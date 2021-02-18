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
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              background
              category
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              title
              description
            }
            timeToRead
          }
        }
      }
    }
  `)

  const posts = postsQuery.data.allMarkdownRemark.edges

  posts.forEach(post => {
    const { slug } = post.node.fields

    createPage({
      path: slug,
      component: path.resolve("src", "templates", "post.js"),
      context: {
        slug,
      },
    })
  })

  const postsPerPage = 6
  const numberOfPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numberOfPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/` : `/page/${index + 1}`,
      component: path.resolve("src", "templates", "list.js"),
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        numberOfPages,
        currentPage: index + 1,
      },
    })
  })
}
