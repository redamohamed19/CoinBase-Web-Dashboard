import './css/App.css';
import logo from '../src/imgs/icon_logo.svg';
import search_icon from './imgs/Search-Icon.svg';
import avatar from './imgs/avatar_pic.jpg';
import ring from './imgs/ring.png';
import overview from './imgs/overview_white.svg';
import reuse from './imgs/reuse.svg';
import settings from './imgs/settings.svg';
import sttatics from './imgs/sttatics.svg';
import wallet from './imgs/wallet.svg';
import trade from './imgs/trade.svg';
import Overview from './overview';
import React from 'react';

function App() {
  return (
    <div className="container">
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
          <p>CoinBase</p>
        </div>
        <div className="search_bar">
          <img src={search_icon} alt="search" />
          <input type="text" placeholder="Search e.g card"></input>
        </div>
        <div className="avatar">
          <img src={avatar} alt="avatar" />
          <p>Ramon Ridwan</p>
        </div>
        <div className="notifications">
          <img src={ring} alt="ring" />
          <span>28</span>
        </div>
      </nav>
      <div className="content">
        <div className="side_nav">
          <ul>
            <li>
              <img src={overview} alt="overview" />
              Overview
            </li>
            <li>
              <img src={trade} alt="trade" />
              Trade
              <span className="notif_count">19</span>
            </li>
            <li>
              <img src={wallet} alt="wallet" />
              Wallet
            </li>
            <li>
              <img src={reuse} alt="reuse" />
              Transactions
            </li>
            <li>
              <img src={sttatics} alt="stattics" />
              Statistics
            </li>
            <li>
              <img src={settings} alt="settings" />
              Settings
            </li>
          </ul>
        </div>
        <Overview />
      </div>
    </div>
  );
}

export default App;
