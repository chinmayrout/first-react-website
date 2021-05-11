import React from 'react';
import logo from './logo.svg';
import './App.css';


function App(){
  return (
    <div className ="App">  {/*use className not class */}
      <header className = "App-header">
        <img src={logo} className='App-logo' />
        <p> Chinmay's first React App</p>
        </header>
    </div>
  );
}

export default App;