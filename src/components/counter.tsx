import React from 'react';
import styles from './counter.module.scss';

console.log('Styles: ', styles);

const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button className={styles.btn} onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
