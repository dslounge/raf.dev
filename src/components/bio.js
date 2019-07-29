import React, { useState } from "react";

export const Bio = () => {
  const [open, setOpen] = useState(true);

  const closedHeight = 75;
  const openBottomHeight = 50;

  return (
    <div
      className="bio"
      // style={{
      // margin: "auto",
      // width: "80%",
      // position: "relative",
      // // overflow: "hidden",
      // maxHeight: open ? 1000 : closedHeight,
      // paddingBottom: open ? openBottomHeight : "auto",
      // transition: "max-height 1s",
      // }}
    >
      <h2>About Me</h2>
      <p>
        I'm a software development consultant with 15 years of startup
        experience. I've led development teams building highly engaging consumer
        products, ranging from web apps, iOS and Android apps, corporate
        classrooms and large public screens in Times Square.
      </p>
      <p>
        I now help new companies be successful by improving engineering quality,
        focusing product goals, establishing an organizational rhythm, and
        helping founders foster a happy, productive culture.
      </p>
      <p>
        I grew up in Miami and graduated from MIT with a degree in Computer
        Science. In my spare time I study to increase my Japanese fluency, I
        hack on on my personal apps, and I love to travel.
      </p>
      {false && (
        <div
          onClick={() => {
            setOpen(!open);
          }}
          style={{
            backgroundColor: "rgba(255, 255, 0, .1)",
            position: "absolute",
            height: open ? openBottomHeight : "auto",
            top: open ? "auto" : 0,
            bottom: 0,
            right: 0,
            left: 0,
          }}
        >
          {}
        </div>
      )}
    </div>
  );
};
