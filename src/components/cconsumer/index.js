import React from "react";
import CounterContext from "../../contexts/counter.context";

const CConsumer = () => {
  return (
    <div className="clicker">
      <CounterContext.Consumer>
        {(counter) => {
          return (
            <>
              <p>
                <strong>Consumer Clicker</strong>
              </p>
              <p>{`Button has been clicked ${counter.count} times`}</p>
              <button
                onClick={() => {
                  counter.setCount(counter.count + 1);
                }}
              >
                Click me!
              </button>
            </>
          );
        }}
      </CounterContext.Consumer>
    </div>
  );
};

export default CConsumer;
