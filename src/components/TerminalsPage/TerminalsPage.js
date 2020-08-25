import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TerminalsContainer from './TerminalsContainer'
import { LOG_IN_PATH } from '../Routes'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import AddNewTerminalFormContainer from './AddNewTerminalForm/AddNewTerminalFormContainer'


const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        height: '100%',
        width: '100%'

    },
    list: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
    }

}))



const TerminalsPage = () => {
    const isAuth = useSelector((state) => state.loginPage.isAuth)
    const classes = useStyles()

    return (<>
        {!isAuth && <Redirect to={LOG_IN_PATH} />}
        <div className={classes.root}>
            <div className={classes.form}>
                <AddNewTerminalFormContainer />
            </div>
            <div className={classes.list}>
                <TerminalsContainer />
            </div>
        </div>
    </>

    )
}

export default TerminalsPage