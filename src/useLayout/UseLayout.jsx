import React, { useLayoutEffect, useState } from "react";

const UseLayout = () => {
  const [num, setNum] = useState(0);
  useLayoutEffect(() => {
    if (num === 0) {
      setNum(1 + Math.random() * 10);
    }
  }, [num]);

  return <div>random Number is {num}</div>;
};

export default UseLayout;
