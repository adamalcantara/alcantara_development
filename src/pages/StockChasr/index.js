import React from "react";
import "./style.css";
import screenshot from "./stockchasrscreenshot.png"

function PhotoGallery() {
    return (
        <div id="pageContent">
            <img id="screenshot" src={screenshot}></img>
            <p>Using the Market Stack API, and the Polygon API, my final group project for my coding boot camp involved building a stock application that lets users create a watch list and track stocks they might want to buy.  The greatest undertaking for me in this project was creating the interactive chart that users see once they search for a stock.</p>
            <p>StockChasr was built using React as the framework, and I was primarily responsible for the chart, which used CanvasJS, the look of the dashboard, which used Material UI, and the styling which was done with CSS.</p>
            <div id="buttons">
            <a href="https://github.com/adamalcantara/stockchasr" className="button">Project Repository</a>
            <a href="https://stockchasr.herokuapp.com/" className="button">Deployed Project</a>
            </div>
        </div>
    )
}

export default PhotoGallery