import { useState } from "react";
import "./App.css";

function App() {
  let [count, setcounter] = useState(15);
  let [warning, setwarning] = useState("");
  function addvalue() {
    if (count >= 20) {
      setwarning("cannot increment more than 20");
      return;
    }
    count++;
    setcounter(count);
  }
  function removevalue() {
    if (count <= 0) {
      setwarning("cannot decrement less than 0");
      return;
    }
    count--;
    setcounter(count);
  }
  return (
    <>
      <h1>learning state hooks</h1>
      <p>count value : {count}</p>
      <button onClick={addvalue}>increase ⬆️ value {count}</button>
      <button onClick={removevalue}>decrease ⬇️ value {count}</button>
      <p>{warning}</p>
    </>
  );
}

export default App;
