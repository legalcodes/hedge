import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Guesses } from '../api/guesses.js';

import Guess from './Guess.jsx';

// App component - represents the whole app
export default class App extends Component {
  getGuesses() {
    return [
      { _id: 1, text: 'This is guess 1' },
      { _id: 2, text: 'This is guess 2' },
      { _id: 3, text: 'This is guess 3' },
    ];
  }

  renderGuesses() {
    return this.getGuesses().map((guess) => (
      <Guess key={guess._id} guess={guess} />
    ));
  }

  render() {
    return (
      <div class="container-fluid">
      <div class="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <img src="/exes.gif" className="text-left" className="gif" />
          <h1 className="centered">Welcome to Hedge!</h1>
          <div className="centered">
            <button className="btn btn-default btn-lg" type="button">Let's Begin</button>
          </div>
          <p>You want to date enough people to get a sense of your options, but you don't want to leave the choice too long and risk missing your ideal match. You need some kind of formula that balances the risk of stopping too soon against the risk of stopping too late.</p>
          <p>If you just choose randomly, your odds of picking the best of 11 suitors is about 9 percent. But if you use this method above, the probability of picking the best of the bunch increases significantly, to 37 percent — not a sure bet, but much better than random.</p>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
    );
  }
}
