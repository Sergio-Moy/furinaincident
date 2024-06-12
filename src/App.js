// src/App.js
import React from 'react';
import Countdown from './countdown';
import './App.css';
import gif from './img.gif'

function App() {
  const targetDate = '2024-06-25T18:00:00'; // June 25th, 6 PM
  const targetTimezone = 'America/Lima'; // UTC-5 timezone (Lima, Peru)

  return (
    <div className="App">
      <header className="App-header">
        <h1><Countdown targetDate={targetDate} targetTimezone={targetTimezone} /></h1>
        <p>left until the Furina incident</p>
        <img src={gif}></img>
      </header>
    </div>
  );
}

export default App;
