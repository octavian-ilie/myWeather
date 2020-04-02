import React, { Component } from 'react';
import './Board.css';
import Location from './Location';
import Degrees from './Degrees';
import Conditions from './Conditions';
import FeelsLike from './FeelsLike';

export class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinner: 'Loading weather info...',
      location: 'Amsterdam',
      data: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ location: this.element.value });
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
        <div className="loading">
          <p>{this.state.spinner}</p>
        </div>
      )
    }

    if (this.state.data.current.weather_descriptions.toString() === 'Partly cloudy') {
      document.body.style.backgroundColor = "#779ECB";
    } else if (this.state.data.current.weather_descriptions.toString() === 'Clear') {
        document.body.style.backgroundColor = "#003E7C";
    } else document.body.style.backgroundColor = "black";

    return (
      <div className="board">
        <div className="main-info">
          <div className="table-row">
            <Location data={this.state.data.location} />
            <Degrees data={this.state.data.current} />
          </div>
          <div className="table-row">
            <Conditions data={this.state.data.current} />
            <FeelsLike data={this.state.data.current} />
          </div>
        </div>
        
        <div className="user-input">
          <form onSubmit={this.handleSubmit.bind()}>
            <label>
              <input type="text" placeholder="take me somewhere" className="text-field" ref={ el => this.element = el } />
            </label>
            <input type="submit" className="submit-button" value="GO" />
          </form>
        </div>

      </div>
    )
  }
};

export default Board;
