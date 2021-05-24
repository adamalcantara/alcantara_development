import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Card() {
    const cardInfo = [
        { id: "andChill", text: "&Chill"},
        { id: "cinepare", text: "CinePare"},
        { id: "weatherdash", text: "Weather Dashboard"},
        { id: "codequiz", text: "Code Quiz"}
    ];

const renderCard = (card, index) => {
    return (
               <div className="card" id={card.id} key={index}>
                   <div className="overlay">
                        <div className="text">{card.text}</div>
                   </div>
               </div>
    );
};

return <div className="container">
    {cardInfo.map(renderCard)}
</div>;
    
}

export default Card;