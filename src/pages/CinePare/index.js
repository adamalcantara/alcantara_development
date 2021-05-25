import React from "react";
import "./style.css";
import screenshot from "./cineparescreenshot.png"

function CinePare() {
    return (
        <div id="pageContent">
            <img id="screenshot" src={screenshot}></img>
            <p>Using the OMDb API to get movie data, this application allows users to compare movies so they can decide what to watch.</p>
            <p>This also used the TMDb API to get the movie posters.  The movie poster border, the Compare slate button, and the CinePare logo were created by me in PhotoShop.</p>
            <a href="https://github.com/adamalcantara/cine_pair" className="button">Project Repository</a>
            <a href="https://adamalcantara.github.io/cine_pair/" className="button">Deployed Project</a>
        </div>
    )
}

export default CinePare