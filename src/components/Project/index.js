/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useRef } from "react";
import { PropTypes } from "prop-types";
import "./style.scss";

export const Project = props => {
  const [showVideo, setShowVideo] = useState(false);
  const { image, video, description, title, url, soon } = props;
  const videoStyle = showVideo ? "videoShow" : "videoHide";

  const videoRef = useRef();

  return (
    <a
      href={url}
      onMouseEnter={() => {
        if (videoRef.current) {
          videoRef.current.play();
        }
        setShowVideo(true);
      }}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
        }
        setShowVideo(false);
      }}
    >
      <div className="project">
        <img src={image} alt="project preview" />
        {video && (
          <video
            ref={videoRef}
            className={videoStyle}
            src={video}
            type="video/mp4"
            loop
            muted
            disableRemotePlayback
          />
        )}
        <div className="caption">
          <header>{title}</header>
          <p>{description}</p>
        </div>
        {soon && <div className="soon">write-up soon</div>}
      </div>
    </a>
  );
};

Project.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  video: PropTypes.string,
  url: PropTypes.string,
  soon: PropTypes.bool,
};

Project.defaultProps = {
  video: null,
  url: null,
  soon: false,
};
