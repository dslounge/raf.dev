import React from "react";

export const YouTube = ({ ytid }) => {
  const src = `https://www.youtube.com/embed/${ytid}`;
  return (
    <iframe
      width="560"
      height="315"
      src={src}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
};
