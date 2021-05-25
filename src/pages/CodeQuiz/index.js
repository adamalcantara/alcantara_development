import React from "react";
import "./style.css";
import screenshot from "./codequiz.png"

function CodeQuiz() {
    return (
        <div id="pageContent">
            <img id="screenshot" src={screenshot}></img>
            <p>Using an array of questions, this quiz is created and run using JavaScript, and also using elements of HTML and CSS. When the user gets a question wrong, 10 seconds is deducted from the clock.</p>
            <p>The remaining time on the clock is then recorded as their score, and they can input their initials, and see their score and initials on the high scores page. The data will remain on the high scores page, even when the user leaves the page.</p>
            <a href="https://github.com/adamalcantara/code_quiz" className="button">Project Repository</a>
            <a href="https://adamalcantara.github.io/code_quiz/" className="button">Deployed Project</a>
        </div>
    )
}

export default CodeQuiz