import React, { Component } from 'react';
import './Location.css';

export class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: this.props.data.name,
      country: this.props.data.country,
    }
  }

  render() {

    return (
      <div>
        <span className="city">
          {this.state.city}
        </span>
        <br></br>
          {this.state.country.toUpperCase()}
      </div>
    )
  }
};

export default Location;
