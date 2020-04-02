import React, { Component } from 'react';
import './Board.css';
import Location from './Location';

// Temporary location for development purposes
const mockLocation = 'Amsterdam';

export class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinner: 'Loading...',
      data: null,
    };
  }

  componentDidMount() {
    this.fetchData(`/api/weather/${mockLocation}`);
  }

  fetchData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }
  
  render() {

    if (!this.state.data) {
      return (
        <div>
          <p> {this.state.spinner} </p>
        </div>
      )
    }

    return (
      <div className="location-container">
        <Location data={this.state.data.location}/>
      </div>
    )

  }
};

export default Board;
