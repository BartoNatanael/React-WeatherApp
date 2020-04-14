import React, {Component} from 'react';
import Form from './form';
import Result from './result';
import Forecast from './forecast';
import HourlyChart from './hourlyTemp';
import StartPage from './startPage';

import './App.css';

// Klucz do API
const APIKey = '42f820f38e074d0adb73d09de7748a6c'
const APIpixa = '15964181-0e2a36068d47ea2f8398b6c56'

class App extends Component {

  state = {
    backGround: 'https://cdn.pixabay.com/photo/2013/10/02/23/03/dawn-190055_960_720.jpg',
    started: false,

    value: "",
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    err: false,
    weather: '',
    forecast:[ 1, 2, 3, 4],
    hourlyForecast: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13, 14, 15, 16, 17,18, 19, 20, 21, 22, 23, 24],
    hourlyForecastDate: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12','13', '14', '15', '16', '17','18', '19', '20', '21', '22', '23', '24']
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
        nightIcon: ``,
        err: false,
        started: true,
      })
      let lon = data.coord.lon
      let lat = data.coord.lat
      this.handle2ndLooking(lon, lat)
      // console.log(lon, lat)
    })
    .catch(err => {
      console.log(err);
      this.setState({
        err: true,
        city: this.state.value
    })})
      
  }

  handle2ndLooking = (lon, lat) =>{

    const API2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`
    console.log(API2)
    fetch(API2)
    .then(response => {
      if(response.ok){
        return response
      }
      throw Error("Nie udało się")
    })
    .then(response => response.json())
    .then(data => {
      let weather = data.current.weather[0].description
      if(weather.length > 20){
        weather = data.current.weather[0].main
      }
      this.setState({
        weather
      })
      console.log(weather)
      weather.replace(/ /g,"+")
      console.log(weather)
      this.handleBackGround(weather)
      let i, n
      for(i = 1; i<5;i++){
        const dayTemp = data.daily[i].temp.day
        const dayNight = data.daily[i].temp.night
        const dayWeather = data.daily[i].weather[0].description
        const dayIcon = `http://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}.png`
        const dayDate = new Date(data.daily[i].dt * 1000).toLocaleDateString()
        const day = {dayTemp, dayNight, dayWeather, dayIcon, dayDate}
        // console.log(day)
        this.setState({
          forecast: this.state.forecast.splice(0,1),
          forecast: this.state.forecast.concat(day)
        })
      }
      for(n = 0; n<25;n++){
        const hour = new Date(data.hourly[n].dt * 1000).toLocaleTimeString()
        const temp = data.hourly[n].temp

        const hourly = {hour: hour, temp: temp}
        
        // console.log(hourly)
        this.setState({
          hourlyForecast: this.state.hourlyForecast.splice(0,1),
          hourlyForecast: this.state.hourlyForecast.concat(temp),
          hourlyForecastDate: this.state.hourlyForecastDate.splice(0,1),
          hourlyForecastDate: this.state.hourlyForecastDate.concat(hour)
        })
      }
      
    })
    .catch(err => {
      console.log(err);
      })

  }

  handleBackGround = (weather) =>{
    const API = `https://pixabay.com/api/?key=${APIpixa}&q=${weather}&image_type=photo`
    console.log(API)
    fetch(API)
    .then(response => {
      if(response.ok){
        return response
      }
      throw Error("Nie udało się")
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        backGround: data.hits[0].largeImageURL
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
    <div className="App" style={{backgroundImage:`url(${this.state.backGround})`}}>
      <nav>
      <Form 
        value={this.state.value} 
        change={this.handleInputChange}
        submit={this.handleCitySubmit}
      />
      </nav>
      {this.state.started ? 
      <Result 
      weather={this.state}
      />: null}
      
      {this.state.started ? <HourlyChart
       hours={this.state.hourlyForecastDate}
       temps={this.state.hourlyForecast}
       /> : null}
      {this.state.started ? <Forecast days={this.state.forecast}/> : null}
      {this.state.started ? null : <StartPage/>}
    </div>
      
  );}
}

export default App;
