/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import SEO from "./seo";

const Layout = ({ children, title }) => {
  return (
    <>
      <div className="mainColumn">
        <main>
          <SEO title={title} />
          {children}
        </main>
        <footer className="footer">
          {"©  "}
          {new Date().getFullYear()}
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
