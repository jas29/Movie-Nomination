import React from 'react';
import './Cards.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        height: '100%',
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
    const movies = cardData.data.Search
    const classes = useStyles();
    let nominatedMovies = []

    const nominateMovie = ({movie}) => {
        if (Object.keys(localStorage).length < 5){
            nominatedMovies.push(movie.imdbID)
            localStorage.setItem(movie.imdbID,movie.Title)
            console.log(JSON.parse(localStorage.movie))
        }
        else return
    }

    const checkMovieExists = (movieID) => {
        if (localStorage[movieID] == null){
            return false
        }
        else {
            return true
        }
    }

    return (
        <Grid container>
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
                        <Button className="nominateBtn" variant="contained" disabled={checkMovieExists(movie.imdbID)} color="primary" onClick={e => nominateMovie({movie})}>
                                Nominate
                        </Button>
                        </Card>
                    </Grid>
                )
            ))}
        </Grid>
    )
}

export default Cards;