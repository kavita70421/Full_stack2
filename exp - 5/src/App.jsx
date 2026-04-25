// Author: kavita

import { useState, useCallback } from "react";
import Child from "./components/Child";
import Heavy from "./components/Heavy";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <br /><br />

      <button onClick={() => setNumber(number + 1)}>
        Change Number
      </button>

      <br /><br />

      <button onClick={handleClick}>
        useCallback Button
      </button>

      <Child name="Kavita" />

      <Heavy number={number} />
    </div>
  );
}

export default App;