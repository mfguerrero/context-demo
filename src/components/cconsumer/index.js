import React from "react";

const CConsumer = () => {
  return (
    <div className="clicker">
      <p>
        <strong>Consumer Clicker</strong>
      </p>
      <p>{`Button has been clicked 0 times`}</p>
      <button>Click me!</button>
    </div>
  );
};

export default CConsumer;
