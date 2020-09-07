import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const Message = ({ show, severity }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(show);

    const handleClose = (event, reason) => {
        if (reason == 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const message = {
        "success": 'You have nominated 5 movies :)',
        "error": 'No results found :('
    }
    return (
        <div className={classes.root}>
            <Snackbar open={open} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity}>
                    {message[severity]}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default Message