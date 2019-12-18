import React from 'react';
import './App.css';

import Title from './components/Title';
import Author from './components/Author';
import { dateSite } from './components/Author';


function App() {
  return (
    <div className="App">
      <Title></Title>      
      <Author dateSite={dateSite()}></Author>
    </div>
  );
}

export default App;
