import React, { FC } from "react";
import type { Calculation } from '../App/App';
import Card from "../Card/Card";
import './List.css';

interface ListProps {
  calculations: Calculation[]
}

const List: FC<ListProps> = ({ calculations }) => {
  const calcList = calculations.map((calc, index): JSX.Element => {
    return (
      <Card
        key={index}
        a={calc.a}
        b={calc.b}
        operator={calc.operator}
        total={calc.total}
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