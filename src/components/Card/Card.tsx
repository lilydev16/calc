import React from 'react';
import { Calculation } from '../App/App';
import './Card.css';

interface CardProps extends Calculation {
  key: number
}

const Card: React.FC<CardProps> = ({ a:numA, b:numB, operator, total }) => {
  return (
    <div className='card'>
      <div className='card-content'>
        <p>{operator.toUpperCase()}</p>
        <p><span className='num-a'>{numA}</span> & <span className='num-b'>{numB}</span></p>
        {/* <p>{numA} & {numB}</p> */}
        <p><span className='total'>Total: </span>{total}</p>
      </div>
    </div>
  )
}

export default Card;