import Topbar from "../components/Topbar"
import {getCars} from "../api/cars"
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { weatherAPI } from "../consts/api";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import { ThemeContext } from "../contexts/ThemeContext";
import { getMainColor } from "../utils/color";


const HomePage = () => {
    const cars = getCars();
    
    const [weather, setWeather] = useState(undefined);
    const {darkMode} = useContext (ThemeContext);

    useEffect(() => {
        fetch(weatherAPI)
            .then (resp => resp.json())
            .then((response) =>{
                setWeather(response);
                console.log (response);
            })
            .catch ((error) => console.error(error));
    }, []);


  return (
    <div style={{backgroundColor: getMainColor(darkMode),minHeight:"100vh"}}>
        <Topbar/>
        <div 
            style={{
                display: 'flex', 
                justifyContent: 'space-between', 
                alignContent: 'center',
                padding: 24,
                }}
            >    
                <h1>Mano pagrindinis puslapis</h1>
                {weather && <WeatherCard weather={weather}/>}
        </div>
        <ul>
            {cars.map((car)=>(
                <Link key={car.id} to={`/cars/${car.id}`}>
                    <li  style={{marginBottom: 8}}>
                        {car.make}, {car.model}
                    </li>
                </Link>
            ))}
        </ul>
    </div>
  )
}

export default HomePage