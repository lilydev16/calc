import React from 'react';
import { useState } from 'react';
import type { Calculation } from '../App/App';

interface Props {
  addCalc: Function;
}

const Calculator: React.FC<Props> = ({ addCalc }) => {
  const [total, setTotal] = useState(0)
  const [numA, setNumA] = useState(0)
  const [numB, setNumB] = useState(0)
  const [operator, setOperator] = useState("add")

  const handleNumA = (e: any) => {
    setNumA(e.target.value)
  }

  const handleNumB = (e: any) => {
    setNumB(e.target.value)
  }

  const handleOperator = (e: any) => {
    setOperator(e.target.value)
  }

  const handleTotal = () => {
      const currentTotal = operator === 'add' ? add() 
        : operator === 'substract' ? substract() 
        : operator === 'multiply' ? multiply() 
        : divide()
      console.log('total', currentTotal) // the math is correct; logs the total
      setTotal(currentTotal) // bug!!! state is not updating --- total
      console.log('state total', total) // prints initial value 0
      addCalcEntry()
      clearInputs()
  
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

  const clearInputs = () => {
      setNumA(0)
      setNumB(0)
      setTotal(0)
  }

  const addCalcEntry = () => {
    const calcEntry: Calculation = {
      a: numA,
      b: numB,
      operator: operator,
      total: total
    }
    console.log('entry', calcEntry)
    addCalc(calcEntry)
  }

  return (
    <div>
      <input
          name="numA"
          placeholder="Enter a Number"
          type="number"
          value={numA}
          onChange={handleNumA}
        >
        </input>
        <select 
          onChange={handleOperator}
        >
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
    </div>
  )
}

export default Calculator;