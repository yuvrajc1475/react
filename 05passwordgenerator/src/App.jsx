import { useState, useCallback,useEffect,useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef=useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str =
      "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklmnvvcxz"
    
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "~!@#$%^&*(){}"
    
    for (let i = 1; i <length; i++){
      const char = Math.floor(Math.random() * str.length + 1)
      pass+= str.charAt(char)
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed])

  // Function to handle the copying mechanism
  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
    passwordRef.current.select()
  }, [password]);


  useEffect(() => {
    generatePassword()
  },[length,numberAllowed,charAllowed])
  return (
    <div className="w-full max-w-md mx-auto px-4 py-3 my-8 bg-gray-800 text-orange-500 rounded-lg shadow-md">
      <h1 className="text-white text-center my-3 text-xl font-semibold">
        Password Generator
      </h1>

      {/* Input container with the blue copy button */}
      <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-2 px-3 text-gray-700 font-medium"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-600 hover:bg-blue-700 text-white px-4 py-0.5 shrink-0 transition-colors duration-200 cursor-pointer"
        >
          copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2 justify-between">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            className="cursor-pointer accent-orange-500"
            onChange={(e) => setLength(e.target.value)}
            id="length"
          />
          <label htmlFor="length">Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            id="number"
            className="accent-orange-500"
          />
          <label htmlFor="number">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            id="character"
            className="accent-orange-500"
          />
          <label htmlFor="character">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
