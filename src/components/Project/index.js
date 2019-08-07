import React, { useState } from "react";
import { PropTypes } from "prop-types";
import "./style.scss";

export const Project = props => {
  const [showVideo, setShowVideo] = useState(false);

  const { image, video, title, url } = props;
  return (
    <a
      href={url}
      onMouseEnter={() => {
        setShowVideo(true);
      }}
      onMouseLeave={() => {
        setShowVideo(false);
      }}
    >
      <div className="project">
        <img src={image} />
        {showVideo && <video src={video} type="video/mp4" autoPlay />}
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
