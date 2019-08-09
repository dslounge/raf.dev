import React from "react";

export const ContentSection = ({ shadow, children }) => {
  if (shadow) {
    return (
      <div className="shadow">
        <div className="grayRow">
          <div className="contentBlock">{children}</div>
        </div>
      </div>
    );
  }

  return <div className="contentBlock">{children}</div>;
};
