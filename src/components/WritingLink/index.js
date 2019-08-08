import React from "react";
import { PropTypes } from "prop-types";
import "./styles.scss";

export const WritingLink = ({ title, description, url }) => {
  return (
    <div className="writingLink">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </div>
  );
};

WritingLink.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
