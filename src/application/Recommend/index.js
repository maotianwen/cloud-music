import React, { useState } from "react";

function Recommend(props) {
  const [count, setCount] = useState({
    times: 0,
    name: "nov",
    gender: { sex: "female" },
  });
  return (
    <div>
      <div>Recommend</div>
      <p
        onClick={() =>
          setCount({
            times: count.times + 1,
            name: count.name,
            gender: { sex: count.gender.sex === "female" ? "male" : "female" },
          })
        }
      >
        {count.times},{count.name},{count.gender.sex}
      </p>
      <footer>我底部</footer>
    </div>
  );
}

export default React.memo(Recommend);
