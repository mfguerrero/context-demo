import React, { useContext } from "react";
import CounterContext from "../../contexts/counter.context";

const CHook = () => {
  const counter = useContext(CounterContext);

  return (
    <div className="clicker">
      <p>
        <strong>Hook Clicker</strong>
      </p>
      <p>Button has been clicked {counter.count} times</p>
      <button
        onClick={() => {
          counter.setCount(counter.count + 1);
        }}
      >
        Click me!
      </button>
    </div>
  );
};

export default CHook;
