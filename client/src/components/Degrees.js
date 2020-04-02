import React, { Component } from 'react';
import './Degrees.css';

export class Degrees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: this.props.data.temperature,
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(() => {
        return { 
          temperature: this.props.data.temperature 
        }
      });
    }, 100);
  }

  render() {
    return (
      <div className="temperature">
        {this.state.temperature}&#176;
      </div>
    )
  }
};

export default Degrees;
