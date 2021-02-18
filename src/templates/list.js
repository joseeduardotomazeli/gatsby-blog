import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
import Pagination from "../components/Pagination"

const List = ({ data, pageContext }) => {
  const { allMarkdownRemark } = data
  const { currentPage, numberOfPages } = pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === numberOfPages

  const previousPage = currentPage - 1 === 1 ? `/` : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

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

      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        previousPage={previousPage}
        nextPage={nextPage}
      />
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
