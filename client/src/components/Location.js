import React, { Component } from 'react';

export class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: this.props.data.name,
    }
  }
  render() {
    return (
        <h2>
          {this.state.city}
        </h2>
    )
  }
};

export default Location;
