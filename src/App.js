import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
      </header>
      <footer>
        This project was coded by Jessica Gardiner and is
        <a href="https://github.com/JesGardiner/weather-react" target="_blank">
          open-sourced on Github
        </a>
        and hosted on
        <a
          href="https://app.netlify.com/teams/jesgardiner/sites"
          target="_blank"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
