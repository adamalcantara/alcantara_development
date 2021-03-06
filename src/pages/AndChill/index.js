import React from "react";
import "./style.css";
import screenshot from "./andchillscreenshot.png"

function AndChill() {
    return (
        <div id="pageContent">
            <img id="screenshot" src={screenshot}></img>
            <p>Built primaily with Handlebars, this application allows users to sign up and create an account.</p>
            <p>Once signed up, users will be matched with other users whose movie watching preferences match their own</p>
            <div id="buttons">
            <a href="https://github.com/adamalcantara/andChill" className="button" target="_blank">Project Repository</a>
            <a href="https://and--chill.herokuapp.com/" className="button" target="_blank">Deployed Project</a>
            </div>
        </div>
    )
}

export default AndChill