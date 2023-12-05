import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount(count + 1);
  }
  function decreaseCount() {
    setCount(count - 1);
  }
  return (
    <>
      <div className="container">
        <h1>Counter</h1>
        <div className="BtnContainer">
          <div>
            <h3>{count} </h3>

            <button className="btnright" onClick={increaseCount}>
              +
            </button>
            <button className="btnleft" onClick={decreaseCount}>
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
