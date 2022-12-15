import React, { useEffect, useState } from "react";

const Container = () => {
  const [value, setValue] = useState(0);
  const [isDisabled, setisDisabled] = useState(true);
  useEffect(() => {
    if (value <= 1) {
      setisDisabled(true);
    } else {
      setisDisabled(false);
    }
  }, [value]);
  return (
    <div className="flex flex-row gap-2 justify-center">
      <button
        onClick={() => {
          setValue((currentState) => (currentState -= 1));
        }}
        disabled={isDisabled}
      >
        -
      </button>
      <button>{value}</button>
      <button
        onClick={() => {
          setValue((currentState) => (currentState += 1));
        }}
      >
        +
      </button>
    </div>
  );
};

export default Container;
