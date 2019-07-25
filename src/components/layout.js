/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import SEO from "./seo"

const styles = {
  body: {
    fontFamily: "Helvetica, sans-serif",
    margin: `0 auto`,
    maxWidth: 960,
    padding: `0px 1.0875rem 1.45rem`,
    paddingTop: 0,
    backgroundColor: "red",
  },
}

const Layout = ({ children, title }) => {
  return (
    <>
      <div style={styles.body}>
        <main>
          <SEO title={title} />
          {children}
        </main>
        <footer>
          {"©"}
          {new Date().getFullYear()}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default Layout
