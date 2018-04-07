import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Button({onClick, label}) {
  return (
    <button onClick={onClick}>{label}</button>
  );
}

class App extends Component {
  render() {
    this.label = (index) => `Button #${index}`;
    
    this.onClick = (index) => {
      return (event) => {
        console.log(index, event);
      };
    };
    
    this.buttonIds = [1, 2, 3, 4];
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          {this.buttonIds.map((item, index) => (
            <Button label={this.label(item)} onClick={this.onClick(item)} key={index}/>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
