import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="card">
        
        <h1 className="title">🚀 React Assignment</h1>

        <p className="info">Name: Kavita Bathyal</p>
        <p className="info">UID: 23BAI70421</p>

        <h2>Features</h2>
        <ul className="features">
          <li>✔ React with Vite</li>
          <li>✔ Fast Rendering</li>
          <li>✔ Component-Based UI</li>
        </ul>

        <h2>Counter Feature</h2>
        <p className="count">Count: {count}</p>

        <button onClick={() => setCount(count + 1)}>
          Increase
        </button>

      </div>
    </div>
  );
}

export default App;