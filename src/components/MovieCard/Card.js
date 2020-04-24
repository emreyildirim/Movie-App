import React from 'react';
import Title from './Title';
import Poster from './Poster';
import ImbdRating from './ImdbRating';
import FavButton from './FavButton';



const Card = (props) => {
    const favoriteObj = {
        id: props.id,
        title: props.title,
        year: props.year,
        poster: props.poster,
        rating: props.rating,
    };

    return (
        <div className="card">
            <Poster src={props.poster}/>
            <Title title={props.title}/>
            <ImbdRating rating={props.rating}/>
            <FavButton obj={favoriteObj}/>
        </div>
    );
};

export default Card;
