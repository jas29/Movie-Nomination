import React, { useState } from 'react';
import './Cards.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Message from '../Message/Success';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        height: '100%',
        padding: 5
    },
    media: {
        height: '200px',
        width: '100%',
        paddingTop: '56.25%', // 16:9
        marginBottom: '20px',
    },
}));


export const Cards = ({ cardData }) => {
    if (cardData == null || cardData.data == null) {
        return null;
    }

    const [message, setMessage] = useState(false)

    const movies = cardData.data.Search
    const classes = useStyles();
    let nominatedMovies = localStorage.movie ? JSON.parse(localStorage.movie) : {}

    const nominateMovie = ({ movie }) => {
        console.log(message, "message to show")
        if (localStorage.movie) {
            console.log(Object.keys(JSON.parse(localStorage.movie)).length)
            if (Object.keys(JSON.parse(localStorage.movie)).length < 5) {
                nominatedMovies[movie.imdbID] = movie.Title
                localStorage.setItem('movie', JSON.stringify(nominatedMovies))
            }
            else {
                setMessage(true)
            }
        }
        else {
            nominatedMovies[movie.imdbID] = movie.Title
            localStorage.setItem('movie', JSON.stringify(nominatedMovies))
        }
        window.location.reload()
    }

    const checkMovieExists = (movieID) => {
        if (localStorage.movie && JSON.parse(localStorage.movie)[movieID]) {
            return true
        }
        else {
            return false
        }
    }

    return (
        <div>
            <Message show={message} severity="success"></Message>
            {movies &&
                <Grid container spacing={3}>
                    {movies.map(movie => (
                        (
                            <Grid item xs={12} sm={6} md={3}>
                                <Card className={classes.root}>
                                    <CardHeader
                                        title={movie.Title}
                                        subheader={movie.Year}
                                    />
                                    <CardMedia
                                        className={classes.media}
                                        image={movie.Poster}
                                        title={movie.Title}
                                        alt={movie.Title}
                                    />
                                    <Button className="nominateBtn" variant="contained" disabled={checkMovieExists(movie.imdbID)} color="primary" onClick={e => nominateMovie({ movie })}>
                                        Nominate
                        </Button>
                                </Card>
                            </Grid>
                        )
                    ))}
                </Grid>
            }

        </div>
    )
}

export default Cards;