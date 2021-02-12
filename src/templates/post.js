import React from "react"
import { graphql } from "gatsby"

const Post = post => {
  const { markdownRemark } = post.data

  return (
    <>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </>
  )
}

export const postQuery = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default Post
