import React, { Component, PropTypes } from 'react';

// Guess component - represents a single guess item
export default class Guess extends Component {
  render() {
    return (
      <li>{this.props.guess.text}</li>
    );
  }
}

Guess.propTypes = {
  // This component gets the guess to display through a React prop.
  // We can use propTypes to indicate it is required
  guess: PropTypes.object.isRequired,
};
