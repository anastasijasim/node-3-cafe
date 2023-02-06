import React from 'react'
import "./WeatherCard.css";
import { FaSnowflake, FaSun} from "react-icons/fa";

const lightblue = "rgb(236, 250, 255)";
const lightyellow = "#F4D772";
const iconSize = 112; 

const WeatherCard = ({weather}) => {
    const getWeatherIcon = (weathercode) =>{
        switch(weathercode){
            case 71:
                return {
                    icon: <FaSnowflake color='#DBF1FD' size={iconSize}/>, 
                    backgroundColor: lightblue,
            };
            default:
                return {
                    icon: <FaSun color='#faeec7' size={iconSize}/>,
                    backgroundColor: lightyellow
            };
        }
    };
    const weathercode = weather.daily.weathercode[0]
    const{icon, backgroundColor} = getWeatherIcon(weathercode);
    // console.log(weather);
    //undefined.timezone
  return (
    <div className='weather-card' style={{backgroundColor}}>
        <div className='weather-info'>
            <p className='weather-city'>{weather.timezone}</p>
            <p className='weather-date'>{new Date().toDateString()}</p>
            <p className='weather-temperature'>
                {weather.daily.temperature_2m_min[0]}
                {weather.daily_units.temperature_2m_min}- {" "}
                {weather.daily.temperature_2m_max[0]}
                {weather.daily_units.temperature_2m_max}
            </p>
            <p className='weather-windspeed'>
                {weather.daily.windspeed_10m_max[0]}
                {weather.daily_units.windspeed_10m_max}
            </p>
        </div> 
        <div className='weather-icon'>
            {icon}
        </div>
    </div>
  );
};

export default WeatherCard