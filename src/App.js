import React, { useState } from 'react';
import {  Card, Row } from 'antd';
import tabGames from './games';
import questheader from './img/questheader.png';
import './App.scss';
import Filters from './components/filters';

const App = () => {

  const [games, setProducts] = useState(tabGames);

  const [priceFilter, setPriceFilter] = useState('all');
  const [sizeFilter, setSizeFilter] = useState('all');

  const handlePriceFilterChange = (event) => {
    setPriceFilter(event.target.value);
  };

  const handleSizeFilterChange = (event) => {
    setSizeFilter(event.target.value);
  };

  const filteredProducts = tabGames.filter((product) => {
    if (priceFilter !== 'all' && sizeFilter !== 'all') {
      return priceFilter === "moreThan100" ? product.price > 100 && product.sizes.includes(sizeFilter) : product.price < priceFilter && product.sizes.includes(sizeFilter);
    } else if (priceFilter !== 'all') {
      return priceFilter === "moreThan100" ? product.price > 100 : product.price < priceFilter;
    } else if (sizeFilter !== 'all') {
      return product.sizes.includes(sizeFilter);
    } else {
      return true;
    }
  });

    const gamesList = Object.keys(games).map(key => (
      <Row key={key} >
        <Card className='homelist'>
          <img src={games[key].image} alt={games[key].name} />
          <h3>{games[key].name}</h3>
          <p>Prix: {games[key].price}€</p>
          <p>Genre: {games[key].genre}</p>
          <p>Note: {games[key].grade}</p>
        </Card>
      </Row>
    ));

    return (
      <div>
        <img className='headerimg' src={questheader} alt="headerimg" />
        <h1>VR Library</h1>
        <Filters onPriceFilterChange={(e) => handlePriceFilterChange(e)} onSizeFilterChange={(e) => handleSizeFilterChange(e)} />
        <Row className='displaylist' gutter={[16, 16]}>
        {gamesList}
        </Row>
      </div>
    );
  }

export default App;
