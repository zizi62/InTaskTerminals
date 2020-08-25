import React from 'react';
import './App.css';
import { makeStyles, CssBaseline } from '@material-ui/core';
import SideBar from './components/SideBar/SideBar';
import Routes from './components/Routes';
import Header from './components/Header/Header';
import SideBarContainer from './components/SideBar/SideBarContainer';
import Footer from './components/Footer/Footer';

const useStyles = makeStyles(theme=>({
  // app:{
  //   minHeight: '100vh',
  //   display: 'flex',
  //   flexDirection: 'row',
  //   alignItems: 'stretch'
  // },
  appMain: {
    paddingLeft: '300px',
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
      alignItems: 'center'
    }
  }
}))
  

function App() {
  const classes = useStyles()

  return <diV classes= {classes.app}>

    <SideBarContainer />
   
    <div className={classes.appMain}>
    <Header />
    <Routes />
    <Footer />
    </div>
    <CssBaseline />
    
    </diV>

}

export default App;