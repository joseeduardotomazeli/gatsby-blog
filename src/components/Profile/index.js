import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
    <div className="Profile-wrapper">
      <h1>{siteMetadata.title}</h1>
      <h2>{siteMetadata.position}</h2>
      <p>{siteMetadata.description}</p>
    </div>
  )
}

export default Profile
