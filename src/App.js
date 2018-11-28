import React, { Component } from 'react';
import { Center, Footer } from './components'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div className="App">
        <div id="mainContainer">
          <div id="centerContainer">
            <Center />
          </div>
          <div id="footContainer">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
