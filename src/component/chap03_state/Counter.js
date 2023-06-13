import React, { useState } from 'react'

const Counter = () => {

    const [number, setNumber]  = useState(0);
    const [nick, setNick] = useState('익명');

    const increase = () => setNumber(number + 1);
    const decrease = () => setNumber(number - 1);

    const changeNick = () => setNick('전정국');

  return (
    <>
    <h1>닉네임: {nick}</h1>
    <h2>{number}</h2>
    <button onClick={increase}>+1</button>
    <button onClick={decrease}>-1</button>
    <button onClick={changeNick}>닉네임 변경</button>
    </>
  );
}

export default Counter;