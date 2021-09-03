import { useState } from "react";
import "./App.css";

import counterContext from "./contexts/counter.context";

import CConsumer from "./components/cconsumer";
import CHook from "./components/chook";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <counterContext.Provider value={{ count, setCount }}>
        <div className="container">
          <CConsumer />
          <CHook />
        </div>
      </counterContext.Provider>
    </div>
  );
}

export default App;
