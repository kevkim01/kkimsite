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
        <div id="main">
          <Center />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
