import React from "react"
import { graphql } from "gatsby"

import * as S from "../components/Post/styled"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Post = ({ data }) => {
  const { markdownRemark } = data

  return (
    <Layout>
      <SEO title={markdownRemark.frontmatter.title} />

      <S.PostHeader>
        <S.PostDate>
          {markdownRemark.frontmatter.date} • {markdownRemark.timeToRead} min de
          leitura
        </S.PostDate>

        <S.PostTitle>{markdownRemark.frontmatter.title}</S.PostTitle>
        <S.PostDescription>
          {markdownRemark.frontmatter.description}
        </S.PostDescription>
      </S.PostHeader>

      <S.PostMain dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </Layout>
  )
}

export const postQuery = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        title
        description
      }
      timeToRead
      html
    }
  }
`

export default Post
