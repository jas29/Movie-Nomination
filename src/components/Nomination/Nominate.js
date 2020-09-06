import React, {useState} from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';



export const Nominate = () => {
    // This line here is causing an issue, look into this
    const nominateMovies = localStorage

    const [anchorEl, setAnchorEl] = useState(null);

    const [nomMovie, setNomMovie] = useState('')

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const removeNomination = (movieID) => {
        localStorage.removeItem(movieID)
    }
    
    
    return(
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
    {Object.keys(nominateMovies).map(movie => (
        <MenuItem onClick={handleClose}>
            {nominateMovies[movie]}
                <IconButton color="inherit" onClick={e => removeNomination(movie)}>
                    <RemoveIcon />
                </IconButton>
        </MenuItem>
    ))}
      </Menu>
        </div>
    )
}


export default Nominate;
