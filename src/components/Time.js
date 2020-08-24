import React from "react";

function Time({ time }) {
  const formatTime = (time) => {
    let minutes = (time / 60) >> 0;
    let seconds = time % 60 >> 0;
    let formatedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    let formatedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${formatedMinutes}:${formatedSeconds}`;
  };

  return <>{formatTime(time)}</>;
}

export default React.memo(Time);
