import React from "react"
import Helmet from "react-helmet"
import {graphql, useStaticQuery} from "gatsby"

const Metas = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const {title, description} = data.site.siteMetadata

  return (
    <Helmet>
      <html lang="en" />
      <meta name="description" content={description} />
      <title>{title}</title>
    </Helmet>
  )
}

export default Metas
