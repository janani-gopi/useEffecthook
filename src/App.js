import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(-1);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (count % 10 === 0) setNumber(number + 1);
    return;
  }, [count]);

  return (
    <div className="App">
      <h1>{`Count: ${count}`}</h1>
      <h1>{`Number: ${number}`}</h1>
      {show && <Increase setCount={setCount} />}
      <Decrease setCount={setCount} />
      <button
        onClick={() => {
          setShow((prev) => !prev);
        }}
      >
        toggle
      </button>
    </div>
  );
}

function Increase({ setCount }) {
  useEffect(() => {
    return () => {
      console.log("unMounted");
    };
  });
  return (
    <button
      onClick={() => {
        setCount((prev) => prev + 1);
      }}
    >
      +
    </button>
  );
}
function Decrease({ setCount }) {
  return (
    <button
      onClick={() => {
        setCount((prev) => prev - 1);
      }}
    >
      -
    </button>
  );
}
