import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BuyersContainer from './BuyersContainer'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { LOG_IN_PATH } from '../Routes'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4),
        height: '100%'
    }
}))

const BuyersPage = () => {
    const isAuth = useSelector((state) => state.loginPage.isAuth)

    const classes = useStyles()
    return (
        <div className={classes.root}>
            {!isAuth && <Redirect to={LOG_IN_PATH} />}
            <BuyersContainer />
        </div>
    )
}

export default BuyersPage