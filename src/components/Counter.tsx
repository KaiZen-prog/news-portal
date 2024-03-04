import React, {useState} from 'react';
import classes from './Counter.module.scss';

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button className={classes.btn} onClick={decrement}>decrement</button>
      <p>{count}</p>
      <button className={classes.btn} onClick={increment}>increment</button>
    </div>
  );
};

export default Counter;
