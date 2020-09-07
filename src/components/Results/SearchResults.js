import axios from 'axios';

export const SearchResults = async (movieName) => {
    try{
        // Commented out to prevent abuse
        const response = await axios.get(`http://www.omdbapi.com/?s=${movieName}&apikey=2a24e63a&type=movie`)
        // const response = mockData
        return response;
    }
    catch(err){
        console.log(err)
    }
}

