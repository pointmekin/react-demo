import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../App.css';

function Home() {

  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log("I am re-rendered")
  })

  useEffect(() => {
    console.log("I am rendered once")
  }, [])

  useEffect(() => {
    console.log("I am toggled")
  }, [toggle])

  const increment = () => setCount(count + 1)
  const decrement = () => {
    setCount(count -1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Home
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h3>{ count }</h3>
        <h3>{ toggle.toString() }</h3>
        <span>
          <button onClick={increment} className="button"> + </button>
          <button onClick={decrement} className="button"> - </button>
          <button onClick={() => setToggle(!toggle)} className="button long-button"> Toggle </button>
        </span>
      </header>
    </div>
  );
}

export default Home;
