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

  componentDidMount() {
    setInterval(() => {
      this.setState(() => {
        return { 
          city: this.props.data.name, 
          country: this.props.data.country 
        }
      });
    }, 100);
  }

  render() {

    return (
      <div className="location-container">
        <span className="city">
          {this.state.city}
        </span>
        <br></br>
        <span className="country">
          {this.state.country.toUpperCase()}
        </span>
      </div>
    )
  }
};

export default Location;
