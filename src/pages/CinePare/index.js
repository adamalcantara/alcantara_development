import React from "react";
import "./style.css";
import screenshot from "./cineparescreenshot.png"

function CinePare() {
    return (
        <div id="pageContent">
            <img id="screenshot" src={screenshot}></img>
            <p>Based on the idea that great indecisiveness can come about when picking what movie to watch, the first group project of my boot camp aims to give users base statistics about movies they want to watch in order to help them make decisions.</p>
            <p>Built with HTML, CSS, and JavaScript, this uses two APIs in order to display data about the movies the user searches.</p>
            <div id="buttons">
            <a href="https://github.com/adamalcantara/cine_pair" className="button">Project Repository</a>
            <a href="https://adamalcantara.github.io/cine_pair/" className="button">Deployed Project</a>
            </div>
        </div>
    )
}

export default CinePare