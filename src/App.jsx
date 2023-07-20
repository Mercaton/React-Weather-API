import React, { useState } from 'react'
import axios from "axios";


function App() {

    // const url = 'https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=089a23e259f40f177b7c85e9782374db'

  return (
    <div className="app">
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
                  <p>65&deg;F</p>
              </div>
              <div className="humidity">
                  <p>20%</p>
              </div>
              <div className="wind">
                  <p>12MPH</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default App
