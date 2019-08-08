/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useRef } from "react";
import { PropTypes } from "prop-types";
import "./style.scss";

export const Project = props => {
  const [showVideo, setShowVideo] = useState(false);
  const { image, video, title, url } = props;
  const videoStyle = showVideo ? "videoShow" : "videoHide";

  const videoRef = useRef();

  return (
    <a
      href={url}
      onMouseEnter={() => {
        videoRef.current.play();
        setShowVideo(true);
      }}
      onMouseLeave={() => {
        videoRef.current.pause();
        setShowVideo(false);
      }}
    >
      <div className="project">
        <img src={image} alt="project preview" />
        <video
          ref={videoRef}
          className={videoStyle}
          src={video}
          type="video/mp4"
          loop
        />
        <p>{title}</p>
      </div>
    </a>
  );
};

Project.propTypes = {
  image: PropTypes.string.isRequired, // eslint-disable-line
  video: PropTypes.string.isRequired, // eslint-disable-line
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
