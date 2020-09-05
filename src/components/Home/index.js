import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { SearchResults } from '../Results/SearchResults';
import { Cards } from '../Cards/Cards';
import './index.css'


export const Index = () => {
    const [results, setResults] = useState({})
    const [title, setTitle] = useState('');

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setResults(await SearchResults(title));
    }

    return (
    <div>
        <form onSubmit={e => onSubmitHandler(e)}>
            <div className="searchContainer">
            <TextField className="searchBar" id="filled-basic" label="Search for movies" variant="filled" onChange={e => setTitle(e.target.value)}/>
            </div>
        </form>
        <Cards cardData={results}></Cards>
    </div>
    );
}

export default Index;

