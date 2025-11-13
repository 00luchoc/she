// src/App.js
import React from 'react';
import './App.css';
import LoveLetter from './components/LoveLetter';
import FloatingHearts from './components/FloatingHearts';

function App() {
  return (
    <div className="App">
      <FloatingHearts />
      <LoveLetter />
    </div>
  );
}

export default App;