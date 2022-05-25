/**
 * ************************************
 *
 * @module  marketsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  totalMarkets: 0,
  totalCards: 0,
  marketList: [],
  lastMarketId: 10000,
  newLocation: '',
};

const marketsReducer = (state = initialState, action) => {
  let marketList;

  switch (action.type) {
    case types.ADD_MARKET: {
        // increment lastMarketId and totalMarkets counters
      const lastMarketId = (state.lastMarketId) + 1;
      const totalMarkets = (state.totalMarkets) + 1;
        // create the new market object from provided data
      const newMarket = {
        // what goes in here?
        marketId: lastMarketId, 
        location: state.newLocation,
        cardCount: 0
      };
      console.log("This is the new market: ",newMarket);

      // push the new market onto a copy of the market list
      marketList = state.marketList.slice();
      marketList.push(newMarket);
      console.log(marketList);

      // return updated state
      return {
        ...state,
        marketList,
        lastMarketId,
        totalMarkets,
        newLocation: '',
      };
    }

    case types.SET_NEW_LOCATION: {
      return {
        ...state,
        newLocation: action.payload
      }
    }

    case types.ADD_CARD: {
      //give action payload as the market ID
      //find the market ID on marketList
      // access cardCount for that market and increment 
      marketList = state.marketList.slice();
      for (let i = 0; i < marketList.length; i++) {
        if (marketList[i].marketId == action.payload) {
          marketList[i].cardCount = marketList[i].cardCount + 1;
        }
      }

      const newTotalCards = state.totalCards + 1;
  
      return {
        ...state,
        totalCards: newTotalCards,
        marketList
      }
    }
    
    case types.DELETE_CARD: {
      let newTotalCards = state.totalCards;
      marketList = state.marketList.slice();
      for (let i = 0; i < marketList.length; i++) {
        if (marketList[i].marketId == action.payload) {
          if (marketList[i].cardCount != 0) {
            marketList[i].cardCount = marketList[i].cardCount - 1;
            newTotalCards = state.totalCards - 1;
          }
        }
      }

      return {
        ...state,
        totalCards: newTotalCards,
        marketList
      }
    }

    default: {
      return state;
    }
  }
};

/* const MarketState = {
  cardCount: 0,
}

const AddReducer = (state = MarketState, action) => {
  const newCount = state.cardCount + 1;
  return {
    ...state,
    cardCount: newCount
  }
}; */

export default marketsReducer;
