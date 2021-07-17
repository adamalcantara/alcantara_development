import React from "react";
import "./style.css";
import screenshot from "./weatherdash.png"

function WeatherDash() {
    return (
        <div id="pageContent">
            <img id="screenshot" src={screenshot}></img>
            <p>Using JavaScript and the Open Weather API, this application gets the current weather for users, as well as the five day forecast.</p>
            <p>Additionally, local storage stores their recently searched cities so that they can easily pull up those results.</p>
            <div id="buttons">
            <a href="https://github.com/adamalcantara/weather_dashboard" className="button" target="_blank">Project Repository</a>
            <a href="https://adamalcantara.github.io/weather_dashboard/" className="button" target="_blank">Deployed Project</a>
            </div>
        </div>
    )
}

export default WeatherDash