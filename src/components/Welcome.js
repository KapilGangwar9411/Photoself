// Welcome.js
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Welcome.css'; // Ensure this path is correct

const Welcome = ({ onLoginSignup }) => {
  return (
    <div className="container">
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames="fade"
      >
        <h1 className="welcome-text appear">Welcome to Spectrum Photoself</h1>
      </CSSTransition>
      <p className="sub-text">A Platform For the Graphic Designers to showcase their Skills.<br></br> You can Find Like-Minded Persons Here and Follow Them!</p>
      <button className="button" onClick={onLoginSignup}>Login / Signup</button>
    </div>
  );
};

export default Welcome;
