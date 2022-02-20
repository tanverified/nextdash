import React from 'react';
import classes from '../styles/Card.module.css';

function Card({className,children}) {
  return (
    <div className={`${className} ${classes.card}`}>
        {children}
    </div>
  )
}

export default Card