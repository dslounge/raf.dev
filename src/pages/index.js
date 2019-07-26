import React from "react";
// import { Link } from "gatsby"
// import Image from "../components/image"
import { SocialButton } from "../components/social-button";
import Layout from "../components/layout";
import { spacing, colors } from "../design";
import rafProfile from "../images/raf-profile.png";
import { Bio } from "../components/bio";

// <Link to="/page-2/">Go to page 2</Link>

// <Image />

const styles = {
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  socialButton: {
    backgroundColor: "rgba(0, 0, 0, .4)",
    padding: spacing.SMALL,
    margin: spacing.SMALL,
  },
  profileImage: {
    width: 200,
    position: "relative",
    zIndex: 2,
  },
  name: {
    display: "inline-block",
    backgroundColor: colors.black,
    fontSize: 50,
    lineHeight: "50px",
    color: colors.white,
    padding: spacing.TINY,
    borderRadius: "10px",
    fontStyle: "italic",
    transform: "rotate(-9deg)",
    paddingLeft: 170,
    paddingRight: 20,
  },
  rafTitle: {
    display: "inline-block",
    backgroundColor: colors.gray,
    fontSize: 30,
    lineHeight: "25px",
    color: colors.white,
    padding: spacing.TINY,
    borderRadius: "10px",
    transform: "rotate(-5deg)",
    marginTop: 10,
    paddingLeft: 170,
    paddingRight: 20,
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  headerInner: {
    position: "relative",
    height: 350,
    width: 600,
  },
  p: {
    lineHeight: "150%",
    color: colors.black,
  },
};

// TODO: make bio collapsible

const IndexPage = () => (
  <Layout title="Home">
    <div style={styles.header}>
      <div style={styles.headerInner}>
        <img style={styles.profileImage} src={rafProfile} alt="raf profile" />
        <div
          style={{
            transform: "translate(40px, -210px)",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div style={styles.name}>Rafael Mendiola</div>
          <br />
          <div style={styles.rafTitle}>Software Developer</div>
        </div>
      </div>
    </div>
    <div style={styles.row}>
      <SocialButton
        icon="envelope"
        title="email"
        url="mailto:rmendiola@alum.mit.edu"
      />
      <SocialButton
        icon={["fab", "twitter"]}
        title="twitter"
        url="https://twitter.com/groundcontrol"
      />
      <SocialButton
        icon={["fab", "instagram"]}
        title="instagram"
        url="https://instagram.com/dslounge"
      />
      <SocialButton
        icon={["fab", "linkedin"]}
        title="linked in"
        url="https://linkedin.com/in/groundcontrol"
      />
    </div>
    <Bio />
  </Layout>
);

export default IndexPage;
