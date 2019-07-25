import React from "react"
// import { Link } from "gatsby"
// import Image from "../components/image"

import Layout from "../components/layout"

// <Link to="/page-2/">Go to page 2</Link>

// <Image />

const spacing = {
  TINY: "6px",
  SMALL: "12px",
  BASE: "24px",
}

const colors = {
  black: "#353535",
  gray: "#999999",
  white: "#ffffff",
}

const styles = {
  row: {
    backgroundColor: "rgba(0, 0, 0, .3)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  socialButton: {
    backgroundColor: "rgba(0, 0, 0, .4)",
    padding: spacing.SMALL,
    margin: spacing.SMALL,
  },
  name: {
    backgroundColor: colors.black,
    fontSize: 65,
    color: colors.white,
    padding: spacing.SMALL,
    margin: spacing.SMALL,
  },
  rafTitle: {
    backgroundColor: colors.gray,
    fontSize: 40,
    color: colors.white,
    padding: spacing.SMALL,
    margin: spacing.SMALL,
  },
}

const IndexPage = () => (
  <Layout title="Home">
    <div style={styles.name}>Rafael Mendiola</div>
    <div style={styles.rafTitle}>Software Developer</div>
    <div style={styles.row}>
      <div style={styles.socialButton}>Email</div>
      <div style={styles.socialButton}>Twitter</div>
      <div style={styles.socialButton}>Instagram</div>
      <div style={styles.socialButton}>LinkedIn</div>
    </div>
  </Layout>
)

export default IndexPage
