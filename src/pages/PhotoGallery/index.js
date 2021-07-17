import React from "react";
import "./style.css";
import screenshot from "./galleryscreenshot.png"

function PhotoGallery() {
    return (
        <div id="pageContent">
            <img id="screenshot" src={screenshot}></img>
            <p>A predecessor to my new photography website for my freelance business, this project was built as an experiment to see if I could get a photo gallery to look and function the way I wanted it to on the final site.</p>
            <p>This uses HTML, CSS, and JavaScript.  JavaScript is responsible for placing the opened images on the page in a lightbox format, and moving from one image to the next when the time comes.</p>
            <div id="buttons">
            <a href="https://github.com/adamalcantara/photo_gallery" className="button" target="_blank">Project Repository</a>
            <a href="https://adamalcantara.github.io/photo_gallery/" className="button" target="_blank">Deployed Project</a>
            </div>
        </div>
    )
}

export default PhotoGallery