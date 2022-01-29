import React from 'react';
import "./Card.css";

function Card(props){
    const{title, year, description,image, link} = props;
    return(
        <div className='card'>
            <div className='card-img'>
                <img src={image} alt={title} />
            </div>
            <div className='card-text'>
                <h3 className='title'>{title}</h3>
                <div className='info'>
                    <span className='year'>{year}</span>
                    <a href={link} target="_blank" className='link' rel='noreferrer'>View project</a>
                </div>
                <p className='description'>{description}</p>
            </div>
        </div>
    )
}
export default Card;