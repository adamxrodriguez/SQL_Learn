/**
 * ************************************
 *
 * @module  Market
 * @author
 * @date
 * @description presentation component that renders a single box for each market
 *
 * ************************************
 */

import React, {useState} from 'react';
import * as Actions from '../actions/actions.js'
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => (
{
  addCard: (marketId) => dispatch(Actions.addCardActionCreator(marketId)),
  deleteCard: (marketId) => dispatch(Actions.deleteCardActionCreator(marketId))
}
);

const mapStateToProps = state => ({
  markets: state.markets
});

const Market = props => {
  const handleClickAdd = function (num){
    props.addCard(num);
   
  }
  
  const handleClickDelete = function (num) {
    props.deleteCard(num);
    console.log("is this delete working?? count: ",props.cardCount); 
  }
  
return(
  <div className="marketBox">
    <h3>Market ID: {props.marketId}</h3>
    <h3>Location: {props.location}</h3>
    <h3>Cards: {props.cardCount}</h3>
    <h3>% of Total:</h3>
    <button className="addCard" onClick ={() => handleClickAdd(props.marketId)}>Add Card</button> 
    <button className="deleteCard" onClick ={() => handleClickDelete(props.marketId)}>Delete Card</button>
  </div>
)
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);
