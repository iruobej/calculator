import { useState } from 'react'
import { evaluate } from "mathjs"; //needs 'npm install mathjs'. evaluate() naturally parses a string expression (with BODMAS)
import './App.css'

function App() {
  const [display, setDisplay] = useState("0");
  const buttons = ["+", "-", "x", "/",
                  "0", "1", "2", "C", 
                  "3", "4", "5", "AC", 
                  "6", "7", "8", "=",
                  "9", "(", ")"]
  const addValue = (value) => {
    if(value === "AC") {
      setDisplay("0") 
    } else if(value === "C") {
      setDisplay((prev) => 
        prev.length > 1 ? prev.slice(0, -1) : "0"
      );
    } else if(value === "=") {
      setDisplay(evaluate(display.replace("x", "*")));
    } else if (display === "0"){
        return setDisplay(value)
    } else {
        return setDisplay((prev) => prev + value)
    }
  }

  return (
    <div className="container">
      <h1>Calculator</h1>
      <div className="calculator">
        <div className="screen">
          <input 
            type="text"
            readOnly
            value={display}
          />
          <hr />
          {
            buttons.map((b) => 
              <button onClick={() => addValue(b)} value={b}>{b}</button>)
          }
        </div>
      </div>
    </div>
  )
}

export default App
