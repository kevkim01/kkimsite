import React, { Component } from 'react';
import './TypeAnimation.css';

var AutoTypeObj = function(element, messages) {
  this.element = element;
  this.messages = messages;
  this.messageIndex = 0;
  this.stall = 2100;
  this.txt = '';
  this.Type();
  this.backspace = false;
};

AutoTypeObj.prototype.Type = function() {
  var i = this.messageIndex % this.messages.length;
  var fullMessage = this.messages[i];
  var that = this;

  if (this.backspace) {
    this.txt = fullMessage.substring(0, this.txt.length - 1);
  }
  else {
    this.txt = fullMessage.substring(0, this.txt.length + 1);
  }
  this.element.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var rand = Math.random() * (+60 - +30) + +30
  var cursorSpeed = 180 - rand;

  if (this.backspace) {
    cursorSpeed /= 2.5;
  }

  if (!this.backspace && this.txt === fullMessage) {
    cursorSpeed = this.stall;
    this.backspace = true;
  }
  else if (this.backspace && this.txt === '') {
    this.backspace = false;
    this.messageIndex++;
    cursorSpeed = 500;
  }

  setTimeout(function() {
  that.Type();
  }, cursorSpeed);
};


class TypeAnimation extends Component{
  constructor(){
    super()
    this.state = {
      messageList: '[ "test 1", "test 2", "test 3", "test 4", "test 5"]'
    }
  }

  componentDidMount(){
    var element = document.getElementsByClassName('typewrite');
    var messages = this.state.messageList;
    new AutoTypeObj(element[0], JSON.parse(messages));
  }

  render() {
    return(
      <div>
        <div className="typewrite">
          <span className="wrap"></span>
        </div>
      </div>
    );
  }
}

export default TypeAnimation
