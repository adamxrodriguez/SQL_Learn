
// import MainContainer from "../containers/MainContainer";
// import ReactDOM  from 'react-dom';
//import  { render }  from 'react-dom';
import React, { Component } from 'react';
// import background from "../public/max the baby feb 2021 .jpeg";
// import { connect } from 'react-redux';
// import MainContainer from "../containers/MainContainer";

const e = React.createElement;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Heck yeah, You smashed that SQL like button!  Time to learn:  \n                 \n SELECT: Fetch data from database tables. \n UPDATE: Modify data in a database table \n DELETE: Deletes data from a database table \n  \n';
    }
    
    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'You like SQL? ', 
      
      // <Button />
    );
  }
};
// class Button extends React.Component{
//   render(){
//     return<div>"hello"</div>
//   }
// }

ReactDOM.render(<App />, document.querySelector('#container'));



