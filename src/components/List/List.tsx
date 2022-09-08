import React, { FC } from "react";
import type { Calculation } from '../App/App';
import Card from "../Card/Card";
import './List.css';

interface ListProps {
  calculations: Calculation[];
  deleteCalc: (id: number) => void;
}

const List: FC<ListProps> = ({ calculations, deleteCalc }) => {
  const calcList = calculations.map((calc, index): JSX.Element => {
    return (
      <Card
        key={index}
        id={calc.id}
        a={calc.a}
        b={calc.b}
        operator={calc.operator}
        total={calc.total}
        deleteCard={deleteCalc}
      />
    )
  })
  return (
    <div className="list">
      {calcList}
    </div>
  )
}

export default List;