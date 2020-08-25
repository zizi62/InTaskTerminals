import React from 'react'
import { AppBar, Toolbar, makeStyles, IconButton} from '@material-ui/core'
import MobileSideBar from '../SideBar/MobilelSideBar/MobilelSideBar'
import {  useSelector } from 'react-redux'

const useStyle = makeStyles(theme => ({
    root:{
        // backgroundColor:'#fff',
       
    },menu: {
        display:'none',
        [theme.breakpoints.down('md')]: {
            display: 'block'
    }
}
 
}))


const Header = () => {
    const isAuth = useSelector((state)=> state.loginPage.isAuth)

    const classes = useStyle()
    return <AppBar position='static' className ={classes.root}>
        <Toolbar>
            {isAuth&& <MobileSideBar/>}
        </Toolbar>
    </AppBar>
}

export default Header 