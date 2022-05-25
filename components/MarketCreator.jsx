/**
 * ************************************
 *
 * @module  MarketCreator
 * @author
 * @date
 * @description presentation component that takes user input for new market creation
 *
 * ************************************
 */

import React from 'react';
import * as Actions from '../actions/actions.js'
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => 
(
  { 
    newMarket: () => dispatch(Actions.addMarketLocationActionCreator()),
    newLocation: (location) => dispatch(Actions.setNewLocationActionCreator(location)),
  }
);
 
const MarketCreator = props => {
  // how do we create the circuit between the store and an input field? with a handleClick
  // // how do we update the store from a presentation component? // with props

const handleClick = function (location){
  props.newLocation(location)
  props.newMarket();
}

  return(
    <div>
      <h3>Create New Market</h3>
      <h3>Location: 
        <input id="inputLocation" value={props.inputValue}></input>
        <button className="addMarket" onClick={() => handleClick(document.getElementById('inputLocation').value)}>Add Market</button>
        </h3>
    </div>
  )
};

/* const reducer = Redux.combineReducers() */

// export default connect (MarketCreator);
export default connect(null, mapDispatchToProps) (MarketCreator);