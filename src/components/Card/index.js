import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Card() {
    const cardInfo = [
        { id: "andChill", text: "&Chill", linkto: "/andchill"},
        { id: "cinepare", text: "CinePare", linkto: "/cinepare"},
        { id: "weatherdash", text: "Weather Dashboard", linkto: "/weatherdash"},
        { id: "codequiz", text: "Code Quiz", linkto: "/codequiz"}
    ];

const renderCard = (card, index) => {
    return (
        
            <div className="card" id={card.id} key={index}>
                <Link to={card.linkto}>
                   <div className="overlay">
                        <div className="text">{card.text}</div>
                   </div>
                </Link>
            </div>
    );
};

return <div className="container">
    {cardInfo.map(renderCard)}
</div>;
    
}

export default Card;