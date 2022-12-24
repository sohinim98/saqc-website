/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */
import 'bootstrap/dist/css/bootstrap.min.css'
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import Helmet from "react-helmet"
import favicon from "../images/favicon.png"

const Layout = ({ children }) => {
  useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
          <Helmet>
              <title>Whatever</title>
              <meta property='og:image' content={ favicon } />
              <meta property='og:locale' content='en_US' />
              <meta property='og:type' content='website' />
              <meta property='og:title' content='South Asian Queer Collective' />
              <meta property='og:description' content="SAQC amplifies queer South Asian voices often silenced by white, cis-heteronormative stories within the mainstream." />
              <meta property='og:url' content='https://theysiqueers.ca' />
              <meta property='og:updated_time' content='2022-12-24' />
          </Helmet>
          <main>{children}</main>
          <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
              © {new Date().getFullYear()} &middot;
              {` `} SAQC
          </footer>
      </div>
    </>
  )
}

export default Layout
