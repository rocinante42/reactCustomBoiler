import React, {Component} from 'react';
import {Switch} from 'antd';
import 'antd/dist/antd.css';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      switch: true
    }
  }
  changeSwitch = () => {
    this.setState({
      switch: !this.state.switch
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title" style={{
            color: 'white'
          }}>Custom React boilerplate</h1>
        </header>
        <p className="App-intro">
          {`the switch state is: ${this.state.switch}`}
          <br/>
          <Switch onClick={this.changeSwitch} checked={this.state.switch}/>
        </p>
      </div>
    );
  }
}

export default App;
