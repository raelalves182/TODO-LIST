import React from 'react';
import './btn.scss';

const Btn = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className='btn'>
      {children}
    </button>
  )
}

export default Btn;