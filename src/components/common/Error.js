import React from 'react'
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '0 auto 16px',
        maxWidth: 400,
        textAlign: 'center',
        padding: theme.spacing(1),
        border: '1px solid red',
        color: 'red'
    }
}))

const Error = (props) => {
    const classes = useStyles()


    const { text } = props
    return (
        <Paper className={classes.root}>
            {text}
        </Paper>

    )
}

export default Error