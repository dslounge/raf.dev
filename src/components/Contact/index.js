import React from "react";
import { SocialButton } from "../social-button";

export const Contact = () => {
  return (
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
  );
};
