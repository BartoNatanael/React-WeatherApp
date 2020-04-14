import React from 'react';
import './Result.css';

const Result = (props) => {
    const {err, city, temp, date,sunrise, sunset, pressure, wind, weather} = props.weather

    let content = null;

    if(!err && city) {

        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
        content = (
            <div>
            <h3>{city}</h3>
            <p>City Name</p>
            <h4>{temp}°C</h4>
            <p>Temperature</p>
            <div className='higher'>
                <div className='lower'>
                    <h4>{date}</h4>
                    <p>Date and hour</p>
                </div>
                <div className='lower'>
                    <h4>{weather}</h4>
                    <p>Weather</p>
                </div>
            </div>
            <div className='higher'>
                <div className='lower'>
                    <h4>{sunriseTime}</h4>
                    <p>Sunrise</p>
                </div>
                <div className='lower'>
                    <h4>{sunsetTime}</h4>
                    <p>Sunset</p>
                </div>
            </div>
            
            </div>
            
        )
    }

    return (
        <>
        <div className="result">
          {err ? `Nie mamy w bazie: ${city}` : content}  
        </div>
        </>
    );
}
 
export default Result;