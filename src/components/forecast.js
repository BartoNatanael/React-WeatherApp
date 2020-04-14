import React, {Componenet} from 'react';

const Forecast = (props) => {

    const dailyForecast = props.days.map(day => (

        <div className="dailyForecast" key={day.dayDate}>
            <h3>{day.dayDate}</h3>
            <div className="higher">
                <div className="lower">
                    <h4>{day.dayTemp}</h4>
                    <p>Day</p>
                </div>
                <div className="lower">
                    <h4>{day.dayNight}</h4>
                    <p>Night</p>
                </div>
            </div>
            
            <h4> {day.dayWeather}</h4>
            <p>Weather</p>
            {/* <div className="icon" style={{backgroundImage:`url(${day.dayIcon})`}}></div> */}
        </div>
    ))
    return ( 
        <div className='forecast'>{dailyForecast}</div>
     );
}
 
export default Forecast;