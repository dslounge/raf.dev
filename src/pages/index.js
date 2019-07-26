import React from "react";
import { SocialButton } from "../components/social-button";
import Layout from "../components/layout";
import rafProfile from "../images/raf-profile.png";
import { Bio } from "../components/bio";
import "../global.scss";

const IndexPage = () => (
  <Layout title="Home">
    <div className="header">
      <div className="headerInner">
        <img className="profileImage" src={rafProfile} alt="raf profile" />
        <div
          style={{
            transform: "translate(40px, -210px)",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div className="name">Rafael Mendiola</div>
          <br />
          <div className="rafTitle">Software Developer</div>
        </div>
      </div>
    </div>
    <div className="row">
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
        title="linkedIn"
        url="https://linkedin.com/in/groundcontrol"
      />
    </div>
    <Bio />
  </Layout>
);

export default IndexPage;
