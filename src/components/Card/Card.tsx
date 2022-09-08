import React from 'react';
import { Calculation } from '../App/App';

interface CardProps extends Calculation {
  key: number
}

const Card: React.FC<CardProps> = ({ a:numA, b:numB, operator, total }) => {
  return (
    <div>
      <p>{operator.toUpperCase()}</p>
      <p>{numA} & {numB}</p>
      <p>Total: {total}</p>
    </div>
  )
}

export default Card;