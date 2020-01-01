/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "./seo"
import Header from "./header"
import Nav from "./nav"
import Footer from "./footer"

import "../css/style.css"

const Layout = props => {
  const data = useStaticQuery(graphql`
    query SiteMetaQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <>
      <SEO title={props.tabTitle} />

      <div className="bg-blue-100 w-full md:w-8/12 mx-auto my-8">
        <Header siteTitle={data.site.siteMetadata.title} />
        <Nav />
        <main>{props.children}</main>
        <Footer siteAuthor={data.site.siteMetadata.author} />
      </div>
    </>
  )
}

export default Layout
