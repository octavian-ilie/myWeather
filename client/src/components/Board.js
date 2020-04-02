import React, { Component } from 'react';
import './Board.css';

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
      <div>
        <h2>The weather board.</h2>
      </div>
    )

  }
}

export default Board;
