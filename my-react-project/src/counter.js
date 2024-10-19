import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <h1>{count}</h1>
      <button style={styles.button} onClick={() => setCount(count - 1)}>-</button>
      <button style={styles.button} onClick={() => setCount(0)}>Reset</button>
      <button style={styles.button} onClick={() => setCount(count + 1)}>+</button>
      <p style={styles.footer}>This is React - nta45</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  },
  button: {
    margin: '5px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  footer: {
    color: 'gray',
    fontSize: '1rem',
    marginTop: '20px'
  }
};

export default Counter;
