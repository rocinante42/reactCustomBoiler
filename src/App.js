import React, {Component} from 'react';
import {Switch} from 'antd';
import 'antd/dist/antd.css';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title" style={{
            color: 'white'
          }}>Custom boilerplate</h1>
        </header>
        <p className="App-intro">
          <Switch defaultChecked/>
        </p>
      </div>
    );
  }
}

export default App;
