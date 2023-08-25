import React, { useState, useEffect } from 'react';
import './App.css';
import CoinList from './components/CoinList';

function App() {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
      .then(response => response.json())
      .then(data => {
        setCryptocurrencies(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cryptocurrency Dashboard</h1>
        <CoinList cryptocurrencies={cryptocurrencies} />
      </header>
    </div>
  );
}

export default App;
