import { useState } from "react";

import viteLogo from "/logo.svg";
import "./TestComponent.css";

const TestComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </div>
      <h1>Vatrodojava</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">Vatrodojava UI - Bootcamp 2025</p>
    </>
  );
};

export default TestComponent;
