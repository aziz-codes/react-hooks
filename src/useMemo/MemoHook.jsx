import React, { useState, useMemo, useEffect } from "react";

const MemoHook = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("my title");
  const handleClick = () => {
    setCount((c) => c + 1);
  };
  useMemo(() => {
    console.log("my name is useMemo");
  }, []);
  //   handleAmount();
  useEffect(() => {
    console.log("this us useEffect");
  }, []);
  return (
    <div className="flex flex-col justify-center pt-4 items-center">
      <div className="max-w-sm border w-96 h-96 p-3">
        <button
          className="border outline-none bg-sky-500 rounded-md w-20 pt-1 pb-1 m-2 hover:ring-2"
          onClick={handleClick}
        >
          Click Me
        </button>
        <h3>Title is {title}</h3>
        <button
          onClick={() => {
            setTitle("this is cause re-rendering.");
          }}
        >
          Update Title
        </button>
        <h3>The Count is {count}</h3>
        {/* <p>New Amount is {<HandleAmount />}</p> */}
      </div>
    </div>
  );
};

export default MemoHook;
