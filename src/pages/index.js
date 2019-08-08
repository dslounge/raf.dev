import React from "react";
import { SocialButton } from "../components/social-button";
import { Project } from "../components/Project";
import Layout from "../components/layout";
import rafProfile from "../images/raf-profile.png";
import { Bio } from "../components/bio";
import { WritingLink } from "../components/WritingLink";
import benkyouImg from "../images/benkyou-project.png";
import gesocialImg from "../images/geosocial-project.png";
import ryoteiImg from "../images/ryotei-project.png";
import kaocardsImg from "../images/kaocards-project.png";
import benkyouVideo from "../video/benkyou-demo.mp4";
import ryoteiVideo from "../video/ryotei-demo.mp4";
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
        <h2>My Projects</h2>
        <div className="projects">
          <Project
            image={benkyouImg}
            video={benkyouVideo}
            title="Benkyou"
            description="Japanese swipe flashcards"
            url="http://benkyou.cards"
          />
          <Project
            image={ryoteiImg}
            video={ryoteiVideo}
            title="Ryotei"
            description="My personal travel itinerary app"
            soon
          />
          <Project
            image={kaocardsImg}
            title="KaoCards"
            description="Flashcards for faces and names"
            soon
          />

          <Project
            image={gesocialImg}
            title="geosocial.io"
            description="startup: be notified of what's happening nearby"
            soon
          />
        </div>
      </div>
      <div className="blogposts">
        <h2>Writing</h2>
        <WritingLink
          title="How to Build your React Native Team"
          url="https://medium.com/@GroundControl/how-to-build-your-react-native-team-d8bc4be6014a"
          description="You decided to go with React Native. Now what?"
        />
        <WritingLink
          title="Animating Gradients in React Native"
          url="https://medium.com/@GroundControl/animating-gradients-in-react-native-8853dbd97d02"
          description="Animating gradients in React Native isn’t straight forward, but this tutorial will show you how to get it done."
        />
        <WritingLink
          title="Failure, Depression and Resilience"
          url="https://medium.com/@GroundControl/failure-depression-and-resilience-3cfa67db4290"
          description="2018 wasn't a great year for me. I want to share what life has taught me about failure, depression and resilience."
        />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
