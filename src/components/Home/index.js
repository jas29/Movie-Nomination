import React from 'react';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { SearchResults } from '../Results/SearchResults';


export const Index = () => {

    const onChangeHandler = async (e) => {
        const results = await SearchResults(e.target.value);
        console.log(results)
    }

    return (
    <form noValidate autoComplete="off">
        <div>
        <TextField id="filled-basic" label="Search for movies" variant="filled" onChange={e => onChangeHandler(e)}/>
        </div>
    </form>
    );
}

export default Index;

