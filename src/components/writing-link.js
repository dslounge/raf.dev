import React from "react";
import { PropTypes } from "prop-types";

export const WritingLink = ({ title, url }) => {
  return (
    <div className="writingLink">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </div>
  );
};

WritingLink.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
