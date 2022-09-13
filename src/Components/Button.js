import React from 'react';
import '../Styles/Button.css'
import { Link } from 'react-router-dom';

export default function Button() {
  return (
    <Link to='log-out'>
      <button className='btn'>Log Out</button>
    </Link>
  );
}
