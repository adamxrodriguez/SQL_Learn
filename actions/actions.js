/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from '../constants/actionTypes';


//increments # of markets
export const addMarketLocationActionCreator = () => ({
  type:types.ADD_MARKET,
});


// sets state of new market location
export const setNewLocationActionCreator = marketLocation => {
  return ({
    type: types.SET_NEW_LOCATION,
    payload: marketLocation,
  });
};


// add card
export const addCardActionCreator = marketId => ({
  type: types.ADD_CARD,
  payload: marketId,
});


// delete card
export const deleteCardActionCreator = marketId =>({
  type: types.DELETE_CARD,
  payload: marketId,
});













// add more action creators