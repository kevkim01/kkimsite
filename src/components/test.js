import React, { Component } from 'react';

class TxtType extends Component {
  constructor(props){
    super(props)
    this.state = {
      messages: props.messages,
      //el: props.el,
      loopNum: 0,
      stall: props.stall,
      txt: '',
      isDeleting: false,
    }
  }
  componentDidMount(){
    var i = this.state.loopNum % this.state.messages.length;
    var fullTxt = this.state.messages[i];

    if (this.state.isDeleting) {
      this.props.callback(fullTxt.substring(0, this.state.txt.length - 1))
      this.setState({
        txt: fullTxt.substring(0, this.state.txt.length - 1)
      })
    } else {
      this.props.callback(fullTxt.substring(0, this.state.txt.length - 1))
      this.setState({
        txt: fullTxt.substring(0, this.state.txt.length + 1)
      })
    }

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.state.isDeleting) { delta /= 2; }

    if (!this.state.isDeleting && this.state.txt === fullTxt) {
    delta = this.state.stall;
    this.state.isDeleting = true;
    } else if (this.state.isDeleting && this.state.txt === '') {
    this.state.isDeleting = false;
    this.state.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    }, delta);
  }


  render() {
    return (
      <div>
        {this.state.txt}
      </div>
    );
  }
}

export default TxtType;
