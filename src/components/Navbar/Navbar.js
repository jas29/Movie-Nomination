import React, {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import Badge from '@material-ui/core/Badge';
import { Nominate } from '../Nomination/Nominate';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign: 'left'
    },
  }));


export const Navbar = () => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Movie Nomination
          </Typography>
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={2} color="secondary">
              <HowToVoteIcon />
            </Badge>
        </IconButton>
        <Nominate></Nominate>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default Navbar;