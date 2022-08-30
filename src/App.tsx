import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [total, setTotal] = useState(0)
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

  const add = () => {
    return Number(numA) + Number(numB)
  }

  const substract = () => {
    return Number(numA) - Number(numB)
  }

  const multiply = () => {
    return Number(numA) * Number(numB)
  }

  const divide = () => {
    return Number(numA) / Number(numB)
  }

  const handleTotal = () => {
    let currentTotal = operator === 'add' ? add() : operator === 'substract' ? substract() : operator === 'multiply' ? multiply() : divide()
    setTotal(currentTotal)
    clearInputs()
  }

  const clearInputs = () => {
    setNumA(0)
    setNumB(0)
    setOperator('')
    setTotal(0)
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
        <button onClick={handleTotal}>Total</button>
        <p>Solving the equation {numA} {operator} {numB} = {total} </p>
      </div>
    </div>
  );
}

export default App;
