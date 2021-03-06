import React, { Component } from 'react';
import Header from '../Header';
import FiatCurrency from '../../containers/FiatCurrency';
import Coins from '../../containers/Coins';
import CoinDetail from '../../containers/CoinDetail';
import Footer from '../Footer';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <FiatCurrency/>
        <Switch>
          <Route exact path="/" component={Coins} />
          <Route exact path="/detail/:id" component={CoinDetail} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

