import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import resume from "./Adam_Alcantara_coding_resume.pdf";
import profile from "./adam_headshot_small.jpg";

function About() {
    return (
        <div id="contentBox">
            
            <div id="textbox">
            <img src={profile} id="image"></img>
                <p id="paragraph">My passion for building things has eclipsed everything else in my life since I was young.  My first websites were built with Apple’s iWeb, followed by Wordpress.  I have always been fascinated with the potential that web development has to offer.
                This fascination is what led me to enroll in the Coding Boot Camp at the University of Central Florida to further my development skills.
                When it comes to web development, I am passionate about dynamic, intuitive user experiences.  I can be described as driven, ambitious, and always looking for a new challenge to pursue.
                In my spare time, I can be found building guitars, or taking photographs.
                Contact me for more information.  I’ll build something awesome for you.</p>
                <a id="resume" href={resume} target="_blank">Click here to view my résumé.</a>
            </div>


        </div>
    )
}

export default About;