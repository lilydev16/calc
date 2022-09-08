import React, { useState } from 'react';
import type { Calculation } from '../App/App';

interface Props {
  addCalc: (entry: Calculation) => void;
}

const Calculator: React.FC<Props> = ({ addCalc }) => {
  const [total, setTotal] = useState<number>(0)
  const [numA, setNumA] = useState<number>(0)
  const [numB, setNumB] = useState<number>(0)
  const [operator, setOperator] = useState<string>("add")

  const handleNumA = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNumA(Number(e.target.value))
  }

  const handleNumB = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNumB(Number(e.target.value))
  }

  const handleOperator = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setOperator(e.target.value)
  }

  const handleTotal = (): void => {
    const currentTotal: number = operator === 'add' ? add() 
      : operator === 'substract' ? substract() 
      : operator === 'multiply' ? multiply() 
      : divide()
    console.log('current total', currentTotal) // the math is correct; logs the total
    setTotal(currentTotal) // bug!!! state is not updating --- total
    console.log('state total', total) // prints initial value 0 only, not current total
    addCalcEntry()
    clearInputs()
  
  }

  const add = (): number => {
    return Number(numA) + Number(numB)
  }

  const substract = (): number => {
    return Number(numA) - Number(numB)
  }

  const multiply = (): number => {
    return Number(numA) * Number(numB)
  }

  const divide = (): number => {
    return Number(numA) / Number(numB)
  }

  const clearInputs = (): void => {
      setNumA(0)
      setNumB(0)
      setTotal(0)
  }

  const addCalcEntry = (): void => {
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

/*
refactor handler fn
- if e.target.name is x then update state of x
- if e.target.name is y then update state of y
*/