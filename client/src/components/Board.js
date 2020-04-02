import React, { Component } from 'react';
import './Board.css';
import Location from './Location';

export class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinner: 'Loading...',
      reload: false,
      location: 'Amsterdam',
      data: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ location: this.element.value, reload: true });
  }

  getWeather(location) {
    return this.fetchData(`/api/weather/${location}`);
  }

  componentDidMount() {
    this.getWeather(this.state.location);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.location !== this.state.location) {
      this.getWeather(this.state.location);
    }
  }

  fetchData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ data }))
      .catch(err => console.log(err));
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
      <div className="board">
        <Location data={this.state.data.location}/>
        <br></br><br></br><br></br><br></br>
        <form onSubmit={this.handleSubmit.bind()}>
        <label>
          <input type="text" ref={ el => this.element = el } />
        </label>
        <input type="submit" value="GO" />
      </form>
      </div>
    )
  }
};

export default Board;
