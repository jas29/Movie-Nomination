import React, { useState, useEffect } from 'react';
import { TextField, Typography } from '@material-ui/core';
import { SearchResults } from '../Results/SearchResults';
import { Cards } from '../Cards/Cards';
import './index.css'
import Message from '../Message/Success';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    textField: {
    }
}));


export const Index = () => {
    const [results, setResults] = useState({})
    const [title, setTitle] = useState("");
    useEffect(() => {
        /* eslint-disable */
        var url_string = window.location.href
        var url = new URL(url_string);
        var searchValue = url.searchParams.get("search");
        setTitle(searchValue || "")

        async function fetchData() {
            if (searchValue == null) {
                setResults({});
                return;
            }
            let data = await SearchResults(searchValue)
            if (data.data != null && data.data.Error != null) {
                setError(true)
            }
            setResults(data || {});
        }
        fetchData()
    }, []);


    const [error, setError] = useState(false);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        history.pushState({}, '', `/?search=${title}`)
        let data = await SearchResults(title)
        if (data.data != null && data.data.Error != null) {
            setError(true)
        }
        setResults(data || {});
    }
    const classes = useStyles()
    return (
        <div>
            <form onSubmit={e => onSubmitHandler(e)}>
                <div className="searchContainer">   
                    <Typography variant="h4" component="h1"> Movie Nomination </Typography>
                    <TextField fullWidth value={title} className={`${classes.textField} searchBar`} id="filled-basic" label="Search for movies" variant="outlined" onChange={e => setTitle(e.target.value)} />
                </div>
            </form>
            <Message show={error} severity="error"></Message>
            <Cards cardData={results}></Cards>
        </div>
    );
}

export default Index;

