import React from "react";
import { Link } from "react-router-dom";
import "./contactstyle.css";
import ContactForm from "../../components/Contact"

function Contact() {
    return (
        // <div className="contact">
        // <p>Feel free to contact me with any questions you have about any projects you want to build.</p>
        // <a href="mailto: alcantaradevelopment@gmail.com">Click here to email me.</a>
        // </div>
        <div className="contact">
        <p>Use the form below to contact me. I look forward to hearing from you!</p>
        <ContactForm />
        </div>
    )
}

export default Contact