import React, { Component } from 'react';
import { TypeAnimation } from '../../components'
import './Center.css';

class Center extends Component {
  render() {
    return (
      <div id='center'>
        <div>
          <h1 id="centerName">kevin kim</h1>
        </div>
        <div id='animationContainer'>
          <TypeAnimation/>
          <div id='underline'></div>
        </div>
      </div>
    );
  }
}

export default Center;
