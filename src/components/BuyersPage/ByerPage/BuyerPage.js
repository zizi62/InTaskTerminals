import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BuyerContainer from './BuyerContainer'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4),
        position: 'relative',
        minHeight: '100%'
    }
}))

const BuyerPage = () => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <BuyerContainer />
        </div>
    )
}

export default BuyerPage