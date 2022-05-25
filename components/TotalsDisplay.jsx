/**
 * ************************************
 *
 * @module  TotalsDisplay
 * @author
 * @date
 * @description presentation component that displays the total cards and total markets
 *
 * ************************************
 */

import React from 'react';
import { connect } from 'react-redux'; // import connect

// mapStoreToProps
const mapStateToProps = state => ({
  totalMarkets: state.markets.totalMarkets, // from jacob and aaron
  totalCards: state.markets.totalCards
});


const TotalsDisplay = props => (
  <div className="innerbox" id="totals">
    <label htmlFor="totalCards">Total Cards:</label>
    <span id="totalCards">{props.totalCards}</span>
    <p>
      <label htmlFor="totalMarkets">Total Markets:</label>
      <span id="totalCards">{props.totalMarkets}</span>
    </p>
  </div>
);

//export default TotalsDisplay;
export default connect(mapStateToProps, null)(TotalsDisplay); // connect mapstore