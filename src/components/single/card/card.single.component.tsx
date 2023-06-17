import React from "react";
import CardPropsType from "./card.single.props.type";
import './card.single.style.scss';

const CardSingleComponent = ({ id, title, description, imageUrl }: CardPropsType) => {
    return (
        <React.Fragment>
            <div className="card" data-id='{id}'>
                <img className="card-img" src={imageUrl} alt={`{id}_{name}`} ></img>
                <div className="card-title">{title}</div>
                <div className="card-description">{description}</div>
            </div>
        </React.Fragment>
    )
};

export default CardSingleComponent;