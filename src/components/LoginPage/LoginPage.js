import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import LoginFormContainer from './LoginFormContainer'
import Error from '../common/Error'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { TERMINALS_PATH } from '../Routes'


const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4),
        height: '100%',
        width:'100%',
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(2)
    }
}

}))



const LoginPage = () => {

    const classes = useStyles()

    const isAuth = useSelector((state) => state.loginPage.isAuth)
    const errorMessage = useSelector((state) => state.loginPage.error)
    return (
        <div className={classes.root}>
            {isAuth && <Redirect to={TERMINALS_PATH} />}
            {errorMessage&& <Error text={errorMessage} />}
           
            <LoginFormContainer />
        </div>
    )
}

export default LoginPage