import React from 'react';
import './loader.css';

const Loader = () => {
  return (
    <div className='sk-folding-cube'>
      <div className='sk-cube1 sk-cube' />
      <div className='sk-cube2 sk-cube' />
      <div className='sk-cube4 sk-cube' />
      <div className='sk-cube3 sk-cube' />
    </div>
  );
};

export default Loader;
