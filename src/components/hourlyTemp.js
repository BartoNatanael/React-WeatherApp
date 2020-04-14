import React from 'react';
import ReactDOM from 'react-dom';
import ChartistGraph from 'react-chartist';
import Chartist from 'chartist';
import "chartist/dist/chartist.css";



const HourlyChart = (props) => {
    var hours = [...props.hours]
    let shorterHours = hours.map(hour => hour[0]+hour[1])
    let shorterHoursNumbers = shorterHours.map(hour => parseInt(hour, 10))
    var temps = [...props.temps]

    // console.log(shorterHoursNumbers)

    
var simpleLineChartData = {
  labels: shorterHours,
  series: [{
    name: 'series',
    data: temps,},
  ],
  
}
var biPolarBarChartOptions = {
  // high: 30,
  // low: -10,
  axisX: {
    labelInterpolationFnc: function(value, index) {
      return index % 3 === 0  ? value +':00' : null;
    }
  },
  axisY:{
    labelInterpolationFnc: function(value) {
      return value + '°C'
    }
  },
  showArea: true,
  
}


    return ( 
        <div className='chart'>
          <h2>Hourly forecast for 24 hours:</h2>
            <ChartistGraph data={simpleLineChartData} options={biPolarBarChartOptions} type={'Line'} className={'.ct-chart-bar'}/>

        </div>
     );
}
 
export default HourlyChart;
