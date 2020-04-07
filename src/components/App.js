import React, {Component} from 'react';
import Form from './form';
import Result from './result';
import './App.css';

// Klucz do API
const APIKey = '42f820f38e074d0adb73d09de7748a6c'

class App extends Component {

  state = {
    value: "",
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    err: false,
  }
  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleCitySubmit = (e) => {
    e.preventDefault()
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`

    fetch(API)
    .then(response => {
      if(response.ok){
        return response
      }
      throw Error("Nie udało się")
    })
    .then(response => response.json())
    .then(data => {
      const time = new Date().toLocaleString()
      this.setState({
        date: time,
        city: this.state.value,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        temp: data.main.temp,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        err: false
      })
    })
    .catch(err => {
      console.log(err);
      this.setState({
        err: true,
        city: this.state.value
    })})
  }

  render(){
  return (
    <div className="App">
      <Form 
      value={this.state.value} 
      change={this.handleInputChange}
      submit={this.handleCitySubmit}
      />
      <Result 
      weather={this.state}
      />
    </div>
  );}
}

export default App;
