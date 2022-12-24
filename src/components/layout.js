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
import favicon from "../images/favicon.png"
import Helmet from "react-helmet"

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
              <meta property='og:image' content={ favicon } />
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
