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
      <div className="columns" id="socialsRow">
        <div className="column" id="iconContain">
          <div id="icon">
            <span className="fas fa-at" id="image"></span>
          </div>
          <p id="text1">email me</p>
        </div>
        <div className="column" id="iconContain">
          <div id="icon">
            <span className="fab fa-linkedin-in" id="image"></span>
          </div>
          <p id="text1">linkedin</p>
        </div>
        <div className="column" id="iconContain">
          <div id="icon">
            <span className="fab fa-github-alt" id="image"></span>
          </div>
          <p id="text1">github</p>
        </div>
        <div className="column" id="iconContain">
          <div id="icon">
            <span className="fas fa-file-alt" id="image"></span>
          </div>
          <p id="text1">resume</p>
        </div>
      </div>
    );
  }
}

export default Footer;
