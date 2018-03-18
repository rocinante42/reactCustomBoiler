import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import 'antd/dist/antd.css';
import SwitchDemoPage from './views/SwitchDemoPage';
import AboutPage from './views/AboutPage';
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
          }}>Custom React boilerplate</h1>
        </header>
        <div>
          <SwitchDemoPage/>
        </div>
        <div>
          <Route path="/about" component={AboutPage}/>
        </div>
      </div>
    );
  }
}

export default App;
