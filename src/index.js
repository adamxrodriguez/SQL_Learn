'use strict';



// import MainContainer from "../containers/MainContainer";

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import MainContainer from "../containers/MainContainer";

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
      
    if (this.state.liked) {
      return 'Heck yeah, You smashed that SQL like button.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'You like SQL?'
    );
  }
}


const domContainer = document.querySelector('#container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));


