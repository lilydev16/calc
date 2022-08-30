import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [start, setStart] = useState(0)
  const [numA, setNumA] = useState(0)
  const [numB, setNumB] = useState(0)
  const [operator, setOperator] = useState('')

  const handleNumA = (e: any) => {
    setNumA(e.target.value)
  }

  const handleNumB = (e: any) => {
    setNumB(e.target.value)
  }

  const handleOperator = (e: any) => {
    setOperator(e.target.value)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator</h1>
      </header>
      <div>
        <p>Calculate the total</p>
        <input
          name="numA"
          placeholder="Enter a Number"
          type="number"
          value={numA}
          onChange={handleNumA}
        >
        </input>
        <select onChange={handleOperator}>
          <option value="">Select a Math Operator</option>
          <option value="add">Add</option>
          <option value="substract">Subtract</option>
          <option value="multiply">Multiply</option>
          <option value="divide">Divide</option>
        </select>
        <input
          name="numA"
          placeholder="Enter a Number"
          type="number"
          value={numB}
          onChange={handleNumB}
        >
        </input>
        <p>Solving the equation {numA} {operator} {numB} </p>
      </div>
    </div>
  );
}

export default App;
