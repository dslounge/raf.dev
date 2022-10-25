import React from "react";
import { Project } from "../components/Project";
import { Contact } from "../components/Contact";
import Layout from "../components/layout";
import rafProfile from "../images/raf-profile.png";
import { Bio } from "../components/bio";
import { WritingLink } from "../components/WritingLink";
import { ContentSection } from "../components/ContentSection";
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
    <Contact />
    <div>
      <ContentSection shadow>
        <Bio />
      </ContentSection>
      <ContentSection>
        <h2>Client Work</h2>
        <p>
          <b>
            A sampling of the kind of work I've done as a software consultant:
          </b>
        </p>
        <ul>
          <li>
            For a sports social media startup, kickstarted their mobile
            application and established code practices as they built their
            mobile team.
          </li>
          <li>
            For a healthtech startup, took over a poorly-implemented React
            Native codebase, resolved crashes and experience bugs, and published
            the app App Store and Google Play Store. To tackle inconsistent UX,
            established a design system enforced with ESLint, ensuring a
            coherent user experience.
          </li>
          <li>
            Advised startup leadership team on improving engineering quality,
            focusing on product goals that matter, establishing an
            organizational rhythm, and using innovation accounting to avoid
            wasted work.
          </li>
          <li>
            At EverTrue, a university fundraising platform, built the Android
            version their alumni relationship mobile app, and trained their web
            developers on developing for mobile with React Native.
          </li>
          <li>
            As a consultant for Lola Travel, assisted with their transition from
            a native iOS app to a React Native app, trained their developers on
            best practices, and created their Android build with iOS feature
            parity
          </li>
        </ul>
      </ContentSection>
      <ContentSection shadow>
        <h2>My Projects</h2>
        <div className="projects">
          <Project
            image={benkyouImg}
            video={benkyouVideo}
            title="Ongaku"
            description="A quick reference app for common piano chords"
            url="http://ongaku.raf.dev"
          />
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
      </ContentSection>
      <ContentSection>
        <div className="blogposts ">
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
      </ContentSection>
      <ContentSection shadow>
        <h2>Talks</h2>
        <WritingLink
          title="Speed up your React Native Development with Storybook"
          url="https://www.youtube.com/watch?v=SN9DKCKb13k"
          description="Using Storybook in Lola's React Native application. At Boston React Native Meetup 06/29/17"
        />
      </ContentSection>
    </div>
    <Contact />
  </Layout>
);

export default IndexPage;
