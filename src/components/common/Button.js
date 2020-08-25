import React from 'react'
import { Button as MiuButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    root: {
        margin: theme.spacing(2)
    },
    label:{
        textTransform: 'none'
    }
}))

const Button = (props) => {
    const { text, size, color, variant, onClick, ...other } = props
    const classes = useStyles()
    return (
        <MiuButton
            size={size || 'large'}
            color={color || 'primary'}
            variant={variant || 'contained'}
            onClick={onClick}
            {...other}
            classes = {{root: classes.root, label: classes.label}}>
                {text}
        </MiuButton>

    )
}

export default Button