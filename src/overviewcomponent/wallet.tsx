import trophy from '../imgs/trophy .png';
import React from 'react';
const wallet = () => {
  return (
    <div className="wallet_overview">
      <div className="wallet_overview_intro">
        <h4>Wallet</h4>
        <button>Withdraw Funds</button>
      </div>

      <div className="wallet_overview_content">
        <div className="trophee">
          <img src={trophy} alt="trophee" />
        </div>
        <div className="Total_Earnings">
          <button>Total Earnings</button>
          <h1>#120000.00</h1>
          <p>
            Please note this’s the total sum of ya’ transaction here on
            <b> GOGE AFRICA</b>
          </p>
        </div>
        <div className="wallet_Balance">
          <button>Balance</button>
          <h1>#30000.00</h1>
          <p>Please note this the current balance amount left on ya’ wallet.</p>
        </div>
      </div>
    </div>
  );
};
export default wallet;
