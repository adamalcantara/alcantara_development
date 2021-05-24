import React from "react";
import { Link } from "react-router-dom";
import andChill from "./and_chill.png"
import "./style.css";

function Home() {
    return (
        <div className="page">
            <div className="container">
               <div className="card" id="andChill">
                   <div className="overlay">
                        <div className="text">&Chill</div>
                   </div>
               </div>
               <div className="card" id="cinepare">
                   <div className="overlay">
                        <div className="text">CinePare</div>
                   </div>
               </div>
               <div className="card" id="weatherdash">
                   <div className="overlay">
                        <div className="text">Weather Dashboard</div>
                   </div>
               </div>
               <div className="card" id="codequiz">
                   <div className="overlay">
                        <div className="text">Code Quiz</div>
                   </div>
               </div>
               <div className="card">FIVE</div>
               <div className="card">SIX</div>
               <div className="card">SEVEN</div>
               <div className="card">EIGHT</div>
               <div className="card">NINE</div>
               <div className="card">TEN</div>
            </div>
        </div>
    )
}

export default Home