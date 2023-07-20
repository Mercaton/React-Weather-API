import React, {useState} from 'react'
import axios from "axios";


function App() {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')

    const url = 'https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=089a23e259f40f177b7c85e9782374db'

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(response.data)
            })
        }
    }
    return (
        <div className="app">
            <div className="search">
                <input
                    value={location}
                    onChange={event => setLocation(event.target.value)}
                    placeholder='Enter location'
                    type="text"/>
            </div>
            <div className="container">
                <div className="top">
                    <div className="location">
                        <p>Dallas</p>
                    </div>
                    <div className="temp">
                        <h1>60&deg;F</h1>
                    </div>
                    <div className="description">
                        <p>Clouds</p>
                    </div>
                </div>
                <div className="bottom">
                    <div className="feels">
                        <p className="bold">65&deg; F</p>
                        <p>Feels like</p>
                    </div>
                    <div className="humidity">
                        <p className="bold">20 %</p>
                        <p>Humidity</p>
                    </div>
                    <div className="wind">
                        <p className="bold">12 MPH</p>
                        <p>Wind</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
