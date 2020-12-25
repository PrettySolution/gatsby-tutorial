import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  // This is not perfect solution. Try to re-consider this.
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
      />
      <h1>Hello.</h1>
      <h2>I am Vasyl</h2>
      <p>
        Need a developer? <Link to="/contact/">Contact me.</Link>
      </p>
    </Layout>
  )
}
export default IndexPage
