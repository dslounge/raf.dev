import React from "react";
import { SocialButton } from "../components/social-button";
import { Project } from "../components/Project";
import Layout from "../components/layout";
import rafProfile from "../images/raf-profile.png";
import { Bio } from "../components/bio";
import { WritingLink } from "../components/writing-link";
import benkyouImg from "../images/benkyou-project.png";
import benkyouVideo from "../video/benkyou-demo.mp4";
import "../global.scss";

const IndexPage = () => (
  <Layout title="Home">
    <div className="header">
      <div className="headerInner">
        <img className="profileImage" src={rafProfile} alt="raf profile" />
        <div className="labelContainer">
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
        url="https://linkedin.com/in/rafmendiola"
      />
    </div>
    <div className="content">
      <Bio />
      <div>
        <h2>Projects</h2>
        <div className="projects">
          <Project
            image={benkyouImg}
            video={benkyouVideo}
            title="Benkyou"
            url="http://benkyou.cards"
          />
        </div>
      </div>
      <div className="blogposts">
        <h2>Writing</h2>
        <WritingLink
          title="How to Build your React Native Team"
          url="https://medium.com/@GroundControl/how-to-build-your-react-native-team-d8bc4be6014a"
        />
        <WritingLink
          title="Animating Gradients in React Native"
          url="https://medium.com/@GroundControl/animating-gradients-in-react-native-8853dbd97d02"
        />
        <WritingLink
          title="Failure, Depression and Resilience"
          url="https://medium.com/@GroundControl/failure-depression-and-resilience-3cfa67db4290"
        />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
