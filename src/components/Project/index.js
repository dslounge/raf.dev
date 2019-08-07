import React from "react";
import { PropTypes } from "prop-types";
import "./style.scss";

export const Project = props => {
  const { image, title, url } = props;
  return (
    <a href={url}>
      <div className="project">
        <img src={image} />
        <p>{title}</p>
      </div>
    </a>
  );
};

Project.propTypes = {
  image: PropTypes.object.isRequired, // eslint-disable-line
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
