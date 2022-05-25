/**
 * ************************************
 *
 * @module  MarketsDisplay
 * @author
 * @date
 * @description presentation component that renders in Market components
 *
 * ************************************
 */

import React from 'react';
import Market from './Market.jsx';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  marketList: state.markets.marketList,
  markets: state.markets
})

const MarketsDisplay = props => {
const markets = []; // put stuff in it
for(let i = 0; i < props.marketList.length; i++)
  {
    markets.push(<Market key={i} 
      location={props.marketList[i].location} 
      marketId={props.marketList[i].marketId} 
      cardCount={props.marketList[i].cardCount}
      totalCards={props.totalCards}/>)
  }
  return(
    <div className="displayBox">
      <h4>Markets</h4>
      {markets}
    </div>
  );
};

export default connect (mapStateToProps, null) (MarketsDisplay);