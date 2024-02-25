import { useState } from "react";
import Card from "./Card.jsx";

function App() {
  return (
    <>
      <div className="bg-gray-700">
        <Card
          about="about"
          tag1="laptop"
          tag2="macbook"
          tag3="apple"
          more="readmore"
        />
        <Card
          about="about"
          tag1="phewuh"
          tag2="lorem"
          tag3="sflhsdll"
          more="eyr"
        />
      </div>
    </>
  );
}

export default App;
