import React, { Component } from 'react';
import './FeelsLike.css';

export class FeelsLike extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feelsLike: this.props.data.feelslike,
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(() => {
        return { 
          feelsLike: this.props.data.feelslike
        }
      });
    }, 100);
  }

  render() {
    return (
      <div className="feelslike">
        Feels like: {this.state.feelsLike}
      </div>
    )
  }
};

export default FeelsLike;
