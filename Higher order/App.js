import React from 'react';
import logo from './logo.svg';
import './App.css';
import Count from './components/count';
import Hover from './components/hover';

function App() {
  return (
    <div className="App">
      <Count child='Bob' parent='Mary' />
      <Hover />
    </div>
  );
}

export default App;
