import React, { Component, PropTypes } from 'react';

// Guess component - represents a single guess item

export default class Guess extends Component {
  render() {
    return (
        <div>
          <li>AGE: {this.props.guess.age}</li>
          <li>STARTED DATING AT : {this.props.guess.startDate}</li>
          <li>SUITORS SO FAR: {this.props.guess.suitorsSoFar}</li>
          <li>GUESSED LIFE SPAN: {this.props.guess.lifespan}</li>
        </div>
    );
  }
}

Guess.propTypes = {
  // This component gets the guess to display through a React prop.
  // We can use propTypes to indicate it is required
  guess: PropTypes.object.isRequired,
};
