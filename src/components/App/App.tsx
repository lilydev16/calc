import React, { useState, FC } from 'react';
import './App.css';
import Header from '../Header/Header';
import Calculator from '../Calculator/Calculator';
import List from '../List/List';

export interface Calculation {
  a: number; 
  b: number; 
  operator: string;
  total: number;
  id: number;
}

const App: FC = () => {
  // const [calculations, setCalculations] = useState<{a: number, b: number, operator: string; result: number}[]>([])
  const [calculations, setCalculations] = useState<Calculation[]>([])

  const addCalc = (entry: Calculation): void => {
    setCalculations([...calculations, entry])
  }

  const deleteCalc = (id: number): void => {
    const filteredCalculations = calculations.filter(calc => calc.id !== id)
    setCalculations(filteredCalculations)
    console.log(id)
    console.log('all', calculations)
    console.log('filtered', filteredCalculations)
  }
  
  return (
    <div className="app">
      <Header />
      <Calculator addCalc={addCalc} />
      <List calculations={calculations} deleteCalc={deleteCalc}/>
    </div>
  );
}

export default App;
