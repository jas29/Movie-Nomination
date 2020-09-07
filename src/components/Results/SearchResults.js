import React from 'react';
import axios from 'axios';
import mockData from '../../__tests__/mockData'

export const SearchResults = async (movieName) => {
    try{
        // Commented out to prevent abuse
        const response = await axios.get(`http://www.omdbapi.com/?s=${movieName}&apikey=2a24e63a&type=movie`)
        // const response = mockData
        return response;
    }
    catch(err){
        // TODO: Return error message if search fails
        console.log(err)
        return null
    }
}

