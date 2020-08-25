import React from 'react'
import { AppBar, Toolbar, makeStyles, Typography } from '@material-ui/core'



const useStyle = makeStyles(theme => ({
    root:{
        '& .MuiToolbar-root':{
            justifyContent: 'center'
        }
}
       

    
}))


const Footer = () => {

    const classes = useStyle()
    return <AppBar position='static'className ={classes.root}>
        <Toolbar >
      <Typography variant="caption" component='div' align='center'>Copyright &#169; 2020</Typography>  
        </Toolbar>
    </AppBar>


}

export default Footer 