import React, { useState, FC } from 'react';
import './App.css';
import Calculator from '../Calculator/Calculator'
import List from '../List/List'

export interface Calculation {
  a: number; 
  b: number; 
  operator: string;
  total: number;
}

const App: FC = () => {
  // const [calculations, setCalculations] = useState<{a: number, b: number, operator: string; result: number}[]>([])
  const [calculations, setCalculations] = useState<Calculation[]>([])

  const addCalc = (entry: Calculation) => {
    setCalculations([...calculations, entry])
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator</h1>
      </header>
      <div>
        <p>Calculate the total</p>
        <Calculator addCalc={addCalc} />
        <List calculations={calculations} />
      </div>
    </div>
  );
}

export default App;
