import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const List = props => {
  const { allMarkdownRemark } = props.data

  return (
    <Layout>
      <SEO title="Home" />

      {allMarkdownRemark.edges.map(
        (
          {
            node: {
              fields: { slug },
              frontmatter: { background, category, date, title, description },
              timeToRead,
            },
          },
          index
        ) => (
          <PostItem
            key={index}
            slug={slug}
            background={background}
            category={category}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
          />
        )
      )}
    </Layout>
  )
}

export const postQuery = graphql`
  query PostsQuery($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
`

export default List
