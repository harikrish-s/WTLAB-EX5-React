import React from 'react';
import './Coin.css';

const Coin = ({ image, name, symbol, currentPrice, percentageChange }) => {
  const changeClassName = percentageChange < 0 ? 'coin-change negative' : 'coin-change';

  return (
    <div class="grid-container">
      <div className="coin-card">
        <div className="coin-details-1">
          <img className="coin-logo" src={image} alt="logo" />
          <div className="coin-spacing">
            <div className="coin-name">{name}</div>
            <div className="coin-symbol">{symbol}</div>
          </div>
        </div>
        <div className="coin-details-2">
          <div className="coin-spacing">
            <div className="coin-price">${currentPrice}</div>
            <div className={changeClassName}>{percentageChange}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
