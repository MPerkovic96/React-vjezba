import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleColor } from '../store/store';

const Main = () => {
  const color = useSelector((state) => state.color.color);
  const dispatch = useDispatch();

  return (
    <main style={{ height: '200px', backgroundColor: color }}>
      <h1>Main</h1>
      <button onClick={() => dispatch(toggleColor())}>Toggle color</button>
    </main>
  );
};

export default Main;
