import React, { useState, useEffect } from 'react';
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
  navbar: {
    background: "#FF385C"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  badge: {
    marginRight: "10px"
  },
  title: {
    flexGrow: 1,
    textAlign: 'left'
  },
}));


export const Navbar = () => {
  const classes = useStyles();

  const numItems = localStorage.movie ? Object.keys(JSON.parse(localStorage.movie)).length : 0

  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <Typography variant="h6" component="h1" className={classes.title} >
            <a href="/" style={{ color: "inherit", textDecoration: "none" }}>
              Movie Maestro
            </a>
          </Typography>
          <Badge badgeContent={numItems} className={classes.badge} color="secondary">
            <HowToVoteIcon />
          </Badge>
          <Nominate></Nominate>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar;