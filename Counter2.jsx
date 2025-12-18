
import React, { useState } from 'react';

export default function Counter2() {
  const [state, setState] = useState(0);

  function Inc() {
    setState(state + 1);
  }

  function Dec() {
    setState(state - 1);
  }

  return (
    <div style={container}>
      <h1 style={heading}>Counter App</h1>

      <div style={counterBox}>
        <h1 style={count}>{state}</h1>
      </div>

      <div>
        <button style={btn} onClick={Inc}>+</button>
        <button style={btn} onClick={Dec}>−</button>
      </div>
    </div>
  );
}


const container = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(165, 231, 244, 1)',
};

const heading = {
  marginBottom: '20px',
};

const counterBox = {
  backgroundColor: 'rgba(248, 244, 248, 1)',
  padding: '50px 80px',
  borderRadius: '10px',
  marginBottom: '20px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
};

const count = {
  fontSize: '40px',
  margin: 0,
};


const btn = {
  fontSize: '20px',
  padding: '20px 30px',
  margin: '0 10px',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: 'rgba(99, 102, 241, 1)', 
  color: 'rgba(255, 255, 255, 1)',
};
