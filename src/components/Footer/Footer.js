import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div className="columns" id="iconContain">
        <div className="column">
          <div id="icon">
            <span className="fas fa-at"></span>
          </div>
        </div>
        <div className="column">
          <div id="icon">
            <span className="fab fa-linkedin-in"></span>
          </div>
        </div>
        <div className="column">
          <div id="icon">
            <span className="fab fa-github-alt"></span>
          </div>
        </div>
        <div className="column">
          <div id="icon">
            <span className="fas fa-file-alt"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
