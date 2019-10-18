import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [scrollDepth, setScrollDepth] = useState(0);
  const [todo, setToDo] = useState(0);

  function determineUserScrollDepth() {
    const scrolled =  document.documentElement.scrollTop || 
    document.body.scrollTop;
    setScrollDepth(scrolled)
  }

useEffect(() => {
  window.addEventListener('scroll', determineUserScrollDepth)

  return function() {
    window.removeEventListener('scroll', determineUserScrollDepth)
  }
})

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          You've scrolled this far: {scrollDepth}
        </p>
        {/* <button onClick={() => {setCartItems([...cartItems, 'apple']) }}>
            Add to Cart
          </button> */}
          <button onClick={() => {setToDo([...todo, 'Here is where the user text should be for the to do']) }}>

          </button>
          <p>{todo}</p>
       
      </header>
    </div>
  );
}



