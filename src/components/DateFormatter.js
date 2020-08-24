import React from "react";

function DateFormatter({ timestamp }) {
  const formatDate = (timestamp) => {
    let date = new Date(timestamp),
      year = date.getFullYear(),
      month = date.getMonth() + 1,
      day = date.getDate();
    return `${year}-${month < 10 ? `0${month}` : month}-${
      day < 10 ? `0${day}` : day
    }`;
  };
  return <>{formatDate(timestamp)}</>;
}

export default React.memo(DateFormatter);
