import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';



export const Nominate = () => {
    // This line here is causing an issue, look into this
    const nominateMovies = localStorage.movie ? JSON.parse(localStorage.movie) : {}

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const removeNomination = (movieID) => {
        let tempStorage = JSON.parse(localStorage.movie)
        delete tempStorage[movieID]
        localStorage.setItem('movie', JSON.stringify(tempStorage))
        window.location.reload()
    }

    const LoadNominationList = (nominateMovies) => {
        if (JSON.parse(localStorage.movie) != null) {
            return (
                <div>
                    {Object.keys(nominateMovies).map(movie => (
                        <MenuItem onClick={handleClose}>
                            {nominateMovies[movie]}
                            <IconButton color="inherit" onClick={e => removeNomination(movie)}>
                                <RemoveIcon />
                            </IconButton>
                        </MenuItem>
                    ))}
                </div>
            );
        }
        if (JSON.parse(localStorage.movie) == null) {
            return (
                <MenuItem onClick={handleClose}>
                    No Movies Nominated
                </MenuItem>
            );
        }
    }


    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" color="inherit" onClick={handleClick}>
                My Nominations
      </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {LoadNominationList(nominateMovies)}
            </Menu>
        </div>
    )
}


export default Nominate;
