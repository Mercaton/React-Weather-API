import React, {useState} from 'react'
import axios from "axios";


function App() {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')

    const apiKey = import.meta.env.VITE_API_KEY;

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

            axios.get(url)
                .then((response) => {
                setData(response.data)
                console.log(response.data)
            })
                .catch((error) => {
                    if (error.response && error.response.status === 401) {
                        console.error("Axios error 401 - Unauthorized");
                    } else {
                        console.error("Other Axios error:", error)
                    }
                });
            setLocation('')
        }

    }
    return (
        <div className="app">
            <div className="search">
                <input
                    value={location}
                    onChange={event => setLocation(event.target.value)}
                    onKeyDown={searchLocation}
                    placeholder='Enter location'
                    type="text"/>
            </div>
            <div className="container">
                <div className="top">
                    <div className="location">
                        <p>{data.name}</p>
                    </div>
                    <div className="temp">
                        {data.main ? <h1>{data.main.temp}&deg;C</h1> : null}
                    </div>
                    <div className="description">
                        {data.weather ? <p>{data.weather[0].main}</p> : null}
                    </div>
                </div>

                {data.name != undefined &&
                    <div className="bottom">
                        <div className="feels">
                            {data.main ? <p className="bold">{data.main.feels_like}&deg; C</p> : null}
                            <p>Feels like</p>
                        </div>
                        <div className="humidity">
                            {data.main ? <p className="bold">{data.main.humidity} %</p> : null}
                            <p>Humidity</p>
                        </div>
                        <div className="wind">
                            {data.wind ? <p className="bold">{data.wind.speed} MPH</p> : null}
                            <p>Wind</p>
                        </div>
                        <div className="pressure">
                            {data.main ? <p className="bold">{data.main.pressure} hPa</p> : null}
                            <p>Pressure</p>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}

export default App
