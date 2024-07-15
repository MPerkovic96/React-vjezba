import React from 'react';
import { useSelector } from 'react-redux';

const Footer = () => {
  const color = useSelector((state) => state.color.color);
  return (
    <footer style={{ height: '200px', backgroundColor: color }}>
      <h1>Footer</h1>
    </footer>
  );
};

export default Footer;
