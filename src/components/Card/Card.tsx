import React from 'react';
import { Calculation } from '../App/App';
import './Card.css';

interface CardProps extends Calculation {
  key: number;
  id: number;
  deleteCard: (id: number) => void;
}

const Card: React.FC<CardProps> = ({ a:numA, b:numB, operator, total, id, deleteCard }) => {
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    deleteCard(id)
  }

  return (
    <div className='card'>
      <div className='card-content'>
        <p>{operator.toUpperCase()}</p>
        <p><span className='num-a'>{numA}</span> & <span className='num-b'>{numB}</span></p>
        <p><span className='total'>Total: </span>{total}</p>
        <button onClick={handleClick}>Delete</button>
      </div>
    </div>
  )
}

export default Card;

// onClick React.MouseEventHandler<HTMLButtonElement>