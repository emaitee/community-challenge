import React, { Component } from 'react';

import './App.css';
import Frame from './Frame';
import Members from './Members';
import Header from './Header';


class App extends Component {
  render() {
    return (
      <div className="App">
      <div>
        <Header/>
        </div>
        <div>
         
          <Frame/> 
         
        </div>
      </div>
    );
  }
}

export default App;
