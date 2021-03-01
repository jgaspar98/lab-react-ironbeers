import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Beers from './components/Beers';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';

import {Route} from 'react-router-dom'

function App() {
  

  return (
    <div className="App">
      <Route exact path='/' component={Home}/>
      <Route exact path='/beers' component={Beers} />
      <Route path='/beers/:id' component={BeerDetails} />
      <Route path='/random-beer' component={RandomBeer}/>
    </div>
  );
}

export default App;
