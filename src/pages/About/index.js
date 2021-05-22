import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import resume from "./AAResume2021.pdf";

function About() {
    return (
        <div>
            <div id="textbox">
                <p>My passion for building things has eclipsed everything else in my life since I was young.  My first websites were built with Apple’s iWeb, followed by Wordpress.  I have always been fascinated with the potential that web development has to offer.</p>
                <p>This fascination is what led me to enroll in the Coding Boot Camp at the University of Central Florida to further my development skills.</p>
                <p>When it comes to web development, I am passionate about dynamic, intuitive user experiences.  I can be described as driven, ambitious, and always looking for a new challenge to pursue.</p>
                <p>In my spare time, I can be found building guitars, or taking photographs.</p>
                <p>Contact me for more information.  I’ll build something awesome for you.</p>
                <a href={resume}>Click here to view my résumé.</a>
            </div>

        </div>
    )
}

export default About;