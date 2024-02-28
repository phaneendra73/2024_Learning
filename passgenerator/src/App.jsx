import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [passLength, setPassLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [specCharAllow, setSpecCharAllow] = useState(false);
  const [password, setPassword] = useState("45678");
  const passwordref = useRef(null);

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz";
    let num = "1234567890";
    let specs = "!@#$%^&*(){}[]";
    if (numAllow) str += num;
    if (specCharAllow) str += specs;
    for (let i = 1; i <= passLength; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [passLength, numAllow, specCharAllow, setPassword]);

  const passwordcopy = useCallback(() => {
    passwordref.current?.select();
    window.navigator.clipboard.writeText(password), [password];
  }, [password]);

  useEffect(() => {
    passGenerator();
  }, [passLength, numAllow, specCharAllow]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full  px-3"
            placeholder="Password"
            readOnly
          />
          <button
            className="bg-blue-800 p-3 text-indigo-50"
            onClick={passwordcopy}
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              value={passLength}
              min={8}
              max={27}
              id="passLengthInput"
              className="cursor-pointer"
              ref={passwordref}
              onChange={(e) => setPassLength(e.target.value)}
            />
            <label htmlFor="passLengthInput"> Length: {passLength}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultValue={numAllow}
              id="numAllow"
              onChange={() => {
                setNumAllow((prev) => !prev);
              }}
            />
            <label htmlFor="numAllow">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultValue={specCharAllow}
              onChange={() => setSpecCharAllow((prev) => !prev)}
              id="specCharAllow"
            />
            <label htmlFor="specCharAllow">special chars</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
