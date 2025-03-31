import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [bg, setbg] = useState('');
  

  return (
    <div className="container">
      <button onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default App;
