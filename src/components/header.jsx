import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const color = useSelector((state) => state.color.color);
  return (
    <header style={{ height: '200px', backgroundColor: color }}>
      <h1>Header</h1>
    </header>
  );
};

export default Header;
