import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#39FF14");

  return (
    <div
      className="w-full h-screen duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-16 inset-x-0 right-5 left-5">
        <div className="flex flex-wrap justify-start gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("Red")}
            className="px-4 py-2 shadow-lg text-white rounded-3xl"
            style={{ backgroundColor: "Red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("Orange")}
            className="px-4 py-2 shadow-lg text-white rounded-3xl"
            style={{ backgroundColor: "Orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("Green")}
            className="px-4 py-2 shadow-lg text-white rounded-3xl"
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("Blue")}
            className="px-4 py-2 shadow-lg text-white rounded-3xl"
            style={{ backgroundColor: "Blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("Purple")}
            className="px-4 py-2 shadow-lg text-white rounded-3xl"
            style={{ backgroundColor: "Purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("Pink")}
            className="px-4 py-2 shadow-lg text-white rounded-3xl"
            style={{ backgroundColor: "Pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("Brown")}
            className="px-4 py-2 shadow-lg text-white rounded-3xl"
            style={{ backgroundColor: "Brown" }}
          >
            Brown
          </button>
          <button
            onClick={() => setColor("Black")}
            className="px-4 py-2 shadow-lg text-white rounded-3xl"
            style={{ backgroundColor: "Black" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("Gray")}
            className="px-4 py-2 shadow-lg text-white rounded-3xl"
            style={{ backgroundColor: "Gray" }}
          >
            Gray
          </button>
          <button
            onClick={() => setColor("Cyan")}
            className="px-4 py-2 shadow-lg text-white rounded-3xl"
            style={{ backgroundColor: "Cyan" }}
          >
            Cyan
          </button>
          <button
            onClick={() => setColor("Magenta")}
            className="px-4 py-2 shadow-lg text-white rounded-3xl"
            style={{ backgroundColor: "Magenta" }}
          >
            Magenta
          </button>
          <button
            onClick={() => setColor("Maroon")}
            className="px-4 py-2 shadow-lg text-white rounded-3xl"
            style={{ backgroundColor: "Maroon" }}
          >
            Maroon
          </button>
          <button
            onClick={() => setColor("Navy")}
            className="px-4 py-2 shadow-lg text-white rounded-3xl"
            style={{ backgroundColor: "Navy" }}
          >
            Navy
          </button>
          <button
            onClick={() => setColor("Teal")}
            className="px-4 py-2 shadow-lg text-white rounded-3xl"
            style={{ backgroundColor: "Teal" }}
          >
            Teal
          </button>
          <button
            onClick={() => setColor("Coral")}
            className="px-4 py-2 shadow-lg text-white rounded-3xl"
            style={{ backgroundColor: "Coral" }}
          >
            Coral
          </button>
          <button
            onClick={() => setColor("Lavender")}
            className="px-4 py-2 shadow-lg text-white rounded-3xl"
            style={{ backgroundColor: "Lavender" }}
          >
            Lavender
          </button>
          <button
            onClick={() => setColor("Indigo")}
            className="px-4 py-2 shadow-lg text-white rounded-3xl"
            style={{ backgroundColor: "Indigo" }}
          >
            Indigo
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
