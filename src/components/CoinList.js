import React from 'react';
import Coin from './Coin';

const CoinList = ({ cryptocurrencies }) => {
  return (
    <div>
      <table>
        <tbody>
          {cryptocurrencies.map((coin) => (
            <Coin
              key={coin.id}
              image={coin.image}
              name={coin.name}
              symbol={coin.symbol.toUpperCase()}
              currentPrice={coin.current_price}
              percentageChange={coin.price_change_percentage_24h}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinList;
