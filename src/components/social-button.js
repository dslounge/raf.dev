import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropTypes } from "prop-types";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faEnvelope);

export const SocialButton = props => {
  const { icon, title, url } = props;
  return (
    <a className="socialButton" href={url} target="_blank" rel="noopener">
      <FontAwesomeIcon className="icon" icon={icon} />
      {title}
    </a>
  );
};

SocialButton.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired, // eslint-disable-line
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
