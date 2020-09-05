import React from 'react';
import './Cards.css'
import Button from '@material-ui/core/Button';
import { Nominate } from '../Nomination/Nominate';

export const Cards = ({cardData}) => {
    if (cardData == null || cardData.data == null) {
        return null;
    }
    const movies = cardData.data.Search
    console.log(movies)
    return movies.map(movie => (
        <div className="cardContainer" key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <h4>{movie.Year}</h4>
            <div className="imageContainer">
                <img src={movie.Poster} className="moviePoster" alt={`movie poster for ${movie.Title}`}/>
            </div>
            <Button variant="contained" color="primary" onClick={e => Nominate(movie)}>
            Nominate
            </Button>
        </div>  
    ))
}

export default Cards;