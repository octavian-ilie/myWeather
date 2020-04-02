import React, { Component } from 'react';
import './Conditions.css';

export class Conditions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conditions: this.props.data.weather_descriptions,
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(() => {
        return { 
          conditions: this.props.data.weather_descriptions
        }
      });
    }, 100);
  }
  render() {
    return (
      <div className="conditions">
        {this.state.conditions}
      </div>
    )
  }
};

export default Conditions;
