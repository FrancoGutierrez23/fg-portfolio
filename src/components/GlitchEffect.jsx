import React from 'react';
import './GlitchEffect.css';

const GlitchEffect = () => {
  return (
    <div className="background mask-gradient">
      <div className="image image--1" />
      <div className="image image--2" />
      <div className="image image--3" />
      <div className="image image--4" />
      <div className="gradient" />
    </div>
  );
};

export default GlitchEffect;
