import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import githublogo from "./githublogo.png"
import linkedinlogo from "./linkedinlogo.png";
import emaillogo from "./emaillogo.png"
import "./style.css";

function Navbar() {
    return (
        <header>
            <Link to="/" id="logoimg">
                <img src={logo} alt="Logo" id="logo"></img>
            </Link>
            <nav id="navbar">
                <div id="links">
                <Link to="/about" className="links">About</Link>
                <Link to="/contact" className="links">Contact</Link>
                </div>
                <div id="linkimg">
                <a href="https://github.com/adamalcantara">
                    <img src={githublogo} alt="" className="linkimg"></img>
                </a>
                <a href="https://www.linkedin.com/in/adam-alcantara">
                    <img src={linkedinlogo} alt="" className="linkimg"></img>
                </a>
                <a href="mailto: alcantaradevlopment@gmail.com">
                    <img src={emaillogo} alt="" className="linkimg"></img>
                </a>
                </div> 
            </nav>
        </header>

    )
}

export default Navbar;