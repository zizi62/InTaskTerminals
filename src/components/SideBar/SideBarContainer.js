import React from 'react'
import SideBar from './SideBar'
import { makeStyles} from '@material-ui/core'
import {  useSelector } from 'react-redux'

const useStyles = makeStyles(theme => ({
    sideMenu: {
        position: 'absolute',
        left: 0,
        width: '300px',
        minHeight: '100%',
        backgroundColor: '#1a237e',
        display:'flex',
        [theme.breakpoints.down('md')]: {
            display:'none',
            // position: 'relative',
            // width: '100%',
            // minHeight:60
    }
    }
}))

    

const SideBarContainer = (props) => {
    const classes = useStyles()
    const isAuth = useSelector((state)=> state.loginPage.isAuth)
    console.log('SideBarContainer')
    return (
        <div className={classes.sideMenu}>
        {isAuth&&<SideBar isAuth = {isAuth}/>}
       
        </div>
    )
}


export default SideBarContainer