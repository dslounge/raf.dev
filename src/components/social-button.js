import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropTypes } from "prop-types";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { spacing, colors } from "../design";

library.add(fab, faEnvelope);

const styles = {
  socialButton: {
    backgroundColor: "rgba(0, 0, 0, .05)",
    padding: spacing.SMALL,
    margin: spacing.SMALL,
    color: colors.black,
    textDecoration: "none",
  },
  icon: {
    marginRight: spacing.SMALL,
  },
};

export const SocialButton = props => {
  const { icon, title, url } = props;
  return (
    <a style={styles.socialButton} href={url} target="_blank" rel="noopener">
      <FontAwesomeIcon style={styles.icon} icon={icon} />
      {title}
    </a>
  );
};

SocialButton.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired, // eslint-disable-line
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
