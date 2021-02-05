import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

import Avatar from "../Avatar"

const Profile = () => {
  const query = useStaticQuery(graphql`
    query Query {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `)

  const {
    site: { siteMetadata },
  } = query

  return (
    <S.ProfileWrapper>
      <S.ProfileLink to="/">
        <Avatar />

        <S.ProfileAuthor>
          {siteMetadata.title}
          <S.ProfilePosition>{siteMetadata.position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>

      <S.ProfileDescription>{siteMetadata.description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile
