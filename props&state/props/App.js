import React from 'react';
import logo from './logo.svg';
import './App.css';
import Class from './components/Class';
import Func from './components/Function';

function App() {
  return (
    <div className="App">
      <Class name='Ann' age='22' />
      <Func name='Bob' age='25'/>
    </div>
  );
}

export default App;
