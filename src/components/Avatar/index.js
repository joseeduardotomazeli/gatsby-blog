import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Avatar = () => {
  const query = useStaticQuery(
    graphql`
      query AvatarQuery {
        profilePhoto: file(relativePath: { eq: "profile-photo.png" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  const { profilePhoto } = query

  return <Image fixed={profilePhoto.childImageSharp.fixed} />
}

export default Avatar
