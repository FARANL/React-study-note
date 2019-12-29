import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {UserProvider} from './components/userContext'
import ComponentC from './components/ComponentC'
function App() {
  return (
    <div className="App">
      <UserProvider value='World'>
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
