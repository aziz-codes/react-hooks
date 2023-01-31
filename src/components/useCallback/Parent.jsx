import React, { useState } from "react";
import Child from "./Child";
const Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p>{count}</p>
      <br />
      <Child />
    </div>
  );
};

export default Parent;
