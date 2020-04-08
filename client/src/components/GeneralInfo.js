import React, { Component } from 'react';
import './GeneralInfo.css';

export class GeneralInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressure: this.props.data.pressure,
      precipitations: this.props.data.precip,
      humidity: this.props.data.humidity,
      uv: this.props.data.uv_index
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(() => {
        return { 
          pressure: this.props.data.pressure,
          precipitations: this.props.data.precip,
          humidity: this.props.data.humidity,
          uv: this.props.data.uv_index
        }
      });
    }, 100);
  }

  render() {
    return (
      <div className="general-info">
        Pressure: {this.state.pressure}
        <br></br>
        Precipitations: {this.state.precipitations}
        <br></br>
        Humidity: {this.state.humidity}
        <br></br>
        UV Index: {this.state.uv}
      </div>
    )
  }
};

export default GeneralInfo;
