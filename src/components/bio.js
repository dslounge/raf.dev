import React, { useState } from "react";
import { colors } from "../design";

const styles = {
  p: {
    lineHeight: "150%",
    color: colors.black,
  },
};

export const Bio = () => {
  const [open, setOpen] = useState(false);

  const closedHeight = 75;
  const openBottomHeight = 50;

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        maxHeight: open ? 1000 : closedHeight,
        paddingBottom: open ? openBottomHeight : "auto",
        transition: "max-height 1s",
      }}
    >
      <p style={styles.p}>
        I'm a software development consultant with 15 years of startup
        experience. I've led development teams building highly engaging consumer
        products, ranging from web apps, iOS and Android apps, corporate
        classrooms and large public screens in Times Square.
      </p>
      <p style={styles.p}>
        I now help new companies be successful by improving engineering quality,
        focusing product goals, establishing an organizational rhythm, and
        helping founders foster a happy, productive culture.
      </p>
      <p style={styles.p}>
        I grew up in Miami and graduated from MIT with a degree in Computer
        Science. In my spare time I study to increase my Japanese fluency, works
        on his personal apps, and I love to travel.
      </p>
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
    </div>
  );
};
